# SKILL.md — Что это, как работает, спецификация

> Источники: Anthropic Engineering Blog, Claude Platform Docs, agentskills.io

## Что такое SKILL.md

**SKILL.md — стандартизированный формат файлов для определения «Agent Skills» — модульных, переиспользуемых возможностей, которые Claude (и совместимые агенты) автоматически вызывает при релевантности задачи.**

Запущен Anthropic в октябре 2025. К 2026 — тысячи community и official вариантов.

18 декабря 2025 Anthropic опубликовала [Agent Skills](https://agentskills.io/) как **open standard** для кроссплатформенной портативности.

## Ключевой принцип: Progressive Disclosure

Skills загружают информацию поэтапно, как onboarding guide для нового сотрудника:

1. **Level 1: Metadata** (always loaded, ~100 tokens) — name + description
2. **Level 2: Instructions** (when triggered, <5k tokens) — SKILL.md body
3. **Level 3+: Resources** (as needed, unlimited) — scripts, references, assets

Сколько бы файлов ни было в skill — они не потребляют контекст, пока не нужны.

## Структура директории

```
skill-name/
├── SKILL.md          # Metadata + instructions (обязательно)
├── scripts/          # Опционально: исполняемые скрипты
├── references/       # Опционально: документы (REFERENCE.md, FORMS.md)
├── assets/           # Опционально: шаблоны, ресурсы
└── ...               # Любые другие файлы
```

## Спецификация SKILL.md

### YAML Frontmatter (обязателен)

```yaml
---
name: your-skill-name          # Обязательно, 1-64 chars
description: Brief description # Обязательно, 1-1024 chars
license: MIT                   # Опционально
compatibility: Python 3.14+    # Опционально
metadata:                      # Опционально
  key: value
allowed-tools: Bash Read       # Опционально (experimental)
---
```

**Constraints для name:**
- Только lowercase letters, numbers, hyphens
- Без XML tags
- Без reserved words: «anthropic», «claude»
- Должен совпадать с именем директории

**Description — ключевой момент:**
- Включает ЧТО делает + КОГДА использовать (триггеры)
- Claude решает загружать skill чисто по LLM reasoning (не embeddings!)
- Будь «pushy» — counter under-triggering

### Markdown Body

```markdown
# PDF Processing

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

**Guidelines:**
- Step-by-step instructions
- Code examples
- Edge cases
- Reference files via relative paths
- <500 lines

## Как Claude использует Skills

1. **Startup**: System prompt включает metadata всех установленных skills (~100 tokens каждый)
2. **User request**: «Extract text from this PDF»
3. **Match**: Claude определяет релевантность через LLM reasoning (не embeddings/classifiers)
4. **Load**: `bash: read pdf-skill/SKILL.md` → Instructions загружены в контекст
5. **Navigate**: Если нужно — читает FORMS.md, REFERENCE.md и т.д.
6. **Execute**: При необходимости запускает scripts через bash (код скрипта НЕ попадает в контекст — только output)

## Где работают Skills

| Surface | Pre-built | Custom | Sharing |
|---------|-----------|--------|---------|
| Claude.ai | ✅ (pptx, xlsx, docx, pdf) | ✅ (upload zip) | Individual only |
| Claude API | ✅ (skill_id) | ✅ (/v1/skills endpoints) | Workspace-wide |
| Claude Code | ❌ | ✅ (filesystem-based) | Personal/project/.claude/skills/ |

### Runtime constraints

| Surface | Network | Packages |
|---------|---------|----------|
| Claude.ai | Varies | Varies |
| Claude API | ❌ No network | Pre-installed only |
| Claude Code | ✅ Full | Local install only |

## Pre-built Skills (Anthropic)

- **PowerPoint (pptx)** — create/edit/analyze presentations
- **Excel (xlsx)** — spreadsheets, charts, reports
- **Word (docx)** — create/edit documents
- **PDF (pdf)** — generate formatted PDFs
- **Claude API** — API reference for 8 languages (bundled with Claude Code)

## Best Practices

1. **Start with evaluation** — определи gaps в capabilities агента, потом строй skill
2. **Structure for scale** — при разрастании SKILL.md, разделяй на файлы (forms.md, reference.md)
3. **Think from Claude's perspective** — следи как Claude использует skill, итерируй
4. **Iterate with Claude** — проси Claude захватывать успешные подходы в skill
5. **Code > instructions** — для deterministic операций используй скрипты (не инструкции)
6. **Description matters** — Claude решает по name/description, будь конкретным

## Security

⚠️ Skills = software. Только trusted sources.
- Audit: читай все файлы в skill (скрипты, изображения, ресурсы)
- External URLs: fetched content может содержать malicious instructions
- Tool misuse: malicious skill может направить Claude к вредным действиям
- Data exposure: skills с доступом к sensitive data могут exfiltrate

## Установка

### Claude Code
```bash
# В Claude Code: Browse and install plugins → anthropic-agent-skills
# Или вручную:
mkdir -p ~/.claude/skills/my-skill/
# Создай SKILL.md в директории
```

### Skills.sh (marketplace)
```bash
npx skills add <owner/repo>
```

### Claude API
```bash
# POST /v1/skills (upload)
# Использование: skill_id в container parameter
```
