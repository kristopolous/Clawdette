use crate::types::{Message, StreamEvent, Usage};
use crossterm::event::{self, Event as CrosstermEvent, KeyCode, KeyEvent, KeyModifiers};
use ratatui::{
    layout::{Constraint, Direction, Layout},
    style::{Color, Modifier, Style},
    text::{Line, Span},
    widgets::{Block, Borders, List, ListItem, Paragraph, Wrap},
    Frame,
};
use std::sync::Arc;
use tokio::sync::Mutex;

pub struct App {
    pub messages: Vec<String>,
    pub input_buffer: String,
    pub cursor_position: usize,
    pub is_loading: bool,
    pub usage: Usage,
    pub current_response: String,
    pub scroll_offset: usize,
    pub should_quit: bool,
}

impl App {
    pub fn new() -> Self {
        Self {
            messages: Vec::new(),
            input_buffer: String::new(),
            cursor_position: 0,
            is_loading: false,
            usage: Usage::default(),
            current_response: String::new(),
            scroll_offset: 0,
            should_quit: false,
        }
    }

    pub fn handle_key(&mut self, key: &KeyEvent) {
        match key.code {
            KeyCode::Char(c) => {
                if key.modifiers.contains(KeyModifiers::CONTROL) && c == 'c' {
                    self.should_quit = true;
                    return;
                }
                self.input_buffer.push(c);
                self.cursor_position = self.input_buffer.len();
            }
            KeyCode::Backspace => {
                if !self.input_buffer.is_empty() {
                    self.input_buffer.pop();
                    self.cursor_position = self.input_buffer.len();
                }
            }
            KeyCode::Delete => {}
            KeyCode::Left => {}
            KeyCode::Right => {}
            KeyCode::Home => {}
            KeyCode::End => {}
            KeyCode::Enter => {
                // Submit handled by caller
            }
            KeyCode::Up => {
                if self.scroll_offset > 0 {
                    self.scroll_offset -= 1;
                }
            }
            KeyCode::Down => {
                self.scroll_offset += 1;
            }
            KeyCode::Esc => {
                self.should_quit = true;
            }
            _ => {}
        }
    }

    pub fn submit_input(&mut self) -> Option<String> {
        let input = self.input_buffer.trim().to_string();
        if input.is_empty() {
            return None;
        }
        self.input_buffer.clear();
        self.cursor_position = 0;
        Some(input)
    }

    pub fn handle_stream_event(&mut self, event: &StreamEvent) {
        match event {
            StreamEvent::TextDelta { delta } => {
                self.current_response.push_str(delta);
            }
            StreamEvent::ToolUseStart { name, .. } => {
                self.current_response
                    .push_str(&format!("\n🔧 Using tool: {name}...\n"));
            }
            StreamEvent::ToolUseEnd { name, .. } => {
                self.current_response
                    .push_str(&format!("\n✅ Tool '{name}' completed\n"));
            }
            StreamEvent::MessageEnd { message } => {
                self.messages.push(self.current_response.clone());
                self.current_response.clear();
                self.is_loading = false;
                self.usage.accumulate(&message.usage);
            }
            StreamEvent::Error { message, .. } => {
                self.current_response
                    .push_str(&format!("\n❌ Error: {message}"));
                self.is_loading = false;
            }
            _ => {}
        }
    }
}

impl Default for App {
    fn default() -> Self {
        Self::new()
    }
}

pub fn ui(frame: &mut Frame, app: &App) {
    let chunks = Layout::default()
        .direction(Direction::Vertical)
        .margin(1)
        .constraints([
            Constraint::Min(1),
            Constraint::Length(3),
            Constraint::Length(1),
        ])
        .split(frame.area());

    // Messages area
    let mut items: Vec<ListItem> = Vec::new();

    for (i, msg) in app.messages.iter().enumerate().skip(app.scroll_offset) {
        let lines: Vec<Line> = msg
            .lines()
            .map(|line| {
                let style = if line.starts_with("🔧") {
                    Style::default().fg(Color::Yellow)
                } else if line.starts_with("✅") {
                    Style::default().fg(Color::Green)
                } else if line.starts_with("❌") {
                    Style::default().fg(Color::Red)
                } else {
                    Style::default()
                };
                Line::from(Span::styled(line.to_string(), style))
            })
            .collect();

        for line in lines {
            items.push(ListItem::new(line));
        }

        if i < app.messages.len() - 1 {
            items.push(ListItem::new(Line::from("")));
        }
    }

    // Add current response being streamed
    if !app.current_response.is_empty() {
        if !items.is_empty() {
            items.push(ListItem::new(Line::from("")));
        }
        let lines: Vec<Line> = app
            .current_response
            .lines()
            .map(|line| {
                let style = if line.starts_with("🔧") {
                    Style::default().fg(Color::Yellow)
                } else if line.starts_with("✅") {
                    Style::default().fg(Color::Green)
                } else if line.starts_with("❌") {
                    Style::default().fg(Color::Red)
                } else {
                    Style::default()
                };
                Line::from(Span::styled(line.to_string(), style))
            })
            .collect();

        for line in lines {
            items.push(ListItem::new(line));
        }
    }

    let loading_indicator = if app.is_loading { " [thinking...]" } else { "" };
    let message_block = Block::default()
        .title(format!("Messages{loading_indicator}"))
        .borders(Borders::ALL)
        .style(Style::default());

    let list = List::new(items).block(message_block);
    frame.render_widget(list, chunks[0]);

    // Input area
    let input_block = Block::default()
        .title("Input (Ctrl+C to quit)")
        .borders(Borders::ALL)
        .style(Style::default());

    let input_widget = Paragraph::new(app.input_buffer.as_str())
        .block(input_block)
        .wrap(Wrap { trim: false });
    frame.render_widget(input_widget, chunks[1]);

    // Set cursor position
    let input_x = 1 + app.cursor_position as u16;
    let input_y = chunks[1].y + 1;
    frame.set_cursor(input_x.min(chunks[1].width - 2 + chunks[1].x), input_y);

    // Status bar
    let status = format!(
        "Tokens: {} in / {} out | Cost: ${:.4}",
        app.usage.input_tokens,
        app.usage.output_tokens,
        0.0 // Would calculate from model pricing
    );
    let status_bar = Paragraph::new(status).style(
        Style::default()
            .fg(Color::Cyan)
            .add_modifier(Modifier::BOLD),
    );
    frame.render_widget(status_bar, chunks[2]);
}
