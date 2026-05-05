---
title: "MARKETING.md — новый стандарт AI-маркетинга"
description: "MARKETING.md — конфигурационный файл для AI-агентов, декларативно описывающий маркетинговую стратегию: brand voice, ICP, tone of voice, messaging, channels, campaign rules"
---

## Что такое MARKETING.md

**MARKETING.md** — это конфигурационный файл для AI-агентов, который описывает маркетинговую стратегию так, чтобы её можно было **исполнять автоматически**. Это маркетинговый аналог [DESIGN.md](../design/design-md.md) — файла дизайн-систем от Google.

Идея: вместо того чтобы каждый раз писать промпт «сделай лендинг в стиле X для аудитории Y, tone — дружелюбный, но экспертный», вы **один раз** задаёте правила в файле — и дальше все AI-агенты работают по ним.

Создатель — **Benjamin Koh**, Director of Product в PayPal, отвечает за Marketing AI и data strategy. Это не абстрактный теоретик, а человек, который строит martech внутри большой компании.

## Зачем это нужно

Раньше AI-маркетинг выглядел так:

> «Напиши мне лендинг под SaaS для SMB, tone — дружелюбный, но экспертный, ЦА — founders 5–50 человек, не используй buzzwords»

С MARKETING.md:

> «Прочитай MARKETING.md и сделай лендинг»

AI больше не нужно каждый раз «объяснять мир». У него есть **единый контекст проекта** — brand voice, целевая аудитория, tone of voice, messaging pillars, каналы, правила кампаний.

### Что меняется

| Подход | Модель |
|--------|--------|
| Prompt-based | Каждый раз описывать контекст заново |
| **Конфиг-файл** | Контекст описан один раз, все агенты читают его |

Это переход от **prompt-based работы → к declarative конфигам** — Marketing-as-Code.

## Структура MARKETING.md

Типичная структура включает следующие секции:

### Brand Voice
Как «звучит» бренд: стиль, характер, ключевые слова и запреты.
- Clear, direct, slightly opinionated
- Avoid buzzwords

### ICP (Ideal Customer Profile)
Целевая аудитория: кто клиент, размер компании, роль, боли.
- B2B SaaS founders
- Team size: 5–50

### Tone of Voice
Тональность коммуникации: как общаемся с аудиторией.
- Confident, not arrogant
- Practical > inspirational

### Messaging Pillars
Ключевые тезисы — что мы говорим о продукте.
- Save time with AI
- Reduce manual work
- Ship faster

### Channels
Где и как общаемся с аудиторией.
- Primary: Blog, LinkedIn, Email
- Secondary: X, Reddit, YouTube

### Campaign Rules
Ограничения и правила для кампаний.
- A/B test 3 variants minimum
- No discounts without approval
- All claims must be in approved library

### Autonomy Tiers
Уровни автономности AI-агентов:
- Content drafts: **full autonomy**
- Paid campaigns: **notify and wait**
- Brand partnerships: **human only**

## Пример MARKETING.md

```md
## Brand Voice
- Clear, direct, slightly opinionated
- Avoid buzzwords

## ICP
- B2B SaaS founders
- Team size: 5–50
- Technical background preferred

## Tone
- Confident, not arrogant
- Practical > inspirational
- Use data when possible

## Messaging Pillars
- Save time with AI
- Reduce manual work
- Ship faster

## Channels
- Primary: Blog, LinkedIn, Email
- Secondary: X, Reddit, YouTube
- No cold outreach without opt-in

## Campaign Rules
- A/B test 3 variants minimum
- No discounts without approval
- All claims must be in approved library

## Autonomy
- Content drafts: full autonomy
- Paid campaigns: notify and wait
- Brand partnerships: human only
```

С таким файлом любой AI-агент может сгенерировать консистентный лендинг, email-рассылку, рекламный креатив или блог-пост.

## Сценарии использования

### 1. Контент-производство
Лендинги, email-рассылки, рекламные тексты, блог-посты — всё генерируется в рамках одного tone of voice и позиционирования.

### 2. Кампании
Запуск performance-кампаний, A/B тесты, генерация креативов — AI не просто пишет тексты, а следует правилам кампаний.

### 3. Работа с AI-агентами
Cursor, Claude Code, Copilot, внутренние AI-агенты — все используют один и тот же конфиг.

### 4. Онбординг новых людей и моделей
Не нужно объяснять бренд с нуля — файл служит и документацией, и инструкцией.

## Особенности подхода

**Agent-first дизайн:** файл пишется не для людей, а для AI-агентов. Структура оптимизирована под машиночитаемость.

**Single source of truth:** один файл → все агенты → одинаковый результат. Нет дрифта стиля между разными агентами и задачами.

**Декларативность:** описывается *что есть* (бренд, аудитория, правила), а не *что сделать* (напиши лендинг, запусти кампанию).

**Компонуемость:** работает вместе с DESIGN.md (дизайн), AGENTS.md (правила для AI-агентов), CLAUDE.md (инструкции для Claude).

## Почему это тренд

Мы движемся к миру, где:
- AI — не инструмент, а **исполнитель**
- Промпты — временное решение
- Конфиги — новая инфраструктура

**MARKETING.md — это шаг к Marketing-as-Code** по аналогии с Infrastructure-as-Code и Design-as-Code (DESIGN.md).

### Что дальше

С высокой вероятностью:
- Появятся официальные стандарты (как у DESIGN.md)
- Инструменты начнут нативно поддерживать MARKETING.md
- Компании будут хранить конфиги в репозиториях рядом с кодом

## Связанные страницы

- [Marketing as Code — автономный AI-маркетинг](./marketing-as-code.md) — парадигма, для которой MARKETING.md служит конфигом
- [MARKETING.md — спецификация и архитектура](./marketing-md-standard.md) — двухуровневая структура, companion files, ключевые принципы
- [Маркетинговые Agent Skills](./marketing-skills.md) — экосистема скиллов для AI-маркетинга
- [DESIGN.md — формат дизайн-систем для AI](../design/design-md.md) — дизайновый аналог MARKETING.md
- [AGENTS.md и контекст-файлы для AI](../agents/index.md) — экосистема контекст-файлов
- [AI для контента и маркетинга](../ai-content-marketing.md) — AI-инструменты для копирайтинга и SEO

## Материалы и источники

- [MARKETING.md — Agentic Standard (benkohcc)](https://github.com/benkohcc/Marketing-MD-Agentic-Standard)
