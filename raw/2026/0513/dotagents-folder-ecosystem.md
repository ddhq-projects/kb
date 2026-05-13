# `.agents/` — экосистема стандартов для AI-агентов

> Дата сбора: 2026-05-13  
> Источники: dotagentsprotocol.com, agents.md, agentskills.io, GitHub agentsmd/agents.md, every.to, developers.googleblog.com, agentic-patterns.com

---

## 1. Три параллельных стандарта

В экосистеме agent-конфигураций сосуществуют три основных подхода:

| Стандарт | Фокус | Статус | URL |
|----------|-------|--------|-----|
| `.agents/` Protocol | Универсальный конфиг агентов (MCP, Skills, Sub-agents, Tasks, Memories) | Draft 2026-02-24 | dotagentsprotocol.com |
| `.agent/` Proposal | Проектный контекст для coding agents (spec, wiki, links) | Proposal (issue #71) | github.com/agentsmd/agents.md/issues/71 |
| AGENTS.md | Файл инструкций для coding agents в корне репозитория | Production, 60k+ репо | agents.md |

---

## 2. `.agents` Protocol (dotagentsprotocol.com)

### 2.1 Концепция

Позиционируется как **точка схождения (convergence point)** для семи открытых стандартов. Не заменяет их, а определяет как они сосуществуют в одном месте.

**Два слоя с shallow-merge:**
- `~/.agents/` — глобальный (базовый слой для всех проектов)
- `./.agents/` — проектный (оверрайдит глобальный, коммитится в git)

**Merge order:** `defaults ← config.json ← ~/.agents/ ← ./.agents/`

### 2.2 Полная структура

```text
.agents/
├── agents.md              # AGENTS.md-совместимые инструкции
├── system-prompt.md       # Базовый system prompt
├── mcp.json              # Конфигурация MCP-серверов
├── models.json           # Пресеты моделей и API-ключи
├── config.json           # Опциональный конфиг
│
├── skills/               # Reusable skills (Anthropic-совместимые)
│   └── <skill-name>/
│       ├── skill.md      # YAML frontmatter + Markdown body
│       ├── scripts/      # Исполняемый код (Python, Bash, JS)
│       ├── references/   # Доп. документация (загружается по требованию)
│       └── assets/       # Статика: шаблоны, изображения, схемы
│
├── agents/               # Sub-агенты
│   └── <agent-name>/
│       ├── agent.md      # Профиль: frontmatter (id, name, role, enabled) + system prompt
│       └── config.json   # Тонкая настройка: tools, model, connections
│
├── tasks/                # Повторяемые задачи
│   └── <task-name>/
│       └── task.md       # Интервал, триггеры, инструкции
│
└── memories/             # Персистентные знания
    └── *.md              # Архитектурные заметки, decisions, patterns
```

### 2.3 Маппинг стандартов

| Стандарт | Автор/Стюард | Маппинг в .agents/ |
|----------|-------------|-------------------|
| MCP | Anthropic / Linux Foundation | `mcp.json` |
| AGENTS.md | OpenAI / Agentic AI Foundation | `agents.md` |
| Skills | Anthropic | `skills/*/skill.md` |
| ACP (Agent Client Protocol) | Zed Industries | agent profiles (`agents/*/agent.md`) |
| Sub-Agents | .agents Protocol | `agents/*/agent.md` |
| Tasks | .agents Protocol | `tasks/*/task.md` |
| Memories | .agents Protocol | `memories/*.md` |

### 2.4 Design Principles

- **Human-readable** — plain JSON и Markdown, никаких бинарных форматов
- **Version-controllable** — детерминированная сортировка ключей для чистых диффов
- **Portable** — относительные пути, без vendor lock-in
- **Safe by default** — атомарные записи (temp+rename), timestamped бэкапы
- **Layered** — shallow-merge для конфигов, ID-based merge для skills и memories
- **Extensible** — новые файлы не ломают существующие

### 2.5 Формат frontmatter

Простой формат: `---` fences + `key: value` строки. **Не полный YAML** — без внешних зависимостей.

- Значения могут быть в кавычках
- Списки: CSV (`tags: a, b, c`) или JSON arrays (`tags: ["a", "b"]`)
- Ключи сортируются детерминированно для чистых диффов

**Пример agent.md:**
```yaml
---
id: code-reviewer
name: Code Reviewer
description: Reviews pull requests for code quality and security
role: delegation-target
enabled: true
---
# System Prompt
You are an expert code reviewer...
```

**Пример task.md:**
```yaml
---
id: daily-report
name: Daily Report
description: Generates daily standup report
interval: 86400
enabled: true
---
# Task Instructions
1. Fetch yesterday's commits...
```

### 2.6 .agents Hub

Каталог для публикации и установки `.dotagents` bundles: hub.dotagentsprotocol.com

- На май 2026: 6 bundles, 12 agents, 7 MCP, 20 skills, 14 tasks
- Модель: export + PR в репозиторий → установка через desktop app
- Публичные bundles: agents, MCP, skills по умолчанию; memories и tasks — opt-in

---

## 3. Agent Skills Specification (agentskills.io)

### 3.1 Структура скилла

```text
skill-name/
├── SKILL.md          # Обязательно: метаданные + инструкции
├── scripts/          # Опционально: исполняемый код
├── references/       # Опционально: документация
├── assets/           # Опционально: шаблоны, ресурсы
└── ...               # Любые дополнительные файлы
```

### 3.2 SKILL.md frontmatter

| Поле | Обязательно | Ограничения |
|------|------------|-------------|
| `name` | Да | 1-64 символов, lowercase + hyphens, не начинается/заканчивается на `-`, без `--` |
| `description` | Да | 1-1024 символов, что делает + когда использовать |
| `license` | Нет | Имя лицензии или ссылка на файл |
| `compatibility` | Нет | 1-500 символов, требования к окружению |
| `metadata` | Нет | Произвольный key-value mapping |
| `allowed-tools` | Нет | Предодобренные инструменты (экспериментально) |

### 3.3 Progressive Disclosure

Три уровня загрузки для экономии контекста:

1. **Discovery** (~100 токенов) — только `name` и `description` при старте
2. **Activation** (<5000 токенов рекомендуется) — полный `SKILL.md` при активации
3. **Execution** (по требованию) — файлы из `scripts/`, `references/`, `assets/`

**Рекомендация:** держать `SKILL.md` до 500 строк, детали выносить в `references/`.

### 3.4 Валидация

Утилита `skills-ref` для проверки:
```bash
skills-ref validate ./my-skill
```
Проверяет валидность frontmatter и naming conventions.

---

## 4. `.agent/` Proposal (singlular)

### 4.1 Концепция

Предложение из GitHub issue #71 (agentsmd/agents.md, открыто 2025-09-25). Фокус: **проектный контекст** для coding agents, выходящий за рамки кода.

**Проблема:** агенты не имеют доступа к не-кодовым активам: PRD, дизайн-документам, Figma, Jira, дашбордам мониторинга.

**Решение:** "Directory as Context" — агент читает директорию как «ментальную модель» проекта.

### 4.2 Структура

```text
├── AGENT.md           # Мета-гайд: поведение, стандарты, структура директории
└── .agent/
    ├── spec/          # «Чертёж» проекта
    │   ├── requirement.md   # PRD, user stories, бизнес-правила
    │   ├── design.md        # Технический дизайн, архитектура, API, ссылки на UI
    │   └── tasks.md         # Задачи разработки из требований
    │
    ├── wiki/          # «Энциклопедия»
    │   ├── architecture.md  # Системная архитектура, компоненты, взаимодействия
    │   └── domain.md        # Бизнес-домен, концепты, процессы
    │
    ├── links/         # «Адресная книга»
    │   └── resources.md     # Внешние URI + инструменты (MCP) для доступа
    │
    └── ...            # Расширяемо (middleware/, integrations/, tests/)
```

### 4.3 Как работает

- **Long-Term Memory:** `AGENT.md` — мета-гайд, загружается по умолчанию
- **Local Context:** агент читает текстовые файлы в `.agent/` через файловые инструменты
- **External Context:** парсит `links/resources.md`, использует MCP для доступа к Figma, Jira, дашбордам

### 4.4 Ключевые возможности

- Валидация кода против требований в `spec/requirement.md`
- Генерация кода в соответствии с `wiki/architecture.md`
- Root cause analysis: корреляция багов с PR и данными мониторинга
- Human-Agent контракт: люди предоставляют структурированный контекст, агенты потребляют

---

## 5. AGENTS.md (agents.md)

### 5.1 Концепция

Открытый Markdown-формат для инструкций coding agents. 60k+ open-source проектов на GitHub.

Поддерживается: OpenAI Codex, GitHub Copilot, Cursor, Aider, Amp, Jules (Google), Factory.

Управляется **Agentic AI Foundation** под Linux Foundation.

### 5.2 Базовый формат

```markdown
# AGENTS.md

## Setup commands
- Install deps: `pnpm install`
- Start dev server: `pnpm dev`
- Run tests: `pnpm test`

## Code style
- TypeScript strict mode
- Single quotes, no semicolons
```

### 5.3 Шесть ключевых разделов (из анализа 2500+ репозиториев)

1. **Commands** — конкретные исполняемые команды (с флагами, не просто имена тулов)
2. **Testing** — как запускать и что ожидать
3. **Project Structure** — где что лежит
4. **Code Style** — примеры кода вместо абстрактных описаний
5. **Git Workflow** — PR правила, commit messages
6. **Boundaries** — что агенту НЕЛЬЗЯ трогать

### 5.4 Трёхуровневые границы

```
✅ Always do:   Write new files to `docs/`, follow style examples
⚠️ Ask first:   Before modifying existing documents
🚫 Never do:    Modify code in `src/`, edit config files, commit secrets
```

### 5.5 Nested AGENTS.md

Для монореп — вложенные `AGENTS.md` в подпроектах. Ближайший к рабочей директории имеет приоритет. OpenAI: 88 AGENTS.md файлов в репозитории.

### 5.6 Sub-agents через AGENTS.md (GitHub Copilot)

Формат: `.github/agents/<agent-name>.md` с frontmatter:

```yaml
---
name: docs_agent
description: Expert technical writer for this project
---
# System prompt body...
```

Использование: `@docs-agent`, `@test-agent`, `@security-agent`.

---

## 6. «The Folder Is the Agent» (every.to, Kieran Klaassen)

### 6.1 Ключевая идея

Агент — это не сложная оркестрация, а **модель + папка с контекстом**. Kieran Klaassen (Cora, Every) запускает 44 папки-как-агента.

### 6.2 Структура папки-агента (на примере Cora)

```text
~/cora/
├── CLAUDE.md                  # Конвенции, стандарты, деплой
├── docs/
│   ├── developer-docs/        # Архитектура, пайплайны, дизайн системы
│   ├── runbooks/              # Операционные паттерны из инцидентов
│   └── investigations/        # Результаты расследований
└── .claude/
    └── agents/                # Специализированные агенты (reviewer, planner, etc.)
```

### 6.3 Порядок чтения

Каждый новый агент читает: `CLAUDE.md` → архитектура → системный отчёт → промпт ассистента → компонентный создатель.

### 6.4 Разделение агентов

- `~/cora/` — build features (есть код приложения)
- `~/cora-agent/` — run operations (нет кода приложения, только skills для мониторинга, логов, БД, тикетов)

### 6.5 Вывод

Swarm-ы из 10 агентов не работают — человек не успевает оценивать результаты. Работает: одна хорошо настроенная папка-агент + dispatch layer для роутинга между специализированными папками.

---

## 7. Team-Shared Agent Configuration as Code

### 7.1 Паттерн (agentic-patterns.com)

Конфигурация агента в системе контроля версий для всей команды.

**Пример `.claude/settings.json`:**
```json
{
  "permissions": {
    "pre_allowed": ["git add", "git commit", "npm test", "npm run lint"],
    "blocked_paths": [".env", "secrets/", "*.key", "credentials.json"]
  },
  "subagents": {
    "security-review": "./agents/security.md",
    "migration-helper": "./agents/migration.md"
  },
  "hooks": {
    "pre_commit": "./hooks/run_tests.sh"
  }
}
```

### 7.2 Best Practices

- **Локальные оверрайды:** `.claude/settings.local.json` (gitignored)
- **Schema validation:** JSON Schema для проверки конфига
- **Secrets management:** environment variables, не в коммит
- **Gradual adoption:** начинать с минимального, расширять по мере необходимости

---

## 8. MCP и ACP — протоколы, которые мапятся в `.agents/`

### 8.1 MCP (Model Context Protocol)

Стандартизирует доступ агентов к внешним ресурсам: API, файловые системы, БД.

- JSON-RPC поверх stdio/HTTP
- Серверы рекламируют свои tools, агент автоматически их обнаруживает
- В `.agents/`: конфигурация в `mcp.json`

### 8.2 ACP (Agent Client Protocol)

Стандартизирует коммуникацию между редакторами/IDE и coding agents.

- JSON-RPC: stdio (локально) или HTTP/WebSocket (удалённо)
- Поддерживается Zed, другими редакторами
- В `.agents/`: agent profiles в `agents/*/agent.md`

### 8.3 A2A (Agent-to-Agent Protocol, Google)

Прямая коммуникация между агентами: discovery через Agent Card (`/.well-known/agent-card.json`), delegation, real-time coordination.

### 8.4 Другие протоколы

- **UCP** (Universal Commerce Protocol) — стандартизация транзакций
- **ANP** (Agent Network Protocol) — internet-wide collaboration через DIDs
- **A2UI** — рендеринг интерактивных UI компонентов агентами

---

## 9. Сравнение: что уже в OpenClaw vs что в стандартах

### 9.1 Текущая структура OpenClaw (`~/.agents/`)

```text
~/.agents/
├── main.yaml                 # Манифест проекта (уникален для OpenClaw)
├── .env / .env.example       # Переменные окружения
├── .skill-lock.json          # Лок-файл скиллов
├── skills/                   # 60+ скиллов
├── agents/
│   └── definitions.yaml      # Sub-агенты (architect, researcher)
├── commands/                 # Одноразовые скрипты/команды
├── context/
│   └── personality.md        # Личность/поведение ассистента
├── permissions/
│   └── policy.yaml           # Политики безопасности (deny_read, ask_confirmation)
└── workflows/
    └── *.agf.yaml            # Повторяемые сценарии (AGF формат)
```

### 9.2 Совпадения и различия

| Компонент | OpenClaw | .agents Protocol | .agent/ Proposal |
|-----------|----------|-----------------|------------------|
| Скиллы | `skills/` (SKILL.md) | `skills/*/skill.md` ✅ | — |
| Sub-агенты | `agents/*.yaml` | `agents/*/agent.md` + `config.json` ✅ | — |
| Инструкции | `main.yaml` + `workspace/AGENTS.md` | `agents.md` | `AGENT.md` |
| MCP | — ❌ | `mcp.json` ✅ | — |
| Модели | — ❌ | `models.json` ✅ | — |
| Задачи | `workflows/*.agf.yaml` (AGF) | `tasks/*/task.md` 🔶 | — |
| Память | `workspace/MEMORY.md` | `memories/*.md` 🔶 | — |
| Безопасность | `permissions/policy.yaml` ✅ | — ❌ | — |
| System prompt | `context/personality.md` | `system-prompt.md` ✅ | — |
| Spec/wiki/links | — ❌ | — | `spec/`, `wiki/`, `links/` |
| Лок-файл | `.skill-lock.json` ✅ | — ❌ | — |

**Легенда:** ✅ = совпадает/близко, 🔶 = частично, ❌ = отсутствует

---

## 10. Ключевые ссылки

| Ресурс | URL |
|--------|-----|
| .agents Protocol | https://dotagentsprotocol.com |
| .agents Hub | https://hub.dotagentsprotocol.com |
| Agent Skills Spec | https://agentskills.io/specification |
| AGENTS.md | https://agents.md |
| .agent/ Proposal (Issue #71) | https://github.com/agentsmd/agents.md/issues/71 |
| GitHub Blog: AGENTS.md best practices | https://github.blog/ai-and-ml/github-copilot/how-to-write-a-great-agents-md-lessons-from-over-2500-repositories/ |
| The Folder Is the Agent (every.to) | https://every.to/source-code/the-folder-is-the-agent |
| Developer's Guide to AI Agent Protocols | https://developers.googleblog.com/developers-guide-to-ai-agent-protocols/ |
| Team-Shared Agent Configuration | https://agentic-patterns.com/patterns/team-shared-agent-configuration/ |
| Compound Engineering Guide | https://every.to/guides/compound-engineering |
| A2A Protocol | https://a2a-protocol.org/ |
| Agent Client Protocol | https://agentclientprotocol.com/ |

---

## 11. Выводы и тренды (май 2026)

1. **Конвергенция:** `.agents/` становится точкой схождения для MCP, AGENTS.md, Skills, Sub-agents — вендор-нейтральный стандарт.
2. **Папка = агент:** Тренд от сложной оркестрации к простым папкам-с-контекстом. 44 агента Kieran'а — это просто 44 папки.
3. **Version control для agent config:** Конфиги агентов коммитятся в git наравне с кодом (настройки, pre-allowed команды, blocked paths).
4. **Progressive disclosure:** Метаданные → инструкции → ресурсы — загрузка по требованию для экономии контекста.
5. **Расширение AGENTS.md:** От простого Markdown-файла к sub-agents с frontmatter (GitHub Copilot), вложенным файлам (монорепы), и `.agent/` директориям с wiki/spec/links.
6. **OpenClaw занимает уникальную нишу:** `permissions/policy.yaml`, `workflows/*.agf.yaml`, `.skill-lock.json` — расширения, которых нет в других стандартах.
