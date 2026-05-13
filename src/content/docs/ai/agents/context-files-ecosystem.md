---
title: "Сравнение контекст-файлов для AI-агентов"
description: "AGENTS.md vs CLAUDE.md vs SKILL.md vs .cursorrules vs DESIGN.md — полное сравнение форматов контекст-файлов для AI coding агентов: назначение, инструменты, совместимость, слоистая архитектура"
---

## Экосистема контекст-файлов

В 2025–2026 сформировалась экосистема Markdown-файлов, которые AI-агенты читают для понимания проекта. Каждый формат решает свою задачу, и вместе они образуют слоистую архитектуру контекста.

## Сравнительная таблица

| Аспект | AGENTS.md | CLAUDE.md | SKILL.md | .cursorrules | DESIGN.md |
|--------|-----------|-----------|----------|--------------|-----------|
| **Инструмент** | Кросс-тул стандарт | Claude Code | Claude.ai, Claude Code | Cursor | Stitch, Claude Design |
| **Создатель** | OpenAI + сообщество | Anthropic | Anthropic | Cursor (Anysphere) | Google Labs |
| **Статус** | AAIF/Linux Foundation | Стандарт Claude | Claude-экосистема | Cursor-specific | Alpha spec (open-source) |
| **Формат** | Plain Markdown | Plain Markdown | YAML frontmatter + Markdown | Plain text | YAML frontmatter + Markdown |
| **Загрузка** | Always (root, hierarchical) | Always (session start) | On-demand (по задаче) | Always (project root) | On-demand (для UI) |
| **Фокус** | Build, test, conventions | Универсальные правила | Task skills, scripts | Code style, запреты | Дизайн-системы |
| **Multi-file** | Nested dirs (closest wins) | Parent/child/home dirs | Да (progressive disclosure) | Glob patterns | Один файл |
| **Совместимость** | 30+ инструментов | Часто symlink к AGENTS.md | Ссылается на AGENTS.md | Читает AGENTS.md/CLAUDE.md | Экспорт в Tailwind/W3C |
| **Adoption** | 60K+ GitHub repos | Стандарт для Claude Code | Растёт в Claude | Стандарт для Cursor | Emerging для design-to-code |

## AGENTS.md — универсальный стандарт

- **Вендор-агностик**: работает с Codex, Cursor, Claude Code, Copilot, Aider, Gemini CLI, Zed, Devin, Windsurf — 30+ инструментов
- **Иерархический**: root + nested overrides для монорепозиториев
- **Секции**: commands, testing, структура, code style, git workflow, boundaries
- **Идеальный размер**: <100 строк для корневого файла

## CLAUDE.md — корневые правила для Claude Code

- **Автозагрузка** при старте Claude Code сессии
- **Цепочка**: parent → child → home dir
- Часто делают symlink: `ln -s AGENTS.md CLAUDE.md`
- **Рекомендация**: <100 строк, иначе context dilution
- Поддерживает rich examples и монорепо

## SKILL.md — модульные навыки

- **YAML frontmatter**: name, description, triggers — когда загружать
- **Директория с файлами**: скрипты, references, examples
- **Progressive disclosure**: загружается только когда задача совпадает с описанием
- **Примеры**: form-validation skill, testing skill, deployment skill
- **Платформа**: Claude.ai + Claude Code, 20+ совместимых агентов

## .cursorrules — правила для Cursor

- Plain text, всегда в корне проекта
- Лаконичные, style-focused — минимизация token overhead
- **Cursor-only**, не кросс-платформенный
- Может читать AGENTS.md и CLAUDE.md дополнительно

## DESIGN.md — дизайн-система для AI

- **YAML frontmatter** (токены) + **Markdown** (rationale)
- Colors, typography, spacing, components
- **Экспорт**: Tailwind config, W3C DTCG tokens
- **CLI**: lint, diff, export
- Растущее adoption в Stitch, Claude Design, Cursor

## Слоистая архитектура в реальном проекте

Все форматы работают вместе, не конфликтуя:

```
project/
├── AGENTS.md          ← универсальный контекст (все инструменты)
├── CLAUDE.md → AGENTS.md  ← symlink для Claude Code
├── DESIGN.md          ← дизайн-система (генерация UI)
├── .cursorrules       ← Cursor-specific правила
├── .github/
│   └── agents/        ← специализированные агенты (Copilot)
│       ├── docs-agent.md
│       ├── test-agent.md
│       └── lint-agent.md
├── .claude/
│   └── skills/        ← модульные навыки (Claude Code)
│       ├── testing/SKILL.md
│       └── deployment/SKILL.md
└── src/
    └── ...
```

## Паттерны совместимости

### 1. Symlink
```bash
ln -s AGENTS.md CLAUDE.md
```
Один файл — все инструменты. Самый простой и рекомендуемый подход.

### 2. Reference
CLAUDE.md ссылается на AGENTS.md через `@references` — не дублирует, а дополняет.

### 3. Complementary
AGENTS.md (conventions) + DESIGN.md (visual) + SKILL.md (tasks) — каждый файл про свою область, без пересечений.

## Инструменты, поддерживающие AGENTS.md (30+)

| Категория | Инструменты |
|-----------|-------------|
| AI Coding Agents | OpenAI Codex, Claude Code, Cursor, Aider, Devin, Factory |
| AI IDE Features | GitHub Copilot, Zed, Windsurf, Amp |
| AI CLI | Gemini CLI |
| AI Design | Google Stitch, Claude Design |
| AI Platforms | MindStudio, Replit Agent, Lovable |
| Workflow | OpenClaw (SKILL.md portability) |

## Рекомендации по внедрению

- **Один AGENTS.md в корне** — максимальная кросс-инструментальная совместимость
- **Symlink к CLAUDE.md** — не дублировать контент
- **DESIGN.md отдельно** — если в проекте есть UI
- **SKILL.md для сложных задач** — только если нужны скрипты и references
- **.cursorrules** — минимальный, только Cursor-specific нюансы
- **Не автогенерировать** — human-curated файлы эффективнее

## См. также

- [AGENTS.md — формат инструкций для AI-агентов](./agents-md.md) — детальный разбор AGENTS.md
- [.agents и папка-как-агент: экосистема конфигураций](./dotagents-protocol.md) — как связать AGENTS.md, .agents и .agent-подход
- [Agent Skills для AI](../skills/index.md) — SKILL.md, каталоги и репозитории скиллов
- [SKILL.md — формат и спецификация](../skills/skill-md.md) — детальный разбор SKILL.md
- [AI для кода: Copilot, Cursor, Claude Code](../ai-for-code.md) — обзор инструментов
- [DESIGN.md — формат дизайн-систем для AI](../design/design-md.md) — детальный разбор DESIGN.md
- [AI-агенты и автоматизация](../ai-agents.md) — платформы и фреймворки

## Материалы и источники

- [agents.md — официальный сайт](https://agents.md)
- [OpenAI Codex: AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md)
- [Augment Code: How to Build AGENTS.md](https://www.augmentcode.com/guides/how-to-build-agents-md)
- [Agensi: SKILL.md vs CLAUDE.md vs .cursorrules](https://www.agensi.io/learn/skill-md-vs-claude-md-vs-cursorrules)
- [Claude Platform Docs: Agent Skills](https://platform.claude.com/docs/en/agents-and-tools/agent-skills/overview)
