# DESIGN.md Explained — The Format Reshaping How AI Builds UI

> Источник: https://departmentofproduct.substack.com/p/designmd-explained-the-format-reshaping
> Издание: Department of Product (Knowledge Series)

## Ключевая идея

DESIGN.md — это plain-text файл, дающий AI-агентам структурированное, постоянное понимание дизайн-системы. Это «design counterpart to README.md».

## Две части файла

- **«Что» (tokens)** — для машин. AI не нужно знать что primary — это «Golden Retriever orange evoking joyful energy». Нужен hex `#855300`. Точный, однозначный, executable.
- **«Почему» (prose)** — для суждений. Когда ситуация не покрыта токенами (edge case, новый компонент, layout constraint), агенту нужен контекст: «The brand personality is optimistic, trustworthy, and active» или «never crowd elements».

## Почему это работает

Constrained AI produces more consistent output than unconstrained AI:
- Дай LLM полную свободу → полная вариативность
- Закодируй дизайн-систему в контекст-файл → правила + комплексные решения (layout, component hierarchy, responsive behavior, visual balance)

Это та же философия, что Material Design tokens — только для AI-generated output.

## Влияние на индустрию

Gokul Rajaram (VC, бывший Google/Meta product leader): «Design is the first AI casualty». Прогноз: крупные компании не будут заменять дизайн-роли, продукт-команды будут использовать централизованные дизайн-системы → AI-инструменты генерируют UI по запросу.

Множество пушбэков от дизайн-сообщества, но очевидно: дизайн-системы и markdown-файлы стремительно меняют традиционные инструменты.

## Кто уже использует

- Google Stitch (нативно, создатель формата)
- Anthropic Claude Design (поддерживает)
- Claude Code, Cursor, другие AI IDE (чтение из корня проекта)

## Как использовать с Claude Design

Claude Design автоматически создаёт design system из onboarding-данных (репозиторий, код). DESIGN.md — способ уточнить и зафиксировать правила.

## Комьюнити-ресурсы

- **awesome-design-md** (github.com/VoltAgent/awesome-design-md) — готовые файлы в стиле Claude, Vercel, Stripe, Linear, Airbnb
- **designmd.ai** — 100+ бесплатных дизайн-систем, фильтрация по тегам (dark, saas, minimal, fintech)
- **TypeUI** (typeui.sh) — 48+ design skill files, CLI для установки

## Как начать за 30 секунд

1. Скачать файл из awesome-design-md
2. Положить в корень проекта рядом с agents.md/claude.md
3. В промпте: «Build a pricing page and use the @DESIGN.md file for all styling decisions»

## Практические советы

### С Claude Code

1. `CLAUDE.md` в корне: «Always refer to `design.md` for all styling decisions. Never deviate.»
2. Перевести tokens в `tailwind.config.js` — второй слой защиты от дрифта
3. Периодический аудит: «Review all components for consistency with design.md»
4. Версионировать в git как код

### Общие правила

- Конкретные значения, не абстракции: «#1A73E8» а не «a blue that feels trustworthy»
- Семантические имена: Primary, Error, Surface — а не просто hex codes
- Brevity: только токены, не философия о ценностях бренда
- Обновлять при изменении цветов/типографики/компонентов
