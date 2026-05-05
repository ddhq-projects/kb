---
title: "Официальные экосистемы скиллов: Laravel, WordPress, OpenClaw"
description: "Обзор официальных экосистем Agent Skills: Laravel Agent Skills (3 official + 143 community), WordPress Agent Skills (16 official), OpenClaw skills — установка, возможности, сравнение"
---

## Laravel Agent Skills

**Репозиторий:** [github.com/laravel/agent-skills](https://github.com/laravel/agent-skills)
**Платформы:** Claude Code, Cursor, встроенные агенты

### Официальные скиллы

| Skill | Назначение |
|-------|-----------|
| **laravel** | Ревью PHP/Laravel кода: PSR-12, снижение сложности, улучшение naming |
| **laravel-cloud** | Деплой и управление на Laravel Cloud: cloud CLI, базы данных, кэши, домены, buckets |
| **laravel-nightwatch** | Настройка Nightwatch: сэмплирование, фильтрация, PII-маскирование, MCP-сервер для просмотра issues |

### Установка

```bash
# Claude Code — через plugin marketplace
/plugin marketplace add laravel/agent-skills
/plugin install laravel@laravel
/plugin install laravel-cloud@laravel
/plugin install laravel-nightwatch@laravel

# Cursor — поиск в plugin marketplace panel

# Через skills.sh
npx skills add https://github.com/laravel/agent-skills/tree/main/laravel-cloud/skills/deploying-laravel-cloud
```

### Laravel Boost v2.0

Интеграция скиллов на уровне Composer:

```bash
composer require laravel/boost --dev
php artisan boost:install
php artisan boost:add-skill jeffallan/laravel-specialist
php artisan boost:update --discover  # авто-сканирование новых пакетов
```

Boost автоматически генерирует `CLAUDE.md` с активациями вроде `laravel-best-practices`.

### Community Skills (skills.laravel.cloud)

**URL:** [skills.laravel.cloud](https://skills.laravel.cloud) — **143+ community-скиллов**:

- Security audits
- Technical debt management
- Eloquent optimization
- laravel-specialist (11.5K установок)
- laravel-patterns (архитектура, очереди, API)
- laravel-security (auth, валидация, rate limiting)

### Community-репозитории

| Репозиторий | Описание |
|-------------|----------|
| JustSteveKing/laravel-api-skill | REST API по стандартам Laravel |
| coollabsio/coolify | Laravel best practices (контроллеры, модели и др.) |
| truthanb/laravel-ai-skills | Коллекция AI-скиллов для Laravel |

---

## WordPress Agent Skills

**Репозиторий:** [github.com/WordPress/agent-skills](https://github.com/WordPress/agent-skills)
**Платформы:** Claude Code, GitHub Copilot, OpenAI Codex, Cursor
**Лицензия:** GPL-2.0-or-later
**Анонс:** январь 2026 (wordpress.org)

16 официальных скиллов от WordPress/Automattic. Сгенерированы GPT-5.2 Codex из документации Gutenberg/WordPress, затем отредактированы контрибьюторами.

### Установка

```bash
git clone https://github.com/WordPress/agent-skills.git
cd agent-skills
node shared/scripts/skillpack-build.mjs --clean

# Глобально (все проекты)
node shared/scripts/skillpack-install.mjs --global

# В конкретный проект
node shared/scripts/skillpack-install.mjs --dest=../my-wp --targets=codex,vscode,claude,cursor

# Выборочные скиллы
node shared/scripts/skillpack-install.mjs --global --skills=wp-playground,wp-block-development
```

### Список официальных скиллов

| Skill | Назначение |
|-------|-----------|
| **wordpress-router** | Классификация WordPress-репозиториев и маршрутизация к нужному workflow |
| **wp-project-triage** | Определение типа проекта, инструментов, версий |
| **wp-block-development** | Gutenberg-блоки: block.json, атрибуты, рендеринг, deprecations |
| **wp-block-themes** | Блочные темы: theme.json, шаблоны, паттерны, стилевые вариации |
| **wp-plugin-development** | Архитектура плагинов: хуки, Settings API, безопасность |
| **wp-rest-api** | REST-маршруты, схема, аутентификация, формирование ответов |
| **wp-interactivity-api** | Фронтенд-интерактивность: data-wp-* директивы, stores |
| **wp-abilities-api** | Разрешения на основе capabilities, REST API-аутентификация |
| **wp-wpcli-and-ops** | WP-CLI-команды, автоматизация, multisite, search-replace |
| **wp-performance** | Профилирование, кэширование, оптимизация БД, Server-Timing |
| **wp-phpstan** | Статический анализ PHPStan: конфигурация, baselines, WP-типизация |
| **wp-playground** | WordPress Playground для мгновенных локальных окружений |
| **wpds** | WordPress Design System |
| **wp-plugin-directory-guidelines** | Гайдлайны Plugin Directory |
| **blueprint** | WordPress Playground Blueprints для декларативной настройки |

### Зачем WordPress это сделал

AI coding assistants систематически ошибаются в WordPress-контексте:
- Генерируют устаревшие паттерны (pre-Gutenberg, pre-block themes)
- Пропускают security considerations (nonce, sanitization)
- Пропускают block deprecations → ошибки «Invalid block»
- Игнорируют существующие инструменты в репозитории

Skills дают агенту экспертные знания в формате, который он реально использует.

### Community WordPress Skills

| Репозиторий | Описание |
|-------------|----------|
| elvismdev/claude-wordpress-skills | Производительность, безопасность, Gutenberg, best practices тем и плагинов |
| Jeffallan/claude-skills/wordpress-pro | Кастомные темы/плагины, Gutenberg-блоки/паттерны, WooCommerce |

---

## OpenClaw Skills

**Платформа:** OpenClaw (358K+ звёзд на GitHub)
**Документация:** [docs.openclaw.ai/tools/skills](https://docs.openclaw.ai/tools/skills)

OpenClaw использует AgentSkills-совместимые skill-папки. Полная совместимость со спецификацией agentskills.io.

### Иерархия расположения (по приоритету)

| # | Источник | Путь | Видимость |
|---|---------|------|-----------|
| 1 | Workspace skills | `<workspace>/skills` | Только этот агент |
| 2 | Project agent skills | `<workspace>/.agents/skills` | Только агент воркспейса |
| 3 | Personal agent skills | `~/.agents/skills` | Все агенты на машине |
| 4 | Managed skills | `~/.openclaw/skills` | Все агенты на машине |
| 5 | Bundled skills | В составе установки | Все агенты |
| 6 | Extra skill folders | `skills.load.extraDirs` (конфиг) | Все агенты |

При конфликте имён — побеждает источник с высшим приоритетом.

### Расширенные поля метаданных

OpenClaw добавляет собственные поля в `metadata.openclaw`:

```yaml
---
name: gemini
description: Use Gemini CLI for coding assistance
user-invocable: true              # Показывать как slash-команду
disable-model-invocation: false   # Скрыть из обычного промпта
command-dispatch: tool            # Прямой вызов инструмента, минуя модель
command-tool: gemini-cli          # Имя инструмента для dispatch
homepage: https://example.com     # URL для macOS Skills UI
metadata:
  openclaw:
    emoji: "♊️"
    requires:
      bins: ["gemini"]            # Должны быть в PATH
      env: ["GEMINI_API_KEY"]     # Должны быть переменные окружения
---
```

### Фильтры загрузки (gating)

Skills автоматически отфильтровываются при загрузке через `metadata.openclaw.requires`:

- **`bins`** — все указанные бинарники должны быть в PATH
- **`anyBins`** — хотя бы один из списка
- **`env`** — все указанные переменные окружения должны существовать
- **`config`** — путь в openclaw.json должен быть truthy
- **`os`** — фильтр по платформе (`["darwin", "linux"]`)
- **`always`** — пропустить все остальные проверки

### Автоустановщик зависимостей

```yaml
metadata:
  openclaw:
    install:
      - id: brew
        kind: brew
        formula: gemini-cli
        bins: ["gemini"]
        label: "Install Gemini CLI (brew)"
```

Поддерживаемые `kind`: brew, node, go, uv, download. Порядок: brew → uv → node manager → go → download.

---

## Сравнение экосистем

| Аспект | Laravel | WordPress | OpenClaw |
|--------|---------|-----------|----------|
| Официальный репо | laravel/agent-skills | WordPress/agent-skills | Встроено в OpenClaw |
| Скиллов (official) | 3 | 16 | Десятки bundled |
| Community-скиллов | 143+ (skills.laravel.cloud) | 2+ репозитория | 5,700+ (ClawHub) |
| Платформы | Claude Code, Cursor | Claude, Copilot, Codex, Cursor | OpenClaw (совместим со всеми) |
| Установка | Plugin marketplace + skills.sh | Build-скрипты + ручное копирование | Автоматическая (ClawHub) |
| Интеграция с фреймворком | Laravel Boost v2.0 | — | — |
| Формат | SKILL.md + CLAUDE.md | SKILL.md + references/ + scripts/ | SKILL.md + расширенные метаданные |
| Лицензия | MIT | GPL-2.0-or-later | Apache 2.0 |

## Материалы и источники

- [Laravel Agent Skills (GitHub)](https://github.com/laravel/agent-skills)
- [skills.laravel.cloud](https://skills.laravel.cloud)
- [WordPress Agent Skills (GitHub)](https://github.com/WordPress/agent-skills)
- [OpenClaw Skills Documentation](https://docs.openclaw.ai/tools/skills)
- [ClawHub — OpenClaw Skill Registry](https://clawhub.ai)
