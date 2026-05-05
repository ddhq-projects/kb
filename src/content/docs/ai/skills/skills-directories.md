---
title: "Каталоги и репозитории Agent Skills"
description: "Обзор каталогов скиллов для AI-агентов: skills.sh, agentskills.io, GitHub awesome-листы, ClawHub — топ паблишеров, самые популярные скиллы, категории, как выбирать"
---

## Экосистема каталогов

К маю 2026 сформировалась полноценная экосистема для поиска, установки и публикации Agent Skills. Центральный хаб — **skills.sh** (от Vercel), дополненный GitHub awesome-листами, ClawHub и официальным стандартом agentskills.io.

## Skills.sh — главный marketplace

**URL:** [skills.sh](https://skills.sh)
**Установщик:** `npx skills add <owner/repo>`

Основная директория скиллов для AI-агентов. Тысячи community-contributed skills с единой командой установки. Поддерживает Claude Code, Codex, Cursor и другие совместимые агенты.

### Топ скиллов по установкам (2026)

| # | Skill | Publisher | Установок | Назначение |
|---|-------|-----------|-----------|------------|
| 1 | find-skills | vercel-labs/skills | 1.3M+ | Мета-скилл: поиск и установка других скиллов |
| 2 | vercel-react-best-practices | vercel-labs/agent-skills | 371K+ | React и Next.js best practices |
| 3 | frontend-design | anthropics/skills | 368K+ | Frontend-дизайн guidelines |
| 4 | microsoft-foundry | microsoft/azure-skills | 296K+ | Планирование Azure-инфраструктуры |
| 5 | web-design-guidelines | vercel-labs/agent-skills | 296K+ | Web-дизайн guidelines |

### Топ паблишеры

| Publisher | Скиллов | Всего установок | Направление |
|-----------|---------|----------------|-------------|
| microsoft/azure-skills | 19+ | 5.7M+ | Azure, cloud инфраструктура |
| larksuite/cli | 17 | 1.7M+ | Lark Suite, collaboration |
| xixu-me/skills | 9 | ~1M | Разное |
| vercel-labs/agent-skills | Multiple | 667K+ | Frontend, React, web |
| pbakaus/impeccable | 8 | 621K+ | Качество кода, стандарты |
| coreyhaines31/marketingskills | 9+ | 526K+ | Маркетинг, контент |
| inference-skills/skills | 4 | 391K+ | AI/ML inference |
| lllllllama/ai-paper-reproduction-skill | 3 | 291K+ | Воспроизведение AI-исследований |

## agentskills.io — открытый стандарт

**URL:** [agentskills.io](https://agentskills.io)
**Автор:** Anthropic (опубликован 18 декабря 2025)

Официальная спецификация Agent Skills как open standard. Определяет формат SKILL.md и гарантирует совместимость между Claude Code, Cursor, Codex и другими агентами. Не каталог как таковой, а спецификация, на которой построена экосистема.

## GitHub Awesome-листы

### VoltAgent/awesome-agent-skills

**1000+ agent skills** от официальных dev-команд и сообщества:
- Anthropic, Google Labs, Vercel, Stripe, Cloudflare, Netlify
- Community builders
- Самый полный индекс в экосистеме

### alirezarezvani/claude-skills

**232+ Claude Code skills** и agent plugins — крупнейший каталог конкретных Claude-скиллов. Категории:
- Development & Code Tools
- Data & Analysis
- Writing & Research
- Learning & Knowledge
- Media & Content
- Collaboration
- Security
- Utilities

### ComposioHQ/awesome-claude-skills

Кураторский список Claude Skills, ресурсов и инструментов. Ориентирован на практическое применение.

### BehiSecc/awesome-claude-skills

Организован по категориям применения:
- Code review automation
- Git worktrees
- AWS CDK practices
- TDD
- File organization
- Invoice processing
- Skill creation templates

### caramaschiHG/awesome-ai-agents-2026

~400 звёзд, 340+ инструментов. Более широкий фокус — не только скиллы:
- Coding agents
- Agent frameworks
- MCP protocols
- Agent platforms

## ClawHub — реестр OpenClaw

**URL:** [clawhub.ai](https://clawhub.ai)

Встроенный реестр скиллов для экосистемы OpenClaw:
- **5,700+ community skills**
- Календарь, code review, веб-поиск, безопасность
- Автоматическая фильтрация по платформе и доступным инструментам

## Категории скиллов

### Development
- React/Next.js best practices (Vercel)
- API endpoint creation
- Code review automation
- TDD workflows
- Git workflows
- MCP server generation

### DevOps & Cloud
- AWS CDK
- Azure infrastructure (microsoft/azure-skills — 5.7M установок)
- Deployment workflows
- Docker/Kubernetes

### Frontend & Design
- Frontend design guidelines (Anthropic, 368K+)
- Web design guidelines (Vercel, 296K+)
- UI component patterns
- Качество кода и стандарты (pbakaus/impeccable)

### Маркетинг
- Content creation
- SEO optimization
- Social media

### Data & Analysis
- Data processing
- Spreadsheet generation
- Chart creation
- PDF processing

### Research & Writing
- Web search
- Summarization
- Documentation generation

### AI & ML
- AI paper reproduction (291K+)
- Inference skills (391K+)
- Model evaluation

## Как выбирать скиллы

Для разных задач — разные источники:

| Задача | Что использовать |
|--------|-----------------|
| Разработка (React/Next.js) | vercel-labs/agent-skills |
| Azure/Cloud | microsoft/azure-skills (19+ skills) |
| Качество кода | pbakaus/impeccable |
| Маркетинг | coreyhaines31/marketingskills |
| Всё сразу | VoltAgent/awesome-agent-skills (1000+) |
| Поиск новых | `npx skills add vercel-labs/skills/find-skills` |

## Как опубликовать свой skill

1. **Создайте репозиторий на GitHub** с валидным SKILL.md
2. **Следуйте спецификации agentskills.io** — name, description, структура
3. **Скилл автоматически индексируется** в skills.sh при публикации
4. **Добавьте в awesome-листы** — PR в VoltAgent/awesome-agent-skills и другие
5. **Для OpenClaw** — зарегистрируйте в ClawHub

## Связанные ресурсы

- [skills.sh](https://skills.sh) — центральный marketplace
- [agentskills.io](https://agentskills.io) — официальная спецификация
- [ClawHub](https://clawhub.ai) — реестр OpenClaw (5,700+)
- [VoltAgent/awesome-agent-skills](https://github.com/VoltAgent/awesome-agent-skills) — 1000+ skills
- [alirezarezvani/claude-skills](https://github.com/alirezarezvani/claude-skills) — 232+ Claude Code skills

## Материалы и источники

- [skills.sh](https://skills.sh)
- [agentskills.io — Open Standard](https://agentskills.io)
- [VoltAgent/awesome-agent-skills (GitHub)](https://github.com/VoltAgent/awesome-agent-skills)
- [alirezarezvani/claude-skills (GitHub)](https://github.com/alirezarezvani/claude-skills)
- [ComposioHQ/awesome-claude-skills (GitHub)](https://github.com/ComposioHQ/awesome-claude-skills)
- [ClawHub — OpenClaw Skill Registry](https://clawhub.ai)
