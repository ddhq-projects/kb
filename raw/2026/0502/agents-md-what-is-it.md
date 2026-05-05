# AGENTS.md — Что это, как работает, сценарии использования

> Источники: agents.md, GitHub Blog, OpenAI Codex Docs, InfoQ

## Что такое AGENTS.md

**AGENTS.md — открытый Markdown-формат для инструкций AI coding агентам.** Это «README для агентов»: выделенное, предсказуемое место для контекста и инструкций, которые помогают AI работать с проектом.

- Используется 60,000+ open-source проектов на GitHub
- Без обязательной схемы, YAML или спецсинтаксиса — обычный Markdown
- СтеWARDSHIP: Agentic AI Foundation (AAIF) под Linux Foundation (декабрь 2025)
- Основатели формата: OpenAI Codex, Amp, Google Jules, Cursor, Factory

## Зачем нужен отдельный файл (не README.md)

README.md — для людей: quick start, описание проекта, contribution guidelines.

AGENTS.md — для AI: build steps, tests, conventions — то, что может быть слишком детальным для README или не релевантным для человеческих контрибьюторов.

Разделение:
- Дать агентам чёткое, предсказуемое место для инструкций
- Сохранить README лаконичным
- Точный, agent-focused guidance

## Как работает (механика)

### Автодисковери

AI-агенты автоматически читают ближайший AGENTS.md перед задачей. Приоритет:
1. Системный промпт
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

Ближайший к рабочей директории файл побеждает. Explicit chat prompts переопределяют всё.

### В OpenAI Codex

Порядок чтения:
1. **Global**: `~/.codex/AGENTS.override.md` или `~/.codex/AGENTS.md`
2. **Project**: от git root вниз до cwd — в каждой директории проверяется AGENTS.override.md → AGENTS.md → fallback filenames
3. **Merge**: конкатенация от root к cwd (ближайшие позже → побеждают)
4. **Лимит**: 32 KiB по умолчанию (настраивается через `project_doc_max_bytes`)

## Составляющие и рекомендуемые секции

### 6 core areas (по анализу 2500+ репозиториев):

1. **Commands** — исполняемые команды с флагами (`npm test -- --coverage`, `pnpm lint --fix`)
2. **Testing** — как запускать, что проверять, CI plan
3. **Project Structure** — файловая структура, ключевые директории
4. **Code Style** — примеры хорошего кода, naming conventions
5. **Git Workflow** — формат коммитов, PR guidelines
6. **Boundaries** — что никогда не трогать (secrets, vendor/, production configs)

### Пример структуры

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
Агент автоматически знает как собирать, тестировать и деплоить.

### 2. Монорепозиторий
Каждый subproject со своими правилами. Root AGENTS.md — общие конвенции.

### 3. Team onboarding
Новый разработчик (или агент) — прочитал AGENTS.md и знает workflow.

### 4. Multi-agent teams (GitHub Copilot)
Специализированные агенты через `.github/agents/`:
- `@docs-agent` — документация
- `@test-agent` — тесты
- `@lint-agent` — линтинг
- `@api-agent` — API endpoints
- `@security-agent` — безопасность
- `@dev-deploy-agent` — деплой

### 5. Кросс-тул совместимость
Один AGENTS.md → Codex, Cursor, Claude Code, Copilot, Aider, Gemini CLI, Zed, Devin

## Что делает AGENTS.md эффективным (lessons from 2500+ repos)

1. **Команды в начале** — с флагами и опциями
2. **Code examples > explanations** — один реальный пример > три параграфа описания
3. **Трёхуровневые границы** — Always / Ask first / Never
4. **Конкретный стек** — «React 18 + TypeScript + Vite + Tailwind» а не «React проект»
5. **Не auto-generate** — human-curated файлы эффективнее, но +20% inference cost
6. **<100 строк для CLAUDE.md** — избегать context dilution

## Migration

```bash
# Из существующего файла
mv AGENT.md AGENTS.md && ln -s AGENTS.md AGENT.md

# Конфигурация Aider
echo "read: AGENTS.md" >> .aider.conf.yml

# Конфигурация Gemini CLI
# .gemini/settings.json: { "context": { "fileName": "AGENTS.md" } }
```

## Влияние на результаты

По исследованиям (ETH Zurich, 2026):
- Human-curated AGENTS.md → ~4% улучшение качества
- Снижение багов: 35-55% в бенчмарках
- +20% inference cost (зависит от размера файла)
- Автогенерация — без выигрыша в качестве

## FAQ

- **Обязательные поля?** Нет. Любые Markdown-заголовки.
- **Конфликт инструкций?** Ближайший файл побеждает; chat prompts переопределяют всё.
- **Автоматическое выполнение команд?** Да, если перечислены — агент попытается запустить.
- **Можно обновлять?** Да, treat as living documentation.
