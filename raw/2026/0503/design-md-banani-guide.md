# DESIGN.md — How to Use It (Banani Guide)

> Источник: https://www.banani.co/blog/design-md-guide
> Автор: Vlad Solomakha (Banani AI)

## Что такое Design.md

Markdown-файл со всеми визуальными правилами, которые AI coding agents используют для генерации согласованного UI. Вместо «make it look modern and clean» → файл с точными цветами, шрифтами, spacing.

## Что внутри

- **Colors**: Primary/neutral палитры, semantic colors (success, warning, error) с hex и usage guidance
- **Typography**: Font families, size scale, weights, line heights
- **Spacing**: Base unit (4px/8px), scale values
- **Components**: Buttons, inputs, cards — border radius, border styles
- **Elevation**: Shadow values, depth cues

## Минимальный пример

```markdown
## Colors
- **Primary** (#1A73E8): Main brand color for buttons and links
- **Background** (#FFFFFF): Page background
- **Surface** (#F8F9FA): Cards and elevated surfaces
- **Text Primary** (#202124): Main text color

## Typography
- **Heading 1**: Inter, 32px, 700 weight
- **Body**: Inter, 16px, 400 weight

## Components
- **Buttons**: Primary filled (bg #1A73E8, white text, 8px radius)
- **Cards**: White bg, 1px solid #E8EAED border, 12px radius
```

## Ресурсы с готовыми файлами

### awesome-design-md
github.com/VoltAgent/awesome-design-md — файлы в стиле:
- Claude: Warm terracotta accents, clean editorial
- Vercel: Black/white precision, Geist font
- Stripe: Signature purple gradients, elegant typography
- Linear: Ultra-minimal, purple accents
- Airbnb: Warm coral, rounded UI

### DESIGNmd.ai
designmd.ai — 100+ бесплатных дизайн-систем, фильтры: dark, saas, minimal, fintech

## Как использовать

### Manual
1. Скачать/cоздать DESIGN.md
2. Положить в корень проекта (рядом с agents.md/claude.md)
3. Промпт агенту: «Build a pricing page and use the @DESIGN.md file»

### Banani AI
Автоматически генерирует и обновляет DESIGN.md при создании дизайна. MCP-сервер для синхронизации с coding agents.

## Design.md vs Full Design System

Design.md ≠ design system. Это **token-level subset** — только то, что AI может применить механически. Ответляет на «What is our primary button color?», а не на «When should we use primary vs secondary button?».

## История формата

- Vibe coding community начала экспериментировать с отдельными md-файлами для стиля
- Март 2026: Google добавил в Stitch как формат
- TypeUI создали design skill files ещё раньше (48 файлов)
- Google сделал первую стандартизацию: что и в каком порядке включать

## Бонус: решает главную проблему vibe coding

«Generic sloppy design styles» — дефолт всех coding agents. DESIGN.md за 30 секунд скачивания и один файл в корне — немедленное и очевидное улучшение консистентности UI.
