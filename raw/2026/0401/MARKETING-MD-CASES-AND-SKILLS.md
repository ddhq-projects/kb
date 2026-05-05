# MARKETING.MD — Кейсы, примеры и связанные скиллы

## 1. Агентные маркетинговые скиллы (GitHub)

### coreyhaines31/marketingskills
- **URL:** https://github.com/coreyhaines31/marketingskills
- **Stars:** 7.5k+
- **Автор:** Corey Haines (Conversion Factory, Swipe Files)
- **Для кого:** технические маркетологи и фаундеры
- **Совместимость:** Claude Code, OpenAI Codex, Cursor, Windsurf, Agent Skills spec
- **Фундамент:** `product-marketing-context` skill — каждый другой skill читает его первым

**Категории скиллов:**
| Категория | Скиллы |
|-----------|--------|
| SEO & Content | seo-audit, ai-seo, site-arch, programmatic-seo, schema, content-strategy, aso-audit |
| CRO | page-cro, signup-cro, onboard-cro, form-cro, popup-cro, paywall-cro |
| Content & Copy | copywriting, copy-editing, cold-email, email-sequence, social, video, image |
| Paid & Measurement | paid-ads, ad-creative, ab-test, analytics-tracking |
| Growth & Retention | referral, free-tool, churn-prevent, community, lead-magnet |
| Sales & GTM | revops, sales-enablement, launch, pricing, comp-alternatives, comp-profile |
| Strategy | mktg-ideas, mktg-psych, customer-research |

**Сопутствующий продукт:** [Magister](https://magistermarketing.com) — автономный AI-агент, использующий эти скиллы как CMO.

### kostja94/marketing-skills
- **URL:** https://github.com/kostja94/marketing-skills
- **Stars:** активный, 160+ скиллов
- **Совместимость:** Cursor, Claude Code, OpenClaw, Lovable, v0, Bolt
- **Установка:** `npx skills add kostja94/marketing-skills`

**Категории (160+ скиллов в 9 категориях):**
- **SEO:** технический, on-page, контент, off-page, local, тактики
- **Content:** копирайтинг, видео, визуальный, перевод
- **Paid Ads:** стратегия + 12 платформ (Google, Meta, LinkedIn, TikTok и т.д.)
- **Pages:** 40+ типов (brand, content, marketing, legal, utility)
- **Components:** nav, breadcrumb, footer, hero, CTA, logo, testimonials
- **Channels:** affiliate, email, influencer, referral, directories, PR
- **Platforms:** X, Reddit, LinkedIn, TikTok, YouTube, Medium, GitHub, Grokipedia
- **Analytics:** трафик, tracking, Search Console, AI traffic
- **Strategies:** launch, cold-start, indie-hacker, PMF, parasite-seo

**Ключевая идея:** навык `project-context.md` — аналог MARKETING.MD, который скиллы читают автоматически для кастомизации вывода.

### Agent Skills Spec (agentskills.io)
- **URL:** https://agentskills.io
- **Описание:** открытый стандарт для markdown-скиллов AI-агентов
- **Поддерживаемые платформы:** Cursor, Claude Code, OpenClaw, Gemini CLI, OpenCode, GitHub Copilot, VS Code, Amp, Goose, Letta, OpenHands, Firebender, Junie и другие
- **Формат:** markdown файлы с frontmatter (name, description) + step-by-step инструкции

## 2. Microsoft Agent Framework — Agentic Marketing
- **URL:** https://github.com/microsoft/Agent-Framework-Samples/tree/main/09.Cases/AgenticMarketingContentGen
- Демонстрация автономной генерации маркетинговых материалов из product inputs через специализированных агентов

## 3. Multi-Agent Marketing Course
- **URL:** https://github.com/The-Swarm-Corporation/Multi-Agent-Marketing-Course
- Обучающий курс по multi-agent маркетинговым системам

## 4. Marketing AI Agents (zachd1234)
- **URL:** https://github.com/zachd1234/Marketing-AI-Agents
- Набор AI-агентов для маркетинговых задач

## 5. Agency Agents (msitarzewski)
- **URL:** https://github.com/msitarzewski/agency-agents
- Агенты для агентского маркетинга

## 6. MARKETING.MD vs project-context.md vs product-marketing-context

| Атрибут | MARKETING.MD (benkohcc) | project-context.md (kostja94) | product-marketing-context (coreyhaines31) |
|---------|------------------------|-------------------------------|------------------------------------------|
| Фокус | Полный маркетинговый конфиг | Проектный контекст для скиллов | Продуктовый контекст для маркетинга |
| Объём | Core + 15 companion files | Один файл | Один skill-файл |
| Структура | YAML + prose, двухуровневая | Markdown | Markdown skill с фронтматтер |
| Масштаб | Enterprise, multi-agent | Любой | Средний, для кодинг-агентов |
| Companion files | ✅ (BUDGET, CALENDAR, SAFETY...) | ❌ | ❌ (но есть related skills) |

## 7. Сопутствующие стандарты

### DESIGN.MD (Google Stitch)
- AI-native design tool от Google DeepMind
- Файл DESIGN.MD описывает визуальную идентичность в machine-readable формате
- YAML для design tokens (hex, font, spacing) + prose для rationale
- MARKETING.MD — маркетинговый аналог этой концепции

### AGENTS.md
- Общепринятый стандарт конфигурации AI-агентов
- Описывает роли, правила, tech stack, workflows
- MARKETING.MD работает вместе с AGENTS.md

### SOUL.md
- Конфигурация «личности» AI-агента
- MARKETING.MD комплементарен — определяет *что* делать, SOUL.md — *кто* это делает

## 8. Ключевые тренды (2025-2026)

1. **Marketing-as-Code** — переход от промптов к декларативным конфигам
2. **Multi-agent маркетинг** — специализация агентов (content, campaign, analytics, personalization)
3. **Composable agent architecture** — core + companion files, загружаемые по запросу
4. **Approved claims library** — структурное решение проблемы галлюцинаций в маркетинге
5. **Autonomy tiers** — машинно-читаемая модель human oversight
6. **Agent Skills ecosystem** — от ad-hoc промптов к стандартизированным markdown-скиллам
7. **50% компаний с GenAI** планируют piloting agentic AI в маркетинге

## 9. Пример: простой MARKETING.MD для SaaS

```markdown
## Brand Voice
- Clear, direct, slightly opinionated
- Avoid buzzwords

## ICP
- B2B SaaS founders
- Team size: 5–50

## Tone
- Confident, not arrogant
- Practical > inspirational

## Messaging Pillars
- Save time with AI
- Reduce manual work
- Ship faster

## Channels
- Primary: Blog, LinkedIn, Email
- Secondary: X, Reddit, YouTube

## Campaign Rules
- A/B test 3 variants minimum
- No discounts without approval
- All claims must be in approved library

## Autonomy
- Content drafts: full autonomy
- Paid campaigns: notify and wait
- Brand partnerships: human only
```
