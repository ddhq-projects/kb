---
title: "AGENTS.md — формат инструкций для AI-агентов"
description: "AGENTS.md — открытый Markdown-формат инструкций для AI coding агентов: что это, как работает автодисковери, иерархия в монорепозиториях, эффективные секции, best practices и влияние на качество кода"
---

## Что такое AGENTS.md

**AGENTS.md — открытый Markdown-формат для инструкций AI coding агентам.** Это «README для агентов»: выделенное, предсказуемое место, где AI находит контекст и правила работы с проектом.

- Используется в **60 000+** open-source проектов на GitHub
- Без обязательной схемы, YAML или спецсинтаксиса — обычный Markdown
- Под управлением **Agentic AI Foundation (AAIF)** при Linux Foundation (декабрь 2025)
- Основатели формата: OpenAI Codex, Amp, Google Jules, Cursor, Factory

## Зачем нужен отдельный файл

README.md — для людей: quick start, описание проекта, contribution guidelines.

AGENTS.md — для AI: build steps, tests, conventions. То, что может быть слишком детальным для README или нерелевантным для контрибьюторов-людей.

Разделение решает три задачи:
- Дать агентам чёткое, предсказуемое место для инструкций
- Сохранить README лаконичным и человеко-ориентированным
- Обеспечить точный, agent-focused guidance без лишнего шума

## Как работает автодисковери

AI-агенты автоматически читают ближайший AGENTS.md перед выполнением задачи. Приоритет источников инструкций:

1. Системный промпт агента
2. AGENTS.md (ближайший в директории)
3. Промпт пользователя

### Иерархия в монорепозиториях

```
project/
├── AGENTS.md              ← root (глобальные правила)
├── services/
│   ├── payments/
│   │   ├── AGENTS.md      ← payments-specific (перезаписывает root)
│   │   └── AGENTS.override.md  ← временный override
│   └── search/
│       └── AGENTS.md      ← search-specific
```

**Правило:** ближайший к рабочей директории файл побеждает. Explicit chat prompts переопределяют всё.

### В OpenAI Codex

Порядок чтения:
1. **Global**: `~/.codex/AGENTS.override.md` или `~/.codex/AGENTS.md`
2. **Project**: от git root вниз до cwd — в каждой директории проверяется AGENTS.override.md → AGENTS.md → fallback filenames
3. **Merge**: конкатенация от root к cwd (ближайшие позже → побеждают)
4. **Лимит**: 32 KiB по умолчанию (настраивается через `project_doc_max_bytes`)

## Рекомендуемая структура

По анализу 2500+ репозиториев выделены 6 ключевых областей:

### 1. Commands — исполняемые команды
Конкретные команды с флагами и опциями, которые агент должен запускать:
```markdown
## Commands
- Install deps: `pnpm install`
- Start dev: `pnpm dev`
- Run tests: `pnpm test -- --coverage`
- Lint: `pnpm lint --fix`
```

### 2. Testing — как запускать и что проверять
```markdown
## Testing
- Unit tests: `pnpm test`
- E2E tests: `pnpm test:e2e`
- CI plan: `.github/workflows/ci.yml`
```

### 3. Project Structure — файловая структура
Ключевые директории и их назначение, чтобы агент не клал файлы в неожиданные места.

### 4. Code Style — примеры и конвенции
Один реальный пример кода > три параграфа описания:
```markdown
## Code style
- TypeScript strict mode
- Single quotes, no semicolons
- Functional patterns where possible
```

### 5. Git Workflow — формат коммитов и PR
```markdown
## PR instructions
- Title format: [<project_name>] <Title>
- Always run `pnpm lint` and `pnpm test` before committing
```

### 6. Boundaries — что можно и нельзя трогать
Трёхуровневая система границ:
```markdown
## Boundaries
- ✅ Always: Write to src/ and tests/, run tests before commits
- ⚠️ Ask first: Database schema changes, adding dependencies
- 🚫 Never: Commit secrets, edit node_modules/ or vendor/
```

## Пример полноценного AGENTS.md

```markdown
# AGENTS.md

## Setup commands
- Install deps: `pnpm install`
- Start dev server: `pnpm dev`
- Run tests: `pnpm test`

## Code style
- TypeScript strict mode
- Single quotes, no semicolons
- Use functional patterns where possible

## Dev environment tips
- Use `pnpm dlx turbo run where <project_name>` to jump to a package
- Run `pnpm install --filter <project_name>` to add to workspace

## Testing instructions
- Find the CI plan in .github/workflows/
- Run `pnpm turbo run test --filter <project_name>`
- After moving files, run `pnpm lint --filter <project_name>`

## PR instructions
- Title format: [<project_name>] <Title>
- Always run `pnpm lint` and `pnpm test` before committing

## Boundaries
- ✅ Always: Write to src/ and tests/, run tests before commits
- ⚠️ Ask first: Database schema changes, adding dependencies
- 🚫 Never: Commit secrets, edit node_modules/ or vendor/
```

## Сценарии использования

### 1. Старт нового проекта
Агент автоматически знает как собирать, тестировать и деплоить — без лишних уточнений.

### 2. Монорепозиторий
Каждый subproject со своими правилами. Root AGENTS.md задаёт общие конвенции.

### 3. Онбординг в команду
Новый разработчик (или агент) — прочитал AGENTS.md и знает workflow.

### 4. Multi-agent teams (GitHub Copilot)
Специализированные агенты через `.github/agents/`:
- `@docs-agent` — документация
- `@test-agent` — тесты
- `@lint-agent` — линтинг
- `@api-agent` — API endpoints
- `@security-agent` — безопасность
- `@dev-deploy-agent` — деплой

### 5. Кросс-инструментальная совместимость
Один AGENTS.md работает с 30+ инструментами: Codex, Cursor, Claude Code, Copilot, Aider, Gemini CLI, Zed, Devin и другими.

## Что делает AGENTS.md эффективным

Выводы из анализа 2500+ репозиториев:

1. **Команды в начале** — с конкретными флагами и опциями
2. **Code examples > explanations** — один реальный пример лучше трёх параграфов описания
3. **Трёхуровневые границы** — Always / Ask first / Never
4. **Конкретный стек** — «React 18 + TypeScript + Vite + Tailwind», а не «React проект»
5. **Не автогенерировать** — human-curated файлы эффективнее (автогенерация не даёт выигрыша в качестве)
6. **<100 строк для корневого файла** — избегать размывания контекста (context dilution)

## Влияние на качество кода

По данным исследований (ETH Zurich, 2026):

| Метрика | Результат |
|---------|-----------|
| Улучшение качества | ~4% (human-curated) |
| Снижение багов | 35-55% в бенчмарках |
| Inference cost | +20% (зависит от размера файла) |
| Автогенерация | Без выигрыша в качестве |

## Миграция с других форматов

```bash
# Из AGENT.md в AGENTS.md
mv AGENT.md AGENTS.md && ln -s AGENTS.md AGENT.md

# Настройка Aider
echo "read: AGENTS.md" >> .aider.conf.yml

# Настройка Gemini CLI
# .gemini/settings.json: { "context": { "fileName": "AGENTS.md" } }
```

## FAQ

**Обязательные поля?** Нет. Любые Markdown-заголовки — формат намеренно без жёсткой схемы.

**Конфликт инструкций?** Ближайший к cwd файл побеждает; chat prompts переопределяют всё.

**Автоматическое выполнение команд?** Да, если команды перечислены — агент попытается их запустить.

**Можно обновлять?** Да, living documentation — AGENTS.md должен эволюционировать вместе с проектом.

## См. также

- [Сравнение контекст-файлов](./context-files-ecosystem.md) — AGENTS.md vs CLAUDE.md vs SKILL.md vs .cursorrules vs DESIGN.md
- [AI для кода: Copilot, Cursor, Claude Code](../ai-for-code.md) — инструменты, которые читают AGENTS.md
- [AI-агенты и автоматизация](../ai-agents.md) — обзор AI-агентов и фреймворков
- [DESIGN.md — формат дизайн-систем для AI](../design/design-md.md) — DESIGN.md как часть экосистемы контекст-файлов
- [5 уровней зрелости AI Second Brain](../second-brain-levels.md) — как AGENTS.md вписывается в архитектуру базы знаний (Level 1: базовая маршрутизация)

## Материалы и источники

- [agents.md — официальный сайт](https://agents.md)
- [OpenAI Codex: AGENTS.md Guide](https://developers.openai.com/codex/guides/agents-md)
- [Augment Code: How to Build AGENTS.md](https://www.augmentcode.com/guides/how-to-build-agents-md)
- [Agensi: SKILL.md vs CLAUDE.md vs .cursorrules](https://www.agensi.io/learn/skill-md-vs-claude-md-vs-cursorrules)
- [GitHub Blog — Agents.md Announcement](https://github.blog/)
