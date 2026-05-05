# AGENTS.md vs CLAUDE.md vs SKILL.md vs .cursorrules vs DESIGN.md

> Сравнение контекст-файлов для AI coding агентов (2026)

## Экосистема контекст-файлов

В 2025-2026 сформировалась экосистема Markdown-файлов, которые AI-агенты читают для понимания проекта. Каждый файл решает свою задачу.

## Сравнительная таблица

| Аспект | AGENTS.md | CLAUDE.md | SKILL.md | .cursorrules | DESIGN.md |
|--------|-----------|-----------|----------|--------------|-----------|
| **Primary Tool** | Cross-tool standard | Claude Code | Claude.ai, Claude Code | Cursor only | Google Stitch, Claude Design |
| **Создатель** | OpenAI + сообщество | Anthropic | Anthropic | Cursor (Anysphere) | Google Labs |
| **Статус** | AAIF/Linux Foundation стандарт | Стандарт для Claude | Claude-экосистема | Cursor-специфичный | Alpha spec (open-source) |
| **Формат** | Plain Markdown | Plain Markdown | YAML frontmatter + Markdown + файлы | Plain text | YAML frontmatter + Markdown |
| **Загрузка** | Always (root, hierarchical) | Always (session start) | On-demand (по описанию задачи) | Always (project root) | On-demand (для UI задач) |
| **Фокус** | Build, test, conventions, boundaries | Universal rules, commands, overrides | Task skills, scripts, references | Code style, forbidden patterns | Design systems, visuals |
| **Multi-file** | Nested dirs (closest wins) | Parent/child/home dirs | Да (progressive disclosure) | Glob patterns | Single file (assets optional) |
| **Интероперабельность** | ✅ 30+ tools | Часто symlinked к AGENTS.md | Ссылается на AGENTS.md | Может читать AGENTS.md/CLAUDE.md | Экспорт в Tailwind/W3C |
| **Adoption** | 60k+ GitHub repos | Standard для Claude Code | Growing в Claude workflows | Standard для Cursor | Emerging для design-to-code |

## Детальное сравнение

### AGENTS.md — «README для агентов»
- Вендор-агностик: работает с Codex, Cursor, Claude Code, Copilot, Aider, Gemini CLI, Zed, Devin
- Hierarchical: root + nested overrides для монорепо
- Секции: commands, testing, structure, style, git workflow, boundaries
- OpenAI repo: 88 AGENTS.md файлов

### CLAUDE.md — «Root rules для Claude»
- Auto-loaded при старте Claude Code сессии
- <100 строк ideal (context dilution при большем размере)
- Parent → child → home dir chain
- Часто symlinked: `ln -s AGENTS.md CLAUDE.md`
- Rich examples, monorepo support

### SKILL.md — «Модульные навыки для Claude»
- YAML frontmatter: name, description, triggers
- Директория с файлами (скрипты, references, examples)
- Progressive disclosure: загружается только при совпадении задачи
- Примеры: form-validation skill, testing skill, deployment skill
- Платформа: Claude.ai + Claude Code
- 20+ agents совместимы

### .cursorrules — «Cursor-specific rules»
- Plain text, project root
- Concise, style-focused (минимизировать token overhead)
- Cursor-only, не кросс-платформенный
- Но может читать AGENTS.md и CLAUDE.md

### DESIGN.md — «Design system для AI»
- YAML frontmatter (tokens) + Markdown (rationale)
- Colors, typography, spacing, components
- Export: Tailwind config, W3C DTCG tokens
- CLI: lint, diff, export
- Growing adoption в Stitch, Claude Design, Cursor

## Слоистая архитектура

В реальном проекте все файлы работают вместе:

```
project/
├── AGENTS.md          ← universal agent context (all tools)
├── CLAUDE.md → AGENTS.md  ← symlink для Claude Code
├── DESIGN.md          ← design system (UI generation)
├── .cursorrules       ← Cursor-specific tweaks
├── .github/
│   └── agents/        ← specialized agents (Copilot)
│       ├── docs-agent.md
│       ├── test-agent.md
│       └── lint-agent.md
├── .claude/
│   └── skills/        ← modular skills (Claude Code)
│       ├── testing/SKILL.md
│       └── deployment/SKILL.md
└── src/
    └── ...
```

## Кросс-инструментальная совместимость

### Паттерны совместимости

1. **Symlink**: `ln -s AGENTS.md CLAUDE.md` — один файл для всех
2. **Reference**: CLAUDE.md ссылается на AGENTS.md через `@references`
3. **Complementary**: AGENTS.md (conventions) + DESIGN.md (visual) + SKILL.md (tasks)

### Поддерживающие инструменты (30+)

| Категория | Инструменты |
|-----------|------------|
| AI Coding Agents | OpenAI Codex, Claude Code, Cursor, Aider, Devin, Factory |
| AI IDE Features | GitHub Copilot, Zed, Windsurf, Amp |
| AI CLI | Gemini CLI |
| AI Design | Google Stitch, Claude Design |
| AI Platforms | MindStudio, Replit Agent, Lovable |
| Workflow | OpenClaw (SKILL.md portability) |

## Рекомендации

- **Один AGENTS.md в корне** — максимальная совместимость
- **Symlink к CLAUDE.md** — не дублировать
- **DESIGN.md отдельно** — если есть UI
- **SKILL.md для сложных задач** — только если нужны скрипты и references
- **.cursorrules** — минимальный, только Cursor-specific tweaks
- **Не автогенерировать** — human-curated файлы эффективнее

## Источники

- https://agents.md
- https://developers.openai.com/codex/guides/agents-md
- https://www.augmentcode.com/guides/how-to-build-agents-md
- https://www.agensi.io/learn/skill-md-vs-claude-md-vs-cursorrules
- https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview
