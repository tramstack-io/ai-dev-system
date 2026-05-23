# Git + GitHub Basics

Quick operational reference for daily Git workflows.

---

# Core Workflow

## 1. Check Current State

```bash
git status
```

Shows:
- changed files
- deleted files
- untracked files
- staged files

Use this constantly.

Think of it as:
→ “What changed?”

---

## 2. Stage Changes

```bash
git add -A
```

Stages:
- new files
- modified files
- deleted files

This prepares everything for commit.

Think of it as:
→ “Prepare snapshot.”

---

## 3. Commit Changes

```bash
git commit -m "Describe the change"
```

Creates a saved checkpoint in Git history.

Example:

```bash
git commit -m "Add Git workflow cheatsheet"
```

Think of it as:
→ “Save progress with explanation.”

---

## 4. Push to GitHub

```bash
git push origin main
```

Uploads commits to GitHub.

Think of it as:
→ “Sync local repo to cloud.”

---

# Safe Daily Workflow

```bash
git status
git add -A
git commit -m "Clear commit message"
git push origin main
```

This is the standard operational cycle.

---

# Restore Local Changes

```bash
git restore file-name.md
```

Undo local changes to a file.

Useful when:
- experiments go wrong
- accidental edits happen
- you want to revert before commit

---

# Stop Tracking Local-Only Files

```bash
git rm -r --cached .vscode
```

Removes a folder from Git tracking WITHOUT deleting it locally.

Useful for:
- editor settings
- machine-specific configs
- local-only files

---

# Ignore Local Files

Inside `.gitignore`

```text
.vscode/
.DS_Store
```

Prevents Git from tracking those files again.

---

# Helpful Mental Models

| Command | Meaning |
|---|---|
| git status | What changed? |
| git add | Prepare snapshot |
| git commit | Save checkpoint |
| git push | Sync to GitHub |
| git restore | Undo local changes |

---

# Philosophy

Git is not just backup.

Git is:
- operational memory
- safe experimentation
- version history
- structured progress