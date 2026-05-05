# The anatomy of DESIGN.md and how it changes everything we know about design

> Источник: https://www.typeui.sh/design-md
> Автор: TypeUI (создатели Flowbite)

## TL;DR

DESIGN.md — это простой markdown-файл, описывающий дизайн-систему. Работает потому, что LLM-модели настолько хорошо обучены, что им нужен лишь небольшой «толчок» в правильном направлении. Вместо мегабайт JSON (как Figma), AI-интерпретация дизайн-систем работает лучше через хорошо написанный человекочитаемый markdown.

## Два формата: что было раньше

- **Google Stitch** создал DESIGN.md после запуска
- **TypeUI** создали «design skill files» ещё до Google — 48 файлов для обучения AI генерировать интерфейсы на основе style guide, accessibility standards и design systems

## Почему это меняет всё

До AI: дизайнеры строят дизайн-системы в Figma → разработчики конвертируют в код → теряется консистентность, тратятся токены.

С DESIGN.md: полностью делегируем создание дизайна и кода AI, с правильными инструкциями через blueprint-файлы. Координатор (человек) направляет AI, а не делает руками.

## Новый workflow

Идеальная ситуация: координатор имеет вкус к дизайну И знание production-ready разработки. Если нет — дизайнеры и разработчики работают с design skill files как source of truth.

## Интеграция с Figma и Penpot

- TypeUI создали плагины для Figma и Penpot, генерирующие design skill files из существующих дизайнов
- Figma использовала «катастрофическую стратегию» внедрения AI — не поддерживает skill files
- Но возможно в будущем: Figma/Penpot для обдумывания дизайна → синхронизация с skill files

## Ключевой принцип: less is more

С AI skills меньше информации = лучше результат. Слишком много деталей заставляет AI работать хуже.

## Полная структура DESIGN.md файла

```markdown
---
name: design-system-[brand-or-scope]
description: Creates implementation-ready design-system guidance with tokens, component behavior, and accessibility standards.
---

# [Design System Name]

## Mission
One paragraph describing the system objective and target product experience.

## Brand
- Product/brand: [name]
- Audience: [primary users]
- Product surface: [web app, marketing site, dashboard, mobile web]

## Style Foundations
- Visual style: [keywords]
- Typography scale: [token list]
- Color palette: [semantic tokens + values]
- Spacing scale: [token list]
- Radius/shadow/motion tokens: [if applicable]

## Accessibility
- Target: WCAG 2.2 AA
- Keyboard-first interactions required
- Focus-visible rules required
- Contrast constraints required

## Writing Tone
concise, confident, implementation-focused

## Rules: Do
- Use semantic tokens, not raw hex values in component guidance.
- Define all required states: default, hover, focus-visible, active, disabled, loading, error.
- Specify responsive behavior and edge-case handling.

## Rules: Don't
- Do not allow low-contrast text or hidden focus indicators.
- Do not introduce one-off spacing or typography exceptions.
- Do not use ambiguous labels or non-descriptive actions.

## Guideline Authoring Workflow
1. Restate design intent in one sentence.
2. Define foundations and tokens.
3. Define component anatomy, variants, and interactions.
4. Add accessibility acceptance criteria.
5. Add anti-patterns and migration notes.
6. End with QA checklist.

## Required Output Structure
- Context and goals
- Design tokens and foundations
- Component-level rules (anatomy, variants, states, responsive behavior)
- Accessibility requirements and testable acceptance criteria
- Content and tone standards with examples
- Anti-patterns and prohibited implementations
- QA checklist

## Component Rule Expectations
- Include keyboard, pointer, and touch behavior.
- Include spacing and typography token requirements.
- Include long-content, overflow, and empty-state handling.

## Quality Gates
- Every non-negotiable rule uses "must".
- Every recommendation uses "should".
- Every accessibility rule is testable in implementation.
- Prefer system consistency over local visual exceptions.
```

## TypeUI Design Skills

Коллекция из 48+ готовых design skill файлов. 27k+ пользователей скачали. Установка:

```bash
npx typeui.sh pull [name]
```

Или копируешь markdown-файл в проект → AI строит UI по нему.

## Вывод

DESIGN.md — это «design counterpart to README.md». Простота формата — его суперсила. Будущее Figma — в design skill files.
