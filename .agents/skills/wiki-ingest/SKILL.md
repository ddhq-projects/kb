---
name: wiki-ingest
description: Use when adding a new source (file or URL) into the DDPA Knowledge Base with synthesis, cross-linking, index updates, and log bookkeeping.
---

# Wiki Ingest

Compile a new source into the persistent wiki. **База знаний сфокусирована на сервисах для бизнеса и личной продуктивности.**

## Pre-condition

0. **⚠️ Всегда `summarize` для URL:** `summarize "URL" --extract --format md`. Не используй `web_fetch` или `browser`.
1. Read `src/content/docs/index.md` first.
2. Read related existing pages before writing.
3. Confirm source location:
   - **Local:** `raw/YYYY/MMDD/filename.{md,pdf}` — date-organized, immutable
   - **URL:** fetch with `summarize "URL" --extract --format md` (primary), fallback to `web_fetch`
4. If source is a URL, extract and save it to `raw/YYYY/MMDD/` (using current date), then ingest from that local copy.

## Process

1. Read the source fully.
2. Present key takeaways to user before writing:
- 3-5 main points.
- What to emphasize/de-emphasize.
- Potential contradictions with existing pages.
3. Create or update relevant pages in the correct category folder.
4. Add or update cross-references in both directions.
5. Update `src/content/docs/index.md` entries.
6. Append `src/content/docs/log.md`:
   - `## [YYYY-MM-DD] ingest | <source title>`
7. Report all touched files.

## Placement Heuristic

- CRM, маркетинг, продажи, поддержка клиентов -> `business/clients/`
- Финансы, учёт, бюджетирование, финмодели -> `business/finance/`
- Методологии, автоматизация, коммуникации -> `business/processes/`
- SaaS-сервисы для бизнеса -> `business/processes/saas/`
- Найм, онбординг, мотивация, HR -> `business/staff/`
- Продуктивность, таск-менеджмент -> `lifestyle/productivity/`
- Саморазвитие, образование, навыки -> `lifestyle/self-development/`
- Здоровье, фитнес, питание -> `lifestyle/health/`
- Умный дом, организация пространства -> `lifestyle/smart-home/`
- Досуг, хобби, путешествия -> `lifestyle/leisure/`
- AI-инструменты, LLM, AI-агенты -> `ai/`
- Dev-инструменты, хостинг, CI/CD -> `dev/`
If none fit, propose a new category before creating it.

## Качество контента

- **Что за сервис/инструмент** — назначение и позиционирование
- **Ключевые возможности** — что умеет, чем выделяется
- **Цены и тарифы** — если применимо
- **Сравнение с аналогами** — отличия от конкурентов
- **Практические сценарии** — как использовать в реальных задачах

## Quality Bar

- Wiki content in ru-RU.
- No copy-paste dumps from source; synthesize.
- Every new page has frontmatter (`title`, `description`).
- Do NOT start pages with an `# H1` heading; Starlight renders frontmatter `title` as H1. Start content from `##`.
- **«Материалы и источники» обязательны:** каждая страница заканчивается ссылкой на оригинальный URL. Внешние ссылки автоматически получают `target="_blank"` при сборке — в исходниках пиши обычный markdown: `[текст](https://...)`.
- **Ссылки всегда с `.md`:** все относительные ссылки на wiki-страницы пиши с расширением `.md` (напр. `[text](./page.md)`). Для index-файлов: `./category/index.md`. НИКОГДА не пиши без `.md` или с `/` в конце. Плагин `remarkStripMdLinks` сам уберёт расширения при сборке.
- Backlink pass is mandatory.

## Done Criteria

- Pages created/updated.
- Cross-links reconciled.
- `index.md` updated.
- `log.md` appended.
