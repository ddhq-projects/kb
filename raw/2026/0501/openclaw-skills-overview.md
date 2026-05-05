# OpenClaw Skills — Полный обзор

> Источник: https://docs.openclaw.ai/tools/skills, ClawHub, community

## Что это

OpenClaw использует **AgentSkills-compatible** skill-папки для обучения агентов повторяемым workflow-ам с инструментами. Каждый skill — директория с `SKILL.md` (YAML frontmatter + Markdown instructions).

OpenClaw — совместим со спецификацией [agentskills.io](https://agentskills.io), что обеспечивает портативность скиллов между Claude Code, Cursor, Codex и другими агентами.

## Местоположение и приоритет (highest → lowest)

| # | Source | Path | Visible to |
|---|--------|------|-----------|
| 1 | Workspace skills | `<workspace>/skills` | Only that agent |
| 2 | Project agent skills | `<workspace>/.agents/skills` | Only that workspace's agent |
| 3 | Personal agent skills | `~/.agents/skills` | All agents on machine |
| 4 | Managed/local skills | `~/.openclaw/skills` | All agents on machine |
| 5 | Bundled skills | shipped with install | All agents |
| 6 | Extra skill folders | `skills.load.extraDirs` (config) | All agents |

Конфликт имени → высший источник побеждает.

Поддерживает одну группировку: `skills/<group>/<skill>/SKILL.md`.

## SKILL.md Format

### Обязательные поля

```yaml
---
name: image-lab
description: Generate or edit images via a provider-backed image workflow
---
```

- `name`: 1-64 chars, lowercase alphanum + hyphens
- `description`: 1-1024 chars, включает triggers

### Опциональные поля

```yaml
---
name: gemini
description: Use Gemini CLI for coding assistance
user-invocable: true              # expose as slash command (default: true)
disable-model-invocation: false    # keep out of normal prompt (default: false)
command-dispatch: tool             # bypass model, dispatch directly to tool
command-tool: gemini-cli           # tool name for dispatch
homepage: https://example.com      # URL for macOS Skills UI
metadata: {"openclaw":{"emoji":"♊️","requires":{"bins":["gemini"],"env":["GEMINI_API_KEY"]}}}
---
```

### Gating (load-time filters)

Skills фильтруются при загрузке через `metadata.openclaw`:

```yaml
metadata:
  {
    "openclaw": {
      "requires": {
        "bins": ["uv"],                    # must exist on PATH
        "anyBins": ["ffmpeg", "avconv"],   # at least one
        "env": ["GEMINI_API_KEY"],         # env var must exist
        "config": ["browser.enabled"]       # openclaw.json path must be truthy
      },
      "os": ["darwin", "linux"],           # platform filter
      "primaryEnv": "GEMINI_API_KEY",      # for apiKey injection
      "always": false                       # skip other gates
    }
  }
```

### Installer specs

```yaml
metadata:
  {
    "openclaw": {
      "install": [
        {
          "id": "brew",
          "kind": "brew",
          "formula": "gemini-cli",
          "bins": ["gemini"],
          "label": "Install Gemini CLI (brew)"
        }
      ]
    }
  }
```

Поддерживаемые kind: brew, node, go, uv, download. Порядок: brew > uv > node manager > go > download.

## Per-Agent Allowlists

```json5
{
  "agents": {
    "defaults": {
      "skills": ["github", "weather"]
    },
    "list": [
      { "id": "writer" },                        // inherits defaults
      { "id": "docs", "skills": ["docs-search"] }, // replaces defaults
      { "id": "locked-down", "skills": [] }         // no skills
    ]
  }
}
```

- Не указан `skills` → наследует defaults
- `skills: []` → нет скиллов
- Непустой список → финальный набор (не мержится)

## Config Overrides

```json5
{
  "skills": {
    "entries": {
      "image-lab": {
        "enabled": true,
        "apiKey": { "source": "env", "provider": "default", "id": "GEMINI_API_KEY" },
        "env": { "GEMINI_API_KEY": "GEMINI_KEY_HERE" },
        "config": { "endpoint": "https://...", "model": "nano-pro" }
      },
      "peekaboo": { "enabled": true },
      "sag": { "enabled": false }
    }
  }
}
```

## ClawHub — Public Skills Registry

**URL:** https://clawhub.ai
**Install:** `openclaw skills install <skill-slug>`
**Update:** `openclaw skills update --all`
**Publish:** `clawhub sync --all`

### Статистика (май 2026)
- **52,000+ tools/skills**
- **12 million downloads**
- **180,000 users**

### Топ Skills

| Skill | Installs | Назначение |
|-------|----------|-----------|
| Web Browsing | 180K+ | Research, fact-checking |
| Capability Evolver | 35K+ | Agent self-optimization |
| GitHub | 10K+ | Code review, PRs |
| Self-Improving Agent | Highest rated | Memory, learning |
| GOG (Google Workspace) | Top productivity | Google Workspace integration |

### Security: ClawHavoc incident

Начало 2026: «ClawHavoc» malware в 1,000+ malicious skills → кража credentials.
- Prompt response: VirusTotal scans, CVE (CVE-2026-26322), purges
- ClawHub теперь показывает security scan state перед установкой
- Recommendation: использовать версии 2026.3.28+, только high-rated skills

## Skill Workshop (экспериментальный)

Плагин для автоматического создания/обновления workspace skills из наблюдаемой работы агента.

- Пишет только в `<workspace>/skills`
- Supports pending approval или automatic safe writes
- Quarantine для unsafe proposals
- Автоматический refresh skill snapshot

## Snapshots & Hot Reload

- Skills snapshot создаётся при старте сессии
- Mid-session refresh при: skills watcher enabled / новый remote node
- Watcher config: `skills.load.watch: true` (default)
- Config changes → next session

## Environment Injection

Scoped to agent run (не глобальный shell):
1. Read skill metadata
2. Apply `skills.entries.<key>.env` + `apiKey` to `process.env`
3. Build system prompt with eligible skills
4. Restore original env after run ends

## Token Impact

Skills inject compact XML list of eligible skill names + descriptions (~100 tokens each). Body загружается только при trigger. Группировка `skills/<group>/<skill>/` поддерживается.

## Plugins & Skills

Плагины могут поставлять свои skills через `openclaw.plugin.json`. Plugin skills загружаются при enabled plugin, с низким приоритетом (как extra dirs). Browser plugin, например, поставляет `browser-automation` skill.

## Migration from Codex CLI

```bash
openclaw migrate codex --dry-run  # inventory
openclaw migrate codex             # interactive copy
openclaw migrate codex --skill <name>  # non-interactive
```
