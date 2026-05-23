# Warp Terminal Setup

## Purpose

This document captures the initial setup and operational lessons learned while configuring Warp as the terminal layer for the Personal AI Dev System.

The goal was not just terminal setup.

The goal was building a stable AI-native operational environment.

---

# Core Stack

| Layer | Tool |
|---|---|
| Terminal | Warp |
| Terminal AI | Claude Code |
| Runtime | Node.js |
| Package Manager | Homebrew + npm |
| Code Editor | Cursor |
| Version Control | Git + GitHub |

---

# Installed Components

## Homebrew

Installed as the foundational macOS package manager.

Purpose:
- install developer tooling
- manage CLI packages
- support Node and future tooling

### Verify

```bash
brew --version
```

---

## Node.js + npm

Installed using Homebrew.

Purpose:
- support AI tooling
- support CLI tools
- enable package installs

### Install

```bash
brew install node
```

### Verify

```bash
node -v
npm -v
```

---

## Claude Code

Installed globally using npm.

Purpose:
- terminal-native AI coding assistant
- repo-aware AI workflows
- operational AI execution

### Install

```bash
npm install -g @anthropic-ai/claude-code
```

### Verify

```bash
claude --version
```

### Launch

```bash
claude
```

---

## Cursor CLI

Enabled globally from Warp.

Purpose:
- open repos/workspaces directly from terminal
- connect terminal and editor workflows

### Example

```bash
cursor .
```

---

# Warp Theme Setup

Chosen theme:
- Coolnight

Key observations:
- improved readability
- calmer cognitive experience
- stronger terminal clarity
- reduced visual friction

Theme files were added to:

```text
~/.warp/themes/
```

Custom theme configuration lives inside:

```text
settings.toml
```

---

# Important Operational Lessons

## Hidden macOS folders

Folders beginning with:

```text
.
```

are hidden by default.

Examples:

```text
.warp
.vscode
.git
.zprofile
```

Useful Finder shortcut:

```text
CMD + SHIFT + .
```

Toggle hidden files visibility.

---

## Git tracks files, not folders

Empty folders do not appear in GitHub.

Solution:
add placeholder files such as:

```text
README.md
```

---

## `.vscode` should stay local

Editor-specific settings should not be committed to reusable system repos.

Use:

```text
.gitignore
```

to exclude:

```text
.vscode/
```

---

# Architectural Realisation

A major breakthrough during setup:

The system is not:
- random AI tools
- disconnected chats
- isolated apps

The system is:
- operational workflows
- reusable intelligence
- coordinated environments
- markdown-first memory
- structured AI-native development

---

# Workflow Realisation

The stack now operates as:

```text
ChatGPT
→ coordination + strategy

Claude
→ deep reasoning

Warp + Claude Code
→ terminal operations

Cursor
→ execution + editing

GitHub + Markdown
→ reusable memory
```

---

# Important Principle

The goal is not endless tool exploration.

The goal is:
- operational clarity
- reusable leverage
- reduced fragmentation
- scalable AI-assisted workflows

---

# Current Outcome

The Personal AI Dev System now has:

- a stable local environment
- reusable GitHub-backed memory
- AI operational workflows
- terminal confidence
- repo structure clarity
- markdown-first architecture
- reduced cognitive fragmentation