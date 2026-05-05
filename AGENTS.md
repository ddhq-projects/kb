# AGENTS.md — DDPA Knowledge Base

LLM Wiki schema for the DDPA knowledge base — сервисы для бизнеса и личной продуктивности.

## Wiki Structure

```
kb-ddpa/
├── raw/                       # Immutable source documents — READ ONLY
│   └── YYYY/                  # Year (e.g. 2026)
│       └── MMDD/              # Month + Day (e.g. 0501 = May 1)
│           └── file.{md,pdf}  # Source files
├── src/content/docs/          # ★ WIKI PAGES — you write and maintain these
│   ├── business/              # Бизнес: клиенты, финансы, процессы, персонал
│   │   ├── clients/           # Клиенты: CRM, маркетинг, продажи, поддержка
│   │   ├── finance/           # Финансы: учёт, бюджетирование, финмодели
│   │   ├── processes/         # Процессы: методологии, автоматизация, коммуникации, SaaS
│   │       ├── automation/    # Автоматизация процессов и интеграции
│   │       ├── communication/ # Коммуникационные сервисы
│   │       └── saas/          # SaaS-сервисы для бизнеса
│   │   └── staff/             # Персонал: найм, онбординг, мотивация, HR
│   ├── lifestyle/             # Образ жизни — продуктивность, саморазвитие, здоровье, досуг
│   │   ├── productivity/      # Личная продуктивность и управление задачами
│   │   ├── self-development/  # Саморазвитие: личностный рост, образование, навыки
│   │   ├── health/            # Здоровье: физическое и ментальное, фитнес, питание
│   │   ├── smart-home/        # Умный дом: организация пространства, лайфхаки
│   │   └── leisure/           # Досуг: хобби, развлечения, культура, путешествия
│   ├── gov/                   # Государственные и регулирующие сервисы
│   ├── ai/                    # AI-инструменты и сервисы
│   ├── it/                    # IT-инструменты: разработка, DevOps, безопасность
│   │   ├── development/        # Разработка: управление кодом, БД, dev-окружение
│   │   ├── devops/             # DevOps: CI/CD, хостинг, мониторинг
│   │   └── security/           # Безопасность: секреты, аудит, комплаенс
│   ├── index.md               # Catalog of all pages (update on every ingest)
│   └── log.md                 # Chronological operations log (append on every operation)
├── AGENTS.md                  # This file — wiki schema
├── astro.config.mjs           # Starlight config
└── package.json
```

## Page Format

Every wiki page (except index.md and log.md) starts with Starlight-compatible frontmatter:

```yaml
---
title: "Page Title"
description: "One-line summary of this page"
---
```

Starlight automatically reads `title` and `description` for:
- Page heading
- Meta description tag
- Site search indexing
- Pagefind / Algolia

**Important:** Do NOT start pages with an `# H1` heading that duplicates the frontmatter `title`. Starlight already renders the `title` as the page's H1. Start content directly with `##` level headings.

### Источники (Source Attribution)

Каждая wiki-страница должна заканчиваться секцией **«Материалы и источники»**:

```md
## Материалы и источники

- [Оригинальная статья](https://example.com/...)
```

- Ссылка на оригинальный URL (из frontmatter `source` raw-файла)
- Если страница собрана из нескольких источников — перечислить все

### Code Blocks

Use fenced code blocks with language:

```yaml
name: Deploy to production
on:
  push:
    branches: [main]
```

## Content Focus

База знаний фокусируется на:
- **Сервисы для бизнеса** — CRM, ERP, финансовые инструменты, аналитика, маркетинг
- **Образ жизни** — продуктивность, саморазвитие, здоровье, умный дом, досуг
- **AI-инструменты** — LLM, генерация контента, AI-агенты, AI для кода

- **IT-инструменты** — разработка, DevOps, безопасность, хостинг, CI/CD, мониторинг

Каждая страница должна содержать:
1. Что это за сервис/инструмент
2. Ключевые возможности
3. Цены и тарифы (если применимо)
4. Сравнение с аналогами
5. Практические сценарии использования
