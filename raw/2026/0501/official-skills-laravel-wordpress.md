# Официальные Skills: Laravel & WordPress

## Laravel

### Официальный репозиторий
**GitHub:** https://github.com/laravel/agent-skills
**Платформы:** Claude Code (plugin), Cursor (plugin), навыстройные агенты
**Установка:**
```bash
# Claude Code
/plugin marketplace add laravel/agent-skills
/plugin install laravel@laravel
/plugin install laravel-cloud@laravel
/plugin install laravel-nightwatch@laravel

# Cursor: поиск в plugin marketplace panel

# Или напрямую через skills.sh:
npx skills add https://github.com/laravel/agent-skills/tree/main/laravel-cloud/skills/deploying-laravel-cloud
```

### Скиллы в репозитории

| Skill | Назначение |
|-------|-----------|
| **laravel** | Ревью PHP/Laravel кода: PSR-12, уменьшение сложности, улучшение naming |
| **laravel-cloud** | Деплой и управление на Laravel Cloud (cloud CLI, databases, caches, domains, buckets) |
| **laravel-nightwatch** | Настройка Nightwatch: sampling, filtering, PII redaction, MCP server для browsing issues |

### skills.laravel.cloud
**URL:** https://skills.laravel.cloud
**143+ community-submitted skills** для PHP/Laravel:
- Security audits
- Technical debt management
- Eloquent optimization
- laravel-specialist (11.5K installs)
- laravel-patterns (architecture, queues, APIs)
- laravel-security (auth, validation, rate limiting)

### Laravel Boost v2.0
Интеграция с skills через:
```bash
composer require laravel/boost --dev
php artisan boost:install
php artisan boost:add-skill jeffallan/laravel-specialist
php artisan boost:update --discover  # сканирование новых packages
```

Автоматически генерирует CLAUDE.md с активациями типа `laravel-best-practices`.

### Community Skills

| Repo | Описание |
|------|----------|
| JustSteveKing/laravel-api-skill | REST API с Laravel standards |
| coollabsio/coolify | Laravel best practices (controllers, models, etc.) |
| truthanb/laravel-ai-skills | Коллекция AI skills для Laravel |

---

## WordPress

### Официальный репозиторий
**GitHub:** https://github.com/WordPress/agent-skills
**Платформы:** Claude Code, GitHub Copilot, OpenAI Codex, Cursor
**Лицензия:** GPL-2.0-or-later
**Анонс:** Январь 2026 (wordpress.org)
**Skills:** 16 official skills от WordPress/Automattic

> AI Authorship Disclosure: сгенерированы GPT-5.2 Codex из официальной Gutenberg/WordPress документации, затем отредактированы WordPress контрибьюторами.

### Установка
```bash
git clone https://github.com/WordPress/agent-skills.git
cd agent-skills
node shared/scripts/skillpack-build.mjs --clean

# Global (все проекты)
node shared/scripts/skillpack-install.mjs --global

# В конкретный проект
node shared/scripts/skillpack-install.mjs --dest=../my-wp --targets=codex,vscode,claude,cursor

# Specific skills
node shared/scripts/skillpack-install.mjs --global --skills=wp-playground,wp-block-development
```

### Список official skills

| Skill | Назначение |
|-------|-----------|
| **wordpress-router** | Классификация WordPress-репозиториев и маршрутизация к нужному workflow |
| **wp-project-triage** | Определение типа проекта, tooling, версий |
| **wp-block-development** | Gutenberg blocks: block.json, attributes, rendering, deprecations |
| **wp-block-themes** | Block themes: theme.json, templates, patterns, style variations |
| **wp-plugin-development** | Plugin architecture, hooks, settings API, security |
| **wp-rest-api** | REST routes/endpoints, schema, auth, response shaping |
| **wp-interactivity-api** | Frontend интерактивность: data-wp-* directives, stores |
| **wp-abilities-api** | Capability-based permissions, REST API authentication |
| **wp-wpcli-and-ops** | WP-CLI commands, automation, multisite, search-replace |
| **wp-performance** | Profiling, caching, DB optimization, Server-Timing |
| **wp-phpstan** | PHPStan static analysis (config, baselines, WP-specific typing) |
| **wp-playground** | WordPress Playground для instant local environments |
| **wpds** | WordPress Design System |
| **wp-plugin-directory-guidelines** | Plugin Directory Guidelines |
| **blueprint** | WordPress Playground Blueprints для declarative setup |

### Community WordPress Skills

| Repo | Описание |
|------|----------|
| elvismdev/claude-wordpress-skills | Performance, security, Gutenberg, theme/plugin best practices (CLAUDE.md) |
| Jeffallan/claude-skills/wordpress-pro | Custom themes/plugins, Gutenberg blocks/patterns, WooCommerce (SKILL.md) |

### Почему WordPress это сделал

AI coding assistants часто:
- Генерируют устаревшие паттерны (pre-Gutenberg, pre-block themes)
- Пропускают security considerations
- Пропускают block deprecations → «Invalid block» errors
- Игнорируют существующее tooling в репозитории

Skills дают экспертные знания в формате, который AI реально использует.

---

## Сравнение

| Аспект | Laravel | WordPress |
|--------|---------|-----------|
| Official repo | laravel/agent-skills | WordPress/agent-skills |
| Skills count | 3 official + 143+ community | 16 official |
| Directory | skills.laravel.cloud (143+) | github.com/WordPress/agent-skills |
| Platforms | Claude Code, Cursor | Claude, Copilot, Codex, Cursor |
| Install method | Plugin marketplace + skills.sh | Build scripts + manual copy |
| Boost integration | ✅ Laravel Boost v2.0 | ❌ |
| Format | SKILL.md + CLAUDE.md | SKILL.md + references/ + scripts/ |
| License | MIT | GPL-2.0-or-later |
