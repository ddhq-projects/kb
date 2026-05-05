# AI Coding Agent Context Files — Ecosystem Overview

> Обзор всей экосистемы контекст-файлов и инструментов (2026)

## Что это

Контекст-файлы (context files) — Markdown или plain-text файлы в репозитории, которые AI coding agents читают перед началом работы. Они предоставляют project-specific инструкции: build commands, coding conventions, testing rules, design systems.

## Зачем нужны

AI agents не знают вашего проекта. Без контекста:
- Используют дефолтные стили → «generic sloppy code»
- Не знают как собирать/тестировать
- Могут удалить важные файлы
- Генерируют не-consistent UI

С контекстом:
- Снижение багов: 35-55% (бенчмарки)
- Улучшение качества: ~4% (human-curated)
- Consistent output по всем задачам

## Полная экосистема файлов

### Core Files (4 основных)

| Файл | Назначение | Кто читает |
|------|-----------|-----------|
| `AGENTS.md` | Universal agent instructions | 30+ tools |
| `CLAUDE.md` | Claude-specific rules | Claude Code |
| `SKILL.md` | Modular task skills | Claude.ai, Claude Code |
| `DESIGN.md` | Visual design system | Stitch, Claude Design, Cursor |

### Additional Files

| Файл | Назначение | Кто читает |
|------|-----------|-----------|
| `.cursorrules` | Cursor-specific style rules | Cursor |
| `CLAUDE.local.md` | Local/personal overrides (gitignored) | Claude Code |
| `AGENTS.override.md` | Temporary overrides | Codex |
| `.github/agents/*.md` | Specialized agent personas | GitHub Copilot |
| `.aider.conf.yml` | Aider configuration | Aider |

## Agentic AI Foundation (AAIF)

- **Когда**: Декабрь 2025
- **Под эгидой**: Linux Foundation
- **Проекты**: AGENTS.md, MCP (Anthropic), goose (Block)
- **Основатели**: OpenAI, Anthropic, Block
- **Члены**: 97+ организаций (AWS, Google, Microsoft — platinum)
- **Chair**: David Nalley
- **Цель**: Neutral stewardship, open governance, interoperability

## Топ инструменты и их файлы

### 1. OpenAI Codex
- **Файл**: AGENTS.md (hierarchical discovery)
- **Override**: AGENTS.override.md
- **Global**: ~/.codex/AGENTS.md
- **Config**: ~/.codex/config.toml
- **Лимит**: 32 KiB (настраиваемый)
- **Fallback**: project_doc_fallback_filenames

### 2. Claude Code (Anthropic)
- **Файл**: CLAUDE.md (auto-loaded)
- **Nested**: parent → child → home dir chain
- **Local**: CLAUDE.local.md (gitignored)
- **Skills**: .claude/skills/*/SKILL.md
- **Совместимость**: часто symlink к AGENTS.md

### 3. Cursor
- **Файл**: .cursorrules (always loaded)
- **Дополнительно**: читает AGENTS.md, CLAUDE.md
- **Patterns**: glob patterns для scope
- **Community**: скрипты миграции от других форматов

### 4. GitHub Copilot
- **Файл**: .github/agents/*.md (multi-agent personas)
- **Frontmatter**: YAML (name, description)
- **Вызов**: @agent-name в чате
- **Примеры**: @docs-agent, @test-agent, @lint-agent

### 5. Google Stitch
- **Файл**: DESIGN.md (design system)
- **Нативная поддержка**: генерация + редактирование
- **Экспорт**: Figma, HTML/CSS, AI Studio

### 6. Claude Design (Anthropic Labs)
- **Файл**: DESIGN.md + CLAUDE.md
- **Onboarding**: auto-extract design system из repo
- **Skills**: Claude skill files

### 7. Aider
- **Файл**: AGENTS.md (через конфиг)
- **Config**: .aider.conf.yml → `read: AGENTS.md`
- **Поддержка**: любая конфигурация через read

### 8. Gemini CLI
- **Файл**: AGENTS.md
- **Config**: .gemini/settings.json → `context.fileName`

### 9. Devin (Cognition)
- **Файл**: AGENTS.md

### 10. Zed
- **Файл**: AGENTS.md

### 11. Windsurf (Codeium)
- **Файл**: .windsurfrules + AGENTS.md

### 12. Amp
- **Файл**: AGENTS.md (один из основателей формата)

### 13. Factory
- **Файл**: AGENTS.md (один из основателей формата)

### 14. OpenClaw
- **Файл**: SKILL.md (portable skill format)
- **Workspace**: AGENTS.md + SOUL.md + USER.md
- **Совместимость**: SKILL.md portability с 20+ agents

### 15. Replit Agent
- **Файл**: AGENTS.md

### 16. Lovable
- **Файл**: DESIGN.md (для UI consistency)

### 17. v0.dev (Vercel)
- **Файл**: не использует напрямую, но генерирует по описанию

### 18. Banani AI
- **Файл**: DESIGN.md (автогенерация + MCP server)

## Best Practices

### Universal
1. Один AGENTS.md в корне — максимальная совместимость
2. Human-curated > auto-generated
3. Конкретные команды с флагами
4. Code examples > описания
5. Three-tier boundaries (Always/Ask/Never)
6. <100 строк для root-level файлов
7. Версионировать в git
8. Symlink для кросс-тул совместимости

### Для монорепо
1. Root AGENTS.md — общие конвенции
2. Nested AGENTS.md для каждого package
3. AGENTS.override.md для временных переопределений

### Для design-to-code
1. DESIGN.md в корне — визуальные правила
2. AGENTS.md — dev conventions
3. CLAUDE.md → symlink к AGENTS.md
4. Экспорт tokens в Tailwind/config

### Для multi-agent (Copilot)
1. .github/agents/ для специализированных агентов
2. YAML frontmatter (name, description)
3. Чёткая persona + boundaries
4. По одному агенту на задачу

## Metrics

| Метрика | Значение |
|---------|----------|
| Adopted repos (AGENTS.md) | 60,000+ |
| Bug reduction | 35-55% |
| Quality improvement | ~4% |
| Inference cost increase | ~20% |
| Auto-gen effectiveness | Без выигрыша |
| Supported tools | 30+ |
| AAIF members | 97+ |
