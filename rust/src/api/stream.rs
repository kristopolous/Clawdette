use crate::api::LlmClient;
use crate::types::message::ContentBlock;
use crate::types::{Message, StreamEvent as AppStreamEvent, ToolDefinition, ToolRegistry, ToolResult, Usage};
use anyhow::Result;
use tokio_util::sync::CancellationToken;
use tracing::{debug, info};

pub struct QueryEngine {
    messages: Vec<Message>,
    tool_registry: ToolRegistry,
    system_prompt: String,
    client: LlmClient,
    total_usage: Usage,
    max_turns: usize,
}

impl QueryEngine {
    pub fn new(
        tool_registry: ToolRegistry,
        system_prompt: String,
        client: LlmClient,
        max_turns: usize,
    ) -> Self {
        Self {
            messages: Vec::new(),
            tool_registry,
            system_prompt,
            client,
            total_usage: Usage::default(),
            max_turns,
        }
    }

    pub fn add_message(&mut self, message: Message) {
        self.messages.push(message);
    }

    pub fn get_messages(&self) -> &[Message] {
        &self.messages
    }

    pub fn get_usage(&self) -> &Usage {
        &self.total_usage
    }

    pub async fn submit_message(
        &mut self,
        user_message: Message,
        on_event: impl Fn(AppStreamEvent) + Send + Sync,
    ) -> Result<()> {
        self.messages.push(user_message);

        for turn in 0..self.max_turns {
            debug!("Turn {turn} of {}", self.max_turns);

            // Compact context if needed
            self.maybe_compact();

            let tools = self.tool_registry.definitions();
            let messages = self.messages.clone();
            let system = Some(self.system_prompt.clone());

            let (content_blocks, usage) = self
                .client
                .send_message(messages, system, tools, CancellationToken::new())
                .await?;

            self.total_usage.accumulate(&usage);

            let mut assistant_content: Vec<ContentBlock> = Vec::new();
            let mut tool_uses: Vec<(String, String, serde_json::Value)> = Vec::new();

            for block in &content_blocks {
                if let Some(text) = block.get("text").and_then(|v| v.as_str()) {
                    assistant_content.push(ContentBlock::Text { text: text.to_string() });
                    on_event(AppStreamEvent::TextDelta { delta: text.to_string() });
                } else if block.get("type").and_then(|v| v.as_str()) == Some("tool_use") {
                    let id = block["id"].as_str().unwrap_or("").to_string();
                    let name = block["name"].as_str().unwrap_or("").to_string();
                    let input = block["input"].clone();

                    assistant_content.push(ContentBlock::ToolUse {
                        id: id.clone(),
                        name: name.clone(),
                        input: input.clone(),
                    });

                    on_event(AppStreamEvent::ToolUseStart { id: id.clone(), name: name.clone() });
                    tool_uses.push((id, name, input));
                }
            }

            self.messages.push(Message::Assistant {
                content: assistant_content,
            });

            if tool_uses.is_empty() {
                break;
            }

            for (tool_id, tool_name, tool_input) in tool_uses {
                info!("Executing tool: {tool_name}");
                on_event(AppStreamEvent::ToolUseEnd {
                    id: tool_id.clone(),
                    name: tool_name.clone(),
                    input: tool_input.clone(),
                });

                let result = self.execute_tool(&tool_name, tool_input).await;
                let result_msg = Message::tool_result(
                    tool_id,
                    result.content.clone(),
                    result.is_error,
                );

                on_event(AppStreamEvent::TextDelta {
                    delta: format!("\n[Tool result: {}]", if result.is_error { "error" } else { "ok" }),
                });

                self.messages.push(result_msg);
            }
        }

        Ok(())
    }

    fn maybe_compact(&mut self) {
        const MAX_MESSAGES: usize = 20;
        if self.messages.len() > MAX_MESSAGES {
            // Determine how many messages to remove (in multiples of 2 to keep pairs)
            let excess = self.messages.len() - MAX_MESSAGES;
            let remove_count = (excess / 2).saturating_mul(2).max(2); // remove at least 2
            if remove_count > 0 {
                let removed = self.messages.drain(0..remove_count).collect::<Vec<_>>();
                let placeholder = Message::Assistant {
                    content: vec![ContentBlock::Text {
                        text: format!("[Compacted {} earlier messages]", removed.len()),
                    }],
                };
                self.messages.insert(0, placeholder);
            }
        }
    }

    async fn execute_tool(&self, tool_name: &str, input: serde_json::Value) -> ToolResult {
        let ctx = crate::types::ToolUseContext {
            cwd: std::env::current_dir().unwrap_or_default(),
            abort_signal: CancellationToken::new(),
            tools: &self.tool_registry,
            permission_ctx: &crate::types::PermissionContext::empty(),
            messages: &self.messages,
            max_result_size: 10000,
        };

        match self.tool_registry.get(tool_name) {
            Some(tool) => match tool.execute(input, &ctx).await {
                Ok(result) => result,
                Err(e) => ToolResult::error(format!("Tool execution error: {e}")),
            },
            None => ToolResult::error(format!("Unknown tool: {tool_name}")),
        }
    }
}
