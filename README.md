# Claude Code in CI — Reference Implementation

A minimal, working example of integrating [Claude Code](https://github.com/anthropics/claude-code) into a GitHub Actions pipeline.

Three workflows, each one giving Claude a bit more autonomy:

| Workflow | Trigger | What Claude does | Autonomy |
|----------|---------|------------------|----------|
| [`claude-review.yml`](.github/workflows/claude-review.yml) | Every PR | Posts review comments | Read-only |
| [`claude.yml`](.github/workflows/claude.yml) | `@claude` mention | Answers questions, implements changes | Human-initiated |
| [`claude-fix.yml`](.github/workflows/claude-fix.yml) | `/claude-fix` comment | Fixes the issue, commits, pushes | Supervised write |

## Setup

1. Install the Claude GitHub App: https://github.com/apps/claude
2. Add `ANTHROPIC_API_KEY` to your repo secrets
3. Copy the workflows from `.github/workflows/`

Or run `/install-github-app` from Claude Code in your terminal.

## Try it

Open a PR against this repo and watch the review appear. Then try:

```
@claude why is the average function returning NaN?
```

Or leave a review comment with `/claude-fix` and watch it patch + push.

## Guardrails worth copying

- **Scoped tools** — `claude-fix.yml` uses `--allowedTools` so Claude can `git commit` but not `rm -rf`
- **Member gating** — `/claude-fix` only runs for OWNER/MEMBER/COLLABORATOR
- **Turn limits** — `--max-turns` caps cost per run
- **Emoji feedback** — 👀 on start, 🚀 on success

## Docs

- [Claude Code GitHub Actions](https://code.claude.com/docs/en/github-actions)
- [claude-code-action repo](https://github.com/anthropics/claude-code-action)
- [Code Review plugin](https://claude.com/plugins/code-review)
