# DESIGN.md — Official Specification (Google Labs)

> Источник: https://github.com/google-labs-code/design.md/blob/main/docs/spec.md
> Лицензия: Apache-2.0
> Версия: alpha

## Что это

DESIGN.md — self-contained, plain-text представление дизайн-системы. Определяет визуальную идентичность бренда и продукта для согласованного воспроизведения между разными AI-агентами и инструментами.

Содержит две части:
1. **YAML frontmatter** — машиночитаемые design tokens
2. **Markdown body** — человекочитаемые rationale и guidance

Токены — нормативные значения. Проза — контекст для применения.

## YAML Frontmatter Schema

```yaml
---
version: alpha          # optional
name: <string>          # required
description: <string>   # optional
colors:
  <token-name>: <Color>              # "#hex"
typography:
  <token-name>: <Typography>          # fontFamily, fontSize, fontWeight, lineHeight, letterSpacing, fontFeature, fontVariation
rounded:
  <scale-level>: <Dimension>          # px/em/rem
spacing:
  <scale-level>: <Dimension | number>
components:
  <component-name>:
    <token-name>: <string | token reference>
---
```

### Token References

```yaml
components:
  button-primary:
    backgroundColor: "{colors.primary-60}"
    textColor: "{colors.primary-20}"
    rounded: "{rounded.md}"
    padding: 12px
```

Синтаксис: `{path.to.token}` — всегда ссылается на примитивное значение, кроме components где можно ссылаться на composite (e.g. `{typography.label-md}`).

### Типы

- **Color**: `"#hex"` в SRGB
- **Dimension**: строка с суффиксом px/em/rem
- **Typography**: fontFamily (string), fontSize, fontWeight (number), lineHeight, letterSpacing, fontFeature, fontVariation

### Варианты компонентов

```yaml
components:
  button-primary:
    backgroundColor: "{colors.primary-60}"
  button-primary-hover:
    backgroundColor: "{colors.primary-70}"
  button-primary-active:
    backgroundColor: "{colors.primary-80}"
```

Свойства компонентов: backgroundColor, textColor, typography, rounded, padding, size, height, width.

## Markdown Body — Секции (строгий порядок)

1. **Overview** (также «Brand & Style») — holistic описание look & feel
2. **Colors** — палитры с описанием применения
3. **Typography** — стратегия типографики
4. **Layout** (также «Layout & Spacing») — сетка и ритм
5. **Elevation & Depth** — как передаётся визуальная иерархия
6. **Shapes** — язык форм и скруглений
7. **Components** — атомарные компоненты (Buttons, Chips, Lists, Tooltips, Checkboxes, Radio, Input fields)
8. **Do's and Don'ts** — практические гайдлайны и антипаттерны

Секции можно опускать, но порядок обязателен.

## Пример минимального файла

```yaml
---
name: Daylight Prestige
colors:
  primary: "#1A1C1E"
  secondary: "#6C7278"
  tertiary: "#B8422E"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 48px
    fontWeight: 600
    lineHeight: 1.1
    letterSpacing: -0.02em
---

## Colors
The palette is rooted in high-contrast neutrals and a single, evocative accent color.

- **Primary (#1A1C1E):** A deep ink used for headlines and core text.
- **Secondary (#6C7278):** A sophisticated slate for borders, captions, metadata.
- **Tertiary (#B8422E):** A vibrant earthy red for primary actions and critical highlights.
```

## Forward Compatibility

Когда AI встречает неизвестное:
- Неизвестная секция → сохранить, не ошибка
- Неизвестный color token → принять если валидное значение
- Неизвестный typography token → принять как валидный
- Неизвестный component property → принять с warning
- Дублирующая секция → ошибка, отклонить файл

## CLI инструменты

```bash
npx @google/design.md lint DESIGN.md        # валидация
npx @google/design.md diff v1.md v2.md      # сравнение
npx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
npx @google/design.md export --format dtcg DESIGN.md    # W3C DTCG
```
