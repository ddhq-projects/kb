---
title: "AI-маркетинг: MARKETING.md и агентные скиллы"
description: "Новый стандарт AI-маркетинга: MARKETING.md как декларативный конфиг, экосистема маркетинговых agent skills, Marketing-as-Code и multi-agent архитектура"
---

Раздел посвящён новому подходу к AI-маркетингу — переходу от ad-hoc промптов к **декларативным конфигурационным файлам** и **стандартизированным agent skills**.

## Страницы раздела

- [MARKETING.md — новый стандарт AI-маркетинга](./marketing-md.md) — что это, зачем нужно, структура, примеры, сценарии
- [MARKETING.md — спецификация и архитектура](./marketing-md-standard.md) — двухуровневая архитектура с companion-файлами, ключевые принципы, autonomy tiers
- [Маркетинговые Agent Skills](./marketing-skills.md) — экосистема скиллов: coreyhaines31, kostja94, Microsoft Agent Framework, сравнение с MARKETING.md

## Ключевые понятия

### MARKETING.md

**MARKETING.md** — конфигурационный файл для AI-агентов, описывающий маркетинговую стратегию в машиночитаемом виде. Создан Benjamin Koh (Director of Product, PayPal) как маркетинговый аналог DESIGN.md от Google.

Вместо того чтобы каждый раз писать «сделай лендинг в стиле X для аудитории Y», вы один раз описываете brand voice, ICP, tone, messaging pillars, channels и campaign rules — и все AI-агенты работают по единому стандарту.

**Двухуровневая архитектура:**
- **Core** (`MARKETING.md`) — компактный, читается каждым агентом
- **Companion files** (15 шт.) — `SAFETY.md`, `BUDGET.md`, `CAMPAIGNS.md`, `MESSAGING.md` и др. — загружаются по роли агента

### Marketing-as-Code

Переход от «попросить AI» к «настроить систему, которая работает сама». Конфигурация отделяется от логики, версионируется в Git, проверяется при code review.

### Agent Skills для маркетинга

Два крупнейших репозитория:
- **coreyhaines31/marketingskills** (7.5k+ ⭐) — 50+ скиллов от Corey Haines (Conversion Factory)
- **kostja94/marketing-skills** (160+ скиллов) — 9 категорий, совместимость с Cursor, Claude Code, OpenClaw

Оба используют `project-context` файл как аналог MARKETING.md — единый источник истины для всех скиллов.

## См. также

- [DESIGN.md — формат дизайн-систем для AI](../design/design-md.md) — дизайновый аналог MARKETING.md от Google
- [AGENTS.md и контекст-файлы для AI](../agents/index.md) — экосистема контекст-файлов
- [Agent Skills для AI](../skills/index.md) — общий обзор Agent Skills
- [AI для контента и маркетинга](../ai-content-marketing.md) — AI-инструменты для копирайтинга, SEO, соцсетей
