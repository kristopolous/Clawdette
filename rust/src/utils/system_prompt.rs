use crate::context::{format_claude_md_context, format_git_context, get_git_status};
use chrono::Local;
use std::path::Path;

pub async fn build_system_prompt(cwd: &Path) -> String {
    let mut prompt = String::from(
        "You are Claudette, an expert programming assistant running in a terminal.\n\
        You help users with software engineering tasks including:\n\
        - Writing, reading, and editing code\n\
        - Running shell commands and debugging\n\
        - Searching files and code\n\
        - Understanding project structure\n\n\
        You have access to tools that let you execute shell commands, read/write/edit files,\n\
        search with glob patterns and regex, fetch web content, and manage todos.\n\n\
        Guidelines:\n\
        - Be concise and direct in your responses\n\
        - Use tools to gather information before answering\n\
        - Show diffs when editing files\n\
        - Explain your reasoning for non-obvious changes\n\
        - Prefer reading files before editing them\n\
        - Use TodoWrite to track multi-step tasks\n",
    );

    // Add git context
    if let Ok(Some(git_status)) = get_git_status(cwd) {
        let git_ctx = format_git_context(&git_status);
        prompt.push_str("\n\n# Git Status\n");
        prompt.push_str(&git_ctx);
    }

    // Add CLAUDE.md context
    if let Ok(claude_md) = format_claude_md_context(cwd).await {
        if !claude_md.is_empty() {
            prompt.push_str(&claude_md);
        }
    }

    // Add current date/time
    let now = Local::now();
    prompt.push_str(&format!("\n\nCurrent date/time: {}", now.format("%Y-%m-%d %H:%M:%S %Z")));

    prompt
}
