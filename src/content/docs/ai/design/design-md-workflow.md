---
title: "DESIGN.md — рабочий пайплайн"
description: "Практический workflow: генерация дизайн-системы в Google Stitch, экспорт в DESIGN.md, интеграция с Claude Code, аудит консистентности и версионирование"
---

## Проблема: AI-агент забывает дизайн

Типичный сценарий при vibe-coding: описал палитру → AI сгенерировал кнопку → попросил карточку → spacing, цвета, шрифты уже другие. AI coding agent не держит дизайн-контекст между промптами без внешнего «якоря».

## Решение: цепочка Stitch → DESIGN.md → AI-агент

### Шаг 1: Генерация в Google Stitch

Google Stitch (бесплатно, [stitch.withgoogle.com](https://stitch.withgoogle.com)) — AI-инструмент дизайна, который при каждом промпте передаёт содержимое DESIGN.md в Gemini как constraints.

1. Описать UI: тип продукта, визуальный тон, экраны и компоненты
2. Stitch генерирует high-fidelity дизайн
3. Итеративно доработать: «Make the buttons more rounded», «Switch to a darker sidebar»
4. Когда дизайн готов — экспортировать DESIGN.md

### Шаг 2: Экспорт DESIGN.md в корень проекта

Сохранить файл как `design.md` в корень репозитория. Claude Code, Cursor и другие AI IDE автоматически находят его из любого подкаталога.

### Шаг 3: Настройка CLAUDE.md

Добавить в `CLAUDE.md` (или `AGENTS.md`) инструкцию:

```markdown
## Design System
This project uses a design system defined in `design.md` at the project root.
Always refer to this file when generating or modifying any UI component.
- Use only colors, fonts, and spacing values defined in design.md.
- Do not invent new values or use defaults from any framework.
- Match component states (hover, focus, active, disabled) to the patterns in design.md.
```

### Шаг 4: Верификация

Перед началом работы проверить, что агент действительно читает файл:

> «What primary color is defined in this project's design system?»

Агент должен вернуть точный hex из файла. Если нет — файл не на том месте или не загружен в контекст.

### Шаг 5: Генерация компонентов

Формулировать промпты с явной привязкой к design system:

- «Build a primary button component using the design system in design.md.»
- «Create a pricing card component, following the spacing and typography in design.md.»
- «Add a navigation bar — use the surface color for background and primary for active links.»

### Шаг 6: Ревью и коррекция

После генерации проверить через DevTools. Если что-то не так:

> «The button background doesn't match the primary color in design.md. Fix it using the exact hex value.»

## Дополнительные приёмы

### Tailwind как второй слой защиты

Перевести токены из DESIGN.md в `tailwind.config.js`:

```bash
npx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json
```

Это создаёт второй enforcement layer — даже если агент отклонится от файла, Tailwind-классы будут использовать правильные значения.

### Периодический аудит консистентности

Раз в несколько сессий:

> «Review all components in this project for consistency with design.md. List any deviations in colors, spacing, typography, or component styles.»

### Версионирование

DESIGN.md — это код. Коммитить в git:

```bash
git add design.md
git commit -m "design: update primary color and button styles"
```

При ревью дизайн-изменений — pull request с diff-ом:

```bash
npx @google/design.md diff design-v1.md design-v2.md
```

## Частые ошибки

- **Не коммитить DESIGN.md** — другие разработчики и AI-сессии работают без него
- **Забыть обновить CLAUDE.md** при смене стека или структуры
- **Полагаться, что агент не дрейфует** — ручной ревью и аудит обязателен
- **Экспортировать из Stitch до полной проработки** — incomplete design = inconsistent UI
- **Указывать на файл без инструкций** — нужно быть explicit: «always use these values, never deviate»
- **Забывать про mobile** — Google Stitch фокусируется на web UI, для React Native нужно вручную добавить mobile-специфичные паттерны (safe areas, touch targets)

## Когда обновлять DESIGN.md

- Изменение brand-цветов или типографики
- Новый продукт или sub-brand
- Изменение стилей компонентов
- Новые spacing/layout-конвенции
- Обнаружение дрифта при аудите

## Кросс-платформенность

DESIGN.md работает с любым AI coding tool: Claude Code, Cursor, Aider, GitHub Copilot Workspace, Windsurf, LangChain, CrewAI. Формат не привязан к конкретному агенту.

## Обобщение паттерна

Persistent brand context files работают не только для UI:
- Маркетинговые тексты
- Email-шаблоны
- Описания продуктов
- Промпты для генерации изображений

## См. также

- [Design as Code — дизайн-токены и архитектура](./design-as-code.md) — upstream-парадигма Design Tokens и W3C DTCG
- [DESIGN.md — формат дизайн-систем для AI](./design-md.md) — спецификация формата
- [AI-дизайн: инструменты и форматы](./index.md) — индексная страница раздела

→ любой AI workflow, нуждающийся в brand consistency.

## См. также

- [AGENTS.md — формат инструкций для AI-агентов](../agents/agents-md.md) — как AGENTS.md дополняет DESIGN.md и CLAUDE.md
- [Сравнение контекст-файлов](../agents/context-files-ecosystem.md) — полная экосистема AI-контекст-файлов
- [AI для кода: Copilot, Cursor, Claude Code](../ai-for-code.md) — инструменты, интегрируемые с DESIGN.md

## Материалы и источники

- [MindStudio: Stitch + Claude Code Workflow](https://www.mindstudio.ai/blog/google-stitch-design-md-claude-code-consistent-ui/)
- [MindStudio: AI Design Systems Deep Dive](https://www.mindstudio.ai/blog/what-is-google-stitch-design-md-file/)
- [DESIGN.md Spec (Google Labs)](https://github.com/google-labs-code/design.md/blob/main/docs/spec.md)
- [Banani: DESIGN.md Guide](https://www.banani.co/blog/design-md-guide)
