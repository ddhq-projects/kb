# Stitch + Claude Code: Practical Workflow for Consistent UI

> Источник: https://www.mindstudio.ai/blog/google-stitch-design-md-claude-code-consistent-ui/

## Проблема

AI coding agent забывает дизайн между промптами. Описал палитру → сгенерировал кнопку → попросил карточку → spacing, colors, font weights уже другие.

## Решение: stitch → design.md → claude code chain

### Step 1: Generate in Stitch
Описать UI: product type, visual tone, screens/components. Review и iterate.

### Step 2: Export design.md
Сохранить в корень проекта как `design.md`.

### Step 3: Configure CLAUDE.md

```markdown
# Project Context

## Design System
This project uses a design system defined in `design.md` at the project root.
Always refer to this file when generating or modifying any UI component.
- Use only colors, fonts, and spacing values defined in design.md.
- Do not invent new values or use defaults from any framework.
- Match component states (hover, focus, active, disabled) to the patterns in design.md.
```

### Step 4: Verify
Запросить Claude Code: «What primary color is defined in this project's design system?» → должен вернуть точный hex.

### Step 5: Generate Components
- «Build a primary button component using the design system in design.md.»
- «Create a pricing card component, following the spacing and typography in design.md.»

### Step 6: Review & Correct
Проверить через DevTools. Если что-то не так: «The button background doesn't match the primary color in design.md. Fix it using the exact hex value.»

## Tips

1. **Явно упоминать design system в промптах** — держит внимание модели
2. **Перевести в tailwind.config.js** — второй enforcement layer
3. **Периодический аудит**: «Review components for consistency with design.md»
4. **Версионировать** — коммитить design.md как код

## Common Mistakes

- Не коммитить design.md → другие разработчики/сессии без него
- Забывать обновить CLAUDE.md при смене стека
- Полагаться что Claude Code не «дрейфует» — review нужен
- Экспортировать из Stitch до полной проработки дизайна
- Указывать на design.md без инструкций КАК его использовать — нужно быть explicit: «always use these values, never deviate»

## Кросс-платформенность

design.md работает с любым AI coding tool: Cursor, Aider, GitHub Copilot Workspace, LangChain, CrewAI. Не только Claude Code.

## Для мобильной разработки

Концепция переносится, но Google Stitch фокусируется на web UI. Для React Native нужно вручную добавить mobile-специфичные паттерны (safe areas, touch targets, platform navigation).

## Бонус: почему design.md в корне

Claude Code загружает CLAUDE.md при старте каждой сессии. design.md в корне → Claude Code найдёт его из любого подкаталога.
