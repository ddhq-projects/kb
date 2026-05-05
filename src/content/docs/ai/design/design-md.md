---
title: "DESIGN.md — формат дизайн-систем для AI-агентов"
description: "Что такое DESIGN.md, структура файла, YAML-токены и Markdown-правила, экосистема, готовые файлы и инструменты"
---

## Что такое DESIGN.md

**DESIGN.md** — это open-source формат (Apache-2.0) от Google Labs, представляющий дизайн-систему в одном Markdown-файле. Это «design counterpart to README.md» — файл, который AI-агенты (Claude Code, Cursor, Copilot, Codex) читают из корня проекта и используют для генерации согласованного UI.

Проблема, которую решает формат: AI coding agents генерируют «generic sloppy design styles» — дефолтные, безликие интерфейсы с дрифтом стилей между промптами. DESIGN.md даёт агенту **точные, однозначные правила** — hex-цвета, шрифты, отступы, скругления — и контекст для суждений в нестандартных ситуациях.

## Две части файла

DESIGN.md состоит из двух логических частей, объединённых в одном файле:

### 1. YAML frontmatter — «что» (для машин)

Машиночитаемые design tokens — точные значения, без двусмысленности:

```yaml
---
name: Daylight Prestige
description: Clean, high-contrast design system for SaaS dashboards
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
  background: "#FFFFFF"
  surface: "#F5F5F5"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
  body:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: 400
    lineHeight: 1.5
spacing:
  xs: 4px
  sm: 8px
  md: 16px
  lg: 24px
  xl: 32px
rounded:
  sm: 4px
  md: 8px
  lg: 12px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "{spacing.sm} {spacing.lg}"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
---
```

**Типы токенов:**
- **Color** — `"#hex"` в SRGB
- **Dimension** — строка с суффиксом px/em/rem
- **Typography** — fontFamily, fontSize, fontWeight, lineHeight, letterSpacing
- **Token References** — синтаксис `{path.to.token}` для ссылок между токенами

### 2. Markdown body — «почему» (для суждений)

Человекочитаемые правила и контекст. Строгий порядок секций:

1. **Overview / Brand & Style** — целостное описание визуального стиля
2. **Colors** — палитры с описанием применения
3. **Typography** — стратегия типографики
4. **Layout & Spacing** — сетка и ритм
5. **Elevation & Depth** — визуальная иерархия
6. **Shapes** — язык форм и скруглений
7. **Components** — атомарные компоненты (Buttons, Chips, Lists, Inputs и т.д.)
8. **Do's and Don'ts** — практические гайдлайны и антипаттерны

Секции можно опускать, но порядок обязателен.

## Принцип работы

**Constrained AI produces more consistent output than unconstrained AI:**
- Дай LLM полную свободу → полная вариативность и дрифт
- Закодируй дизайн-систему в контекст-файл → AI соблюдает правила и принимает комплексные решения (layout, hierarchy, responsive behavior) в рамках brand

Это та же философия, что Material Design tokens — только для AI-generated output.

## DESIGN.md vs Full Design System

DESIGN.md — не полноценная дизайн-система. Это **translation layer** — token-level subset, ровно то, что AI может применить механически:

| Аспект | DESIGN.md | Design Tokens (JSON/YAML) | Full Design System |
|--------|-----------|---------------------------|-------------------|
| Формат | Markdown + YAML frontmatter | JSON/YAML | Figma, Storybook, coded libs |
| Читаемость | Человек + AI | Машина | Человек |
| Контекст | Токены + правила + rationale | Только значения | UX-суждения + rationale |
| Цель | AI-агенты в корне проекта | Кроссплатформенная синхронизация | Команды разработки |
| Отвечает на | «What is our primary button color?» | «What is the primary color?» | «When should we use primary vs secondary?» |

## CLI-инструменты от Google

```bash
# Валидация ссылок и WCAG AA контраста
npx @google/design.md lint DESIGN.md

# Сравнение версий
npx @google/design.md diff DESIGN-v1.md DESIGN-v2.md

# Экспорт в Tailwind
npx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json

# Экспорт в W3C DTCG
npx @google/design.md export --format dtcg DESIGN.md
```

## Экосистема

### Кто поддерживает DESIGN.md

- **Google Stitch** — нативная генерация и экспорт
- **Claude Design (Anthropic)** — автоматическое создание из onboarding-данных
- **Claude Code, Cursor, Windsurf** — чтение из корня проекта
- **OpenAI Codex** — контекст для генерации UI

### Ресурсы с готовыми файлами

- **[awesome-design-md](https://github.com/VoltAgent/awesome-design-md)** — готовые файлы в стиле: Claude (warm terracotta, editorial), Vercel (black/white, Geist), Stripe (purple gradients), Linear (ultra-minimal, purple), Airbnb (warm coral, rounded)
- **[designmd.ai](https://designmd.ai)** — 100+ бесплатных дизайн-систем с фильтрами: dark, saas, minimal, fintech
- **[TypeUI](https://typeui.sh)** — 48+ design skill файлов, CLI для установки: `npx typeui.sh pull [name]`

## Практическое применение

### Минимальный старт за 30 секунд

1. Скачать готовый файл из awesome-design-md или designmd.ai
2. Положить в корень проекта как `design.md` (рядом с `CLAUDE.md` / `AGENTS.md`)
3. В промпте агенту: «Build a pricing page and use the @DESIGN.md file for all styling decisions»

### С Claude Code

1. В `CLAUDE.md` добавить: «Always refer to `design.md` for all styling decisions. Never deviate.»
2. Перевести токены в `tailwind.config.js` — второй слой защиты от дрифта
3. Периодический аудит: «Review all components for consistency with design.md»
4. Версионировать в git как код

### Общие правила

- **Конкретные значения**, не абстракции: `#1A73E8`, а не «a blue that feels trustworthy»
- **Семантические имена**: Primary, Error, Surface — а не просто hex codes
- **Краткость**: только токены и правила, не философия о ценностях бренда
- **Обновлять** при изменении цветов, типографики, компонентов

## См. также

- [Design as Code — дизайн-токены и архитектура](./design-as-code.md) — upstream-парадигма: Design Tokens, W3C DTCG, Style Dictionary
- [MARKETING.md — новый стандарт AI-маркетинга](../marketing/marketing-md.md) — маркетинговый аналог DESIGN.md
- [AGENTS.md — формат инструкций для AI-агентов](../agents/agents-md.md) — как AGENTS.md дополняет DESIGN.md в проекте
- [Сравнение контекст-файлов](../agents/context-files-ecosystem.md) — DESIGN.md в экосистеме контекст-файлов
- [AI-дизайн: инструменты и форматы](./index.md) — индексная страница раздела

## Материалы и источники

- [DESIGN.md Specification (Google Labs)](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)
- [Department of Product: DESIGN.md Explained](https://departmentofproduct.substack.com/p/designmd-explained-the-format-reshaping)
- [TypeUI: The anatomy of DESIGN.md](https://www.typeui.sh/design-md)
- [Banani: How to Use DESIGN.md](https://www.banani.co/blog/design-md-guide)
- [awesome-design-md](https://github.com/VoltAgent/awesome-design-md)
- [designmd.ai](https://designmd.ai)
