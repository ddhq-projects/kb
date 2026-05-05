---
title: "SKILL.md — формат и спецификация Agent Skills"
description: "SKILL.md — стандартизированный формат модульных навыков для AI-агентов: структура, YAML frontmatter, progressive disclosure, best practices, безопасность и создание своих скиллов"
---

## Что такое SKILL.md

**SKILL.md — стандартизированный формат файлов для определения Agent Skills** — модульных, переиспользуемых возможностей, которые AI-агенты автоматически загружают при релевантности задачи. Запущен Anthropic в октябре 2025, к началу 2026 — тысячи community и official вариантов.

18 декабря 2025 Anthropic опубликовала [Agent Skills](https://agentskills.io) как **open standard** для кроссплатформенной портативности. SKILL.md поддерживают Claude Code, Claude.ai, Claude API, GitHub Copilot, Cursor, OpenAI Codex и другие — всего 20+ агентов.

## Принцип Progressive Disclosure

Главная инновация Agent Skills — **прогрессивное раскрытие информации**. Skills загружают контент поэтапно, как onboarding guide для нового сотрудника:

1. **Level 1 — Metadata** (~100 токенов) — name + description. Всегда в промпте агента, минимальный оверхед
2. **Level 2 — Instructions** (<5K токенов) — тело SKILL.md. Загружается только когда задача совпадает с описанием
3. **Level 3+ — Resources** (без лимита) — скрипты, reference-файлы, ассеты. Читаются по необходимости

**Ключевое отличие от AGENTS.md и CLAUDE.md:** те загружаются всегда и потребляют контекст. Skills — только когда нужны.

## Структура директории скилла

```
skill-name/
├── SKILL.md          # Metadata + инструкции (обязательно)
├── scripts/          # Исполняемые скрипты (опционально)
├── references/       # Документы: REFERENCE.md, FORMS.md
├── assets/           # Шаблоны, изображения, ресурсы
└── ...               # Любые другие файлы
```

Сколько бы файлов ни было в директории — они не потребляют контекст, пока агент к ним не обратится.

## Спецификация SKILL.md

### YAML Frontmatter (обязателен)

```yaml
---
name: your-skill-name          # Обязательно, 1-64 символов
description: Brief description # Обязательно, 1-1024 символов
license: MIT                   # Опционально
compatibility: Python 3.14+    # Опционально
metadata:                      # Опционально, произвольные ключи
  key: value
allowed-tools: Bash Read       # Опционально (experimental)
---
```

**Правила для `name`:**
- Только lowercase-буквы, цифры, дефисы
- Без XML-тегов
- Без зарезервированных слов: `anthropic`, `claude`
- Должен совпадать с именем директории

**`description` — критически важное поле:**
- Агент решает, загружать ли skill, **чисто через LLM-рассуждение** (не эмбеддинги и не классификаторы)
- Включает: ЧТО делает + КОГДА использовать (триггеры)
- Будьте конкретны — недозагрузка скилла (under-triggering) хуже избыточной

### Markdown Body

```markdown
## Quick start
Use pdfplumber to extract text from PDFs:
\```python
import pdfplumber
with pdfplumber.open("document.pdf") as pdf:
    text = pdf.pages[0].extract_text()
\```

## When to use
- Working with PDF files
- User mentions PDFs, forms, or document extraction

## Instructions
1. Check if pdfplumber is available
2. Open the PDF and extract text
3. For form filling, see [FORMS.md](FORMS.md)

## Examples
[Конкретные примеры использования]

## Notes
[Edge cases, limitations]
```

**Guidelines для тела:**
- Пошаговые инструкции (не длинная проза)
- Code examples с конкретным синтаксисом
- Edge cases и ограничения
- Ссылки на другие файлы через относительные пути
- **<500 строк** — если разрастается, выноси в `references/`

## Где и как работают скиллы

| Среда | Pre-built skills | Custom skills | Сеть | Пакеты |
|-------|-----------------|---------------|------|--------|
| Claude.ai | ✅ (pptx, xlsx, docx, pdf) | ✅ (upload zip) | Варьируется | Варьируется |
| Claude API | ✅ (skill_id) | ✅ (/v1/skills endpoints) | ❌ Нет сети | Pre-installed |
| Claude Code | ❌ | ✅ (filesystem) | ✅ Полный | Локальная установка |

### Claude Code — ручная установка

```bash
mkdir -p ~/.claude/skills/my-skill/
# Создай SKILL.md в директории
# Claude Code автоматически подхватит при следующем запуске
```

### Claude API — программная загрузка

```bash
# POST /v1/skills — загрузка skill
# Использование: передача skill_id в container parameter
# Шаринг: workspace-wide для всей команды
```

### Marketplace — универсальная установка

```bash
npx skills add <owner/repo>
```

## Pre-built Skills от Anthropic

Anthropic предоставляет готовые скиллы для работы с документами:

- **PowerPoint (pptx)** — создание, редактирование, анализ презентаций
- **Excel (xlsx)** — таблицы, диаграммы, отчёты
- **Word (docx)** — создание и редактирование документов
- **PDF (pdf)** — генерация форматированных PDF
- **Claude API** — API-референс для 8 языков (bundled с Claude Code)

Для пользователей Claude.ai они доступны из коробки. Для API — через `skill_id`.

## Best Practices

### 1. Начните с оценки
Определите пробелы в возможностях агента. Что он систематически делает не так? Где ему не хватает контекста? Стройте skill под конкретную проблему.

### 2. Структурируйте для масштаба
Если SKILL.md превышает 200 строк — разделяйте:
- Выносите детальные reference-материалы в `references/`
- Формы и шаблоны — в `assets/`
- Исполняемую логику — в `scripts/`

### 3. Думайте с перспективы Claude
Следите, как агент реально использует skill. Если агент игнорирует инструкции — возможно, description недостаточно конкретен. Итерируйте.

### 4. Код важнее инструкций
Для детерминированных операций используйте скрипты, а не текстовые инструкции. Код скрипта **не попадает в контекст** — агент видит только его вывод (stdout/stderr). Экономия токенов и меньше ошибок интерпретации.

### 5. Description решает всё
Агент принимает решение о загрузке скилла исключительно по `name` и `description`. Будьте конкретны:
- ❌ Плохо: `description: Helps with code`
- ✅ Хорошо: `description: Validates PHP/Laravel code against PSR-12, reduces complexity, improves naming. Use when reviewing or writing Laravel code.`

## Безопасность

⚠️ **Skills — это программное обеспечение.** Устанавливайте только из доверенных источников.

- **Аудит:** читайте все файлы в skill перед установкой — скрипты, ресурсы, референсы
- **Внешние URL:** fetched-контент может содержать malicious-инструкции
- **Tool misuse:** вредоносный skill может направить агента к опасным действиям
- **Утечка данных:** skills с доступом к sensitive данным могут их exfiltrate

## Сравнение с другими форматами

| Аспект | SKILL.md | AGENTS.md | CLAUDE.md | .cursorrules |
|--------|----------|-----------|-----------|--------------|
| Загрузка | On-demand (по задаче) | Always | Always (session start) | Always |
| Формат | YAML FM + Markdown | Plain Markdown | Plain Markdown | Plain text |
| Фокус | Task skills, scripts | Build, test, conventions | Универсальные правила | Code style |
| Multi-file | Да (progressive disclosure) | Nested dirs | Parent/child | Glob patterns |
| Совместимость | 20+ агентов | 30+ инструментов | Claude Code | Cursor |

Подробнее — [Сравнение контекст-файлов для AI-агентов](../agents/context-files-ecosystem.md).

## Как создать свой первый skill

1. **Определите задачу:** что агент делает плохо? Где нужна экспертиза?
2. **Создайте директорию:** `mkdir -p ~/.claude/skills/my-skill/`
3. **Напишите SKILL.md:** YAML frontmatter с чётким description + Markdown body с инструкциями
4. **Добавьте примеры:** конкретные code snippets успешного выполнения задачи
5. **Тестируйте:** попросите агента выполнить задачу — загрузился ли skill? Помогло ли?
6. **Итерируйте:** уточняйте description и инструкции на основе реального использования
7. **Делитесь:** опубликуйте на GitHub — скиллы автоматически индексируются в skills.sh

## Материалы и источники

- [Agent Skills — Open Standard (agentskills.io)](https://agentskills.io)
- [Anthropic Engineering Blog — Agent Skills announcement](https://www.anthropic.com/engineering/agent-skills)
- [Claude Platform Docs — Skills](https://docs.anthropic.com/en/docs/agents-and-tools/skills)
