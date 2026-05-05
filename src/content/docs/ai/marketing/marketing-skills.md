---
title: "Маркетинговые Agent Skills"
description: "Экосистема Agent Skills для маркетинга: coreyhaines31/marketingskills, kostja94/marketing-skills, Microsoft Agent Framework, multi-agent маркетинг — репозитории, категории, сравнение"
---

## Обзор экосистемы

Вокруг MARKETING.md сформировалась экосистема **маркетинговых Agent Skills** — модульных пакетов знаний, которые AI-агенты загружают для выполнения конкретных маркетинговых задач. Все они используют концепцию «project context file» как единый источник истины — аналог MARKETING.md.

## coreyhaines31/marketingskills

**URL:** [github.com/coreyhaines31/marketingskills](https://github.com/coreyhaines31/marketingskills)
**⭐ 7.5k+** | Автор: Corey Haines (Conversion Factory, Swipe Files)

Самый популярный репозиторий маркетинговых скиллов. Ориентирован на технических маркетологов и фаундеров.

**Совместимость:** Claude Code, OpenAI Codex, Cursor, Windsurf, Agent Skills spec.

### Фундамент

`product-marketing-context` — базовый скилл, который все остальные читают первым. Это аналог MARKETING.md: описывает продукт, аудиторию, позиционирование и голос бренда.

### Категории скиллов

| Категория | Скиллы |
|-----------|--------|
| **SEO & Content** | seo-audit, ai-seo, site-arch, programmatic-seo, schema, content-strategy, aso-audit |
| **CRO** | page-cro, signup-cro, onboard-cro, form-cro, popup-cro, paywall-cro |
| **Content & Copy** | copywriting, copy-editing, cold-email, email-sequence, social, video, image |
| **Paid & Measurement** | paid-ads, ad-creative, ab-test, analytics-tracking |
| **Growth & Retention** | referral, free-tool, churn-prevent, community, lead-magnet |
| **Sales & GTM** | revops, sales-enablement, launch, pricing, comp-alternatives, comp-profile |
| **Strategy** | mktg-ideas, mktg-psych, customer-research |

### Сопутствующий продукт

[Magister](https://magistermarketing.com) — автономный AI-агент, использующий эти скиллы как CMO (Chief Marketing Officer). Пример того, как agent skills превращаются в продукт.

---

## kostja94/marketing-skills

**URL:** [github.com/kostja94/marketing-skills](https://github.com/kostja94/marketing-skills)
**160+ скиллов** в 9 категориях.

Самый большой по количеству скиллов репозиторий. Максимально детальное покрытие маркетинговых задач.

**Совместимость:** Cursor, Claude Code, OpenClaw, Lovable, v0, Bolt.

**Установка:** `npx skills add kostja94/marketing-skills`

### Категории

| Категория | Покрытие |
|-----------|----------|
| **SEO** | Технический, on-page, контент, off-page, local, тактики |
| **Content** | Копирайтинг, видео, визуальный, перевод |
| **Paid Ads** | Стратегия + 12 платформ (Google, Meta, LinkedIn, TikTok и др.) |
| **Pages** | 40+ типов: brand, content, marketing, legal, utility |
| **Components** | Nav, breadcrumb, footer, hero, CTA, logo, testimonials |
| **Channels** | Affiliate, email, influencer, referral, directories, PR |
| **Platforms** | X, Reddit, LinkedIn, TikTok, YouTube, Medium, GitHub, Grokipedia |
| **Analytics** | Трафик, tracking, Search Console, AI traffic |
| **Strategies** | Launch, cold-start, indie-hacker, PMF, parasite-SEO |

### Ключевая идея

Навык `project-context.md` — аналог MARKETING.md, который все скиллы читают автоматически для кастомизации вывода. Это тот же принцип «единого источника истины».

---

## Microsoft Agent Framework — Agentic Marketing

**URL:** [github.com/microsoft/Agent-Framework-Samples](https://github.com/microsoft/Agent-Framework-Samples/tree/main/09.Cases/AgenticMarketingContentGen)

Демонстрация от Microsoft: автономная генерация маркетинговых материалов из product inputs через специализированных агентов. Пример enterprise-подхода к multi-agent маркетингу.

---

## Другие проекты

### Multi-Agent Marketing Course
**URL:** [github.com/The-Swarm-Corporation/Multi-Agent-Marketing-Course](https://github.com/The-Swarm-Corporation/Multi-Agent-Marketing-Course)

Обучающий курс по multi-agent маркетинговым системам — от теории до практической реализации.

### Marketing AI Agents (zachd1234)
**URL:** [github.com/zachd1234/Marketing-AI-Agents](https://github.com/zachd1234/Marketing-AI-Agents)

Набор AI-агентов для маркетинговых задач.

### Agency Agents (msitarzewski)
**URL:** [github.com/msitarzewski/agency-agents](https://github.com/msitarzewski/agency-agents)

Агенты для агентского маркетинга — специализированные workflow для маркетинговых агентств.

---

## Сравнение: MARKETING.md vs project-context

| Атрибут | MARKETING.md (benkohcc) | project-context.md (kostja94) | product-marketing-context (coreyhaines31) |
|---------|------------------------|-------------------------------|------------------------------------------|
| **Фокус** | Полный маркетинговый конфиг | Проектный контекст для скиллов | Продуктовый контекст для маркетинга |
| **Объём** | Core + 15 companion files | Один файл | Один skill-файл |
| **Структура** | YAML + prose, двухуровневая | Markdown | Markdown skill с frontmatter |
| **Масштаб** | Enterprise, multi-agent | Любой | Средний, для кодинг-агентов |
| **Companion files** | ✅ (BUDGET, CALENDAR, SAFETY...) | ❌ | ❌ (но есть related skills) |

---

## Agent Skills Spec

**URL:** [agentskills.io](https://agentskills.io)

Открытый стандарт для markdown-скиллов AI-агентов. Формат: markdown файлы с frontmatter (name, description) + step-by-step инструкции.

**Поддерживаемые платформы:** Cursor, Claude Code, OpenClaw, Gemini CLI, OpenCode, GitHub Copilot, VS Code, Amp, Goose, Letta, OpenHands, Firebender, Junie и другие.

---

## Ключевые тренды

1. **Marketing-as-Code** — переход от промптов к декларативным конфигам
2. **Multi-agent маркетинг** — специализация агентов (content, campaign, analytics, personalization)
3. **Composable agent architecture** — core + companion files, загружаемые по запросу
4. **Approved claims library** — структурное решение проблемы галлюцинаций в маркетинге
5. **Autonomy tiers** — машинно-читаемая модель human oversight
6. **Agent Skills ecosystem** — от ad-hoc промптов к стандартизированным markdown-скиллам
7. **50% компаний с GenAI** планируют piloting agentic AI в маркетинге

---

## Связанные страницы

- [Marketing as Code — автономный AI-маркетинг](./marketing-as-code.md) — парадигма автономных агентов в маркетинге
- [MARKETING.md — новый стандарт AI-маркетинга](./marketing-md.md) — что такое MARKETING.md и зачем он нужен
- [MARKETING.md — спецификация и архитектура](./marketing-md-standard.md) — двухуровневая архитектура и ключевые принципы
- [Agent Skills для AI](../skills/index.md) — общий обзор Agent Skills
- [SKILL.md — формат и спецификация](../skills/skill-md.md) — структура skill-файлов
- [Каталоги и репозитории скиллов](../skills/skills-directories.md) — где искать скиллы
- [AI для контента и маркетинга](../ai-content-marketing.md) — AI-инструменты для копирайтинга, SEO, соцсетей

## Материалы и источники

- [coreyhaines31/marketingskills (GitHub)](https://github.com/coreyhaines31/marketingskills)
- [kostja94/marketing-skills (GitHub)](https://github.com/kostja94/marketing-skills)
- [Agent Skills Spec (agentskills.io)](https://agentskills.io)
- [Microsoft Agent Framework — Agentic Marketing](https://github.com/microsoft/Agent-Framework-Samples/tree/main/09.Cases/AgenticMarketingContentGen)
- [Multi-Agent Marketing Course](https://github.com/The-Swarm-Corporation/Multi-Agent-Marketing-Course)
- [Marketing AI Agents (zachd1234)](https://github.com/zachd1234/Marketing-AI-Agents)
- [Agency Agents (msitarzewski)](https://github.com/msitarzewski/agency-agents)
