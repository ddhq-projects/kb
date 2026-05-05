# DESIGN.md — Deep Dive: How AI Design Systems Work (MindStudio)

> Источник: https://www.mindstudio.ai/blog/what-is-google-stitch-design-md-file/

## Как Stitch использует design.md

Каждый промпт → Stitch передаёт промпт + полное содержимое design.md в Gemini. Gemini рассматривает design rules как constraints. Не угадывает цвета — применяет hex. Не подбирает border-radius — использует заданный.

## Auto-Generation vs Manual Editing

- Stitch может сгенерировать design.md из описания («our brand is minimalist, blue and white, uses Inter»)
- Можно обновлять при изменении дизайна
- Manual editing: перевести из Figma/Tailwind/style guide — straightforward, это plain markdown
- Git-friendly: commit history, pull requests для review changes

## Design.md vs Full Design System

| Design System | Design.md |
|---|---|
| «When use primary vs secondary?» | «What is primary button color?» |
| UX judgment + rationale | Discrete, specific values |
| Built for teams to consult | Distilled, executable subset for AI |
| Figma, Storybook, coded libs | Single markdown file |

**Design.md — это translation layer** между полной дизайн-системой и AI.

## Принцип: constrained AI > unconstrained AI

Полная свобода → полная вариативность. Закодированные правила → AI handles complex decisions (layout, hierarchy, responsive) в рамках brand.

Аналогия: Material Design token architecture — тот же принцип, но для AI-generated output.

## Почему именно Markdown

- JSON/YAML tokens (W3C Design Tokens CG) — machine-readable, NOT human-friendly
- Markdown — оба (machine + human)
- Designers и developers могут читать, редактировать, обсуждать без технического schema
- Transparent: видно что получает AI, можно дебажить и аудировать

## Pattern за пределами Stitch

- **Figma AI**: неявный контекст из component library
- **Adobe Firefly**: brand kit uploads
- **Framer AI**: reference context из существующего сайта
- **Stitch**: transparent, editable context file — уникальное преимущество

## Maintenance

### Когда обновлять
- Изменение brand colors/typography
- Новый product/sub-brand
- Изменение component styles
- Новые spacing/layout conventions

### Что делает хороший entry
- Specific values: «#1A73E8» not «a blue that feels trustworthy»
- Semantic names: Primary, Error, Surface
- Just the tokens — не философия

### Чего избегать
- Не включать ВСЁ из полной дизайн-системы (brevity > completeness)
- Не оставлять stale (устаревший файл = off-brand output)
- Не использовать ambiguous language

## Обобщение паттерна

Persistent brand context files работают не только для UI:
- Marketing copy
- Email templates
- Product descriptions
- Image generation prompts

→ любой AI workflow, нуждающийся в brand consistency.
