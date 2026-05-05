---
title: "Agent Skills для AI"
description: "SKILL.md, каталоги и репозитории скиллов, официальные экосистемы — Agent Skills как стандарт модульных возможностей для AI-агентов"
---

Agent Skills — это модульные, переиспользуемые пакеты знаний и инструкций, которые AI-агенты (Claude Code, Copilot, Cursor, Codex) загружают по мере необходимости. Стандарт [agentskills.io](https://agentskills.io) от Anthropic (декабрь 2025) обеспечивает кроссплатформенную совместимость.

## Страницы раздела

- [SKILL.md — формат и спецификация](./skill-md.md) — структура файла, YAML frontmatter, progressive disclosure, best practices, безопасность
- [Каталоги и репозитории скиллов](./skills-directories.md) — skills.sh, agentskills.io, GitHub awesome-листы, ClawHub, топ паблишеров и скиллов
- [Официальные экосистемы скиллов](./official-skills.md) — Laravel Agent Skills, WordPress Agent Skills, OpenClaw skills: обзор, установка, сравнение

## Ключевые понятия

### Progressive Disclosure

Skills загружают информацию поэтапно, не занимая контекст без необходимости:

1. **Level 1 — Metadata** (~100 токенов): name + description, всегда в промпте
2. **Level 2 — Instructions** (<5K токенов): тело SKILL.md, загружается при совпадении задачи
3. **Level 3+ — Resources**: скрипты, reference-файлы, ассеты — по требованию

### Где работают

| Платформа | Pre-built skills | Custom skills | Формат |
|-----------|-----------------|---------------|--------|
| Claude.ai | ✅ (pptx, xlsx, docx, pdf) | ✅ (upload zip) | SKILL.md |
| Claude Code | ❌ | ✅ (filesystem) | SKILL.md |
| Claude API | ✅ (skill_id) | ✅ (/v1/skills) | SKILL.md |
| GitHub Copilot | ✅ | ✅ | SKILL.md |
| Cursor | ✅ | ✅ | SKILL.md |
| OpenAI Codex | ✅ | ✅ | SKILL.md |

### Установка из marketplace

```bash
# Основной способ — skills.sh
npx skills add <owner/repo>

# Мета-скилл для поиска других
npx skills add vercel-labs/skills/find-skills
```

## См. также

- [AGENTS.md и контекст-файлы для AI](../agents/index.md) — сравнение AGENTS.md, CLAUDE.md, SKILL.md и других форматов
- [AI для кода: Copilot, Cursor, Claude Code](../ai-for-code.md) — инструменты, которые используют Agent Skills
- [AI-агенты и автоматизация](../ai-agents.md) — платформы и фреймворки AI-агентов
