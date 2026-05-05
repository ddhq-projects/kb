---
title: "Лог операций"
description: "Хронологический журнал всех операций в базе знаний DDPA"
---

## 2026-05-05 ingest | raw/2026/0501 — Agent Skills: SKILL.md, каталоги, официальные экосистемы

### Созданные страницы

- **`ai/skills/index.md`**: индексная страница раздела «Agent Skills для AI» — progressive disclosure, где работают, установка
- **`ai/skills/skill-md.md`**: SKILL.md — формат и спецификация: YAML frontmatter, структура директории, progressive disclosure, best practices, безопасность, создание своих скиллов
- **`ai/skills/skills-directories.md`**: каталоги и репозитории — skills.sh (1.3M+ установок), agentskills.io, GitHub awesome-листы (VoltAgent 1000+, alirezarezvani 232+), ClawHub (5,700+), топ паблишеров и категорий
- **`ai/skills/official-skills.md`**: официальные экосистемы — Laravel Agent Skills (3 official + 143 community), WordPress Agent Skills (16 official), OpenClaw skills (расширенные метаданные, gating, автоустановщик), сравнение

### Обновлённые страницы

- `index.md`: добавлен раздел «Agent Skills» с 4 ссылками
- `ai/agents/context-files-ecosystem.md`: добавлены cross-links на Agent Skills
- `ai/ai-for-code.md`: добавлен cross-link на Agent Skills
- `ai/ai-agents.md`: добавлен блок «См. также» со ссылкой на Agent Skills

### Источники

- `raw/2026/0501/skill-md-what-is-it.md` (Anthropic Engineering Blog, Claude Platform Docs, agentskills.io)
- `raw/2026/0501/skills-marketplaces-directory.md` (skills.sh, agentskills.io, GitHub)
- `raw/2026/0501/top-github-skills-repos.md` (VoltAgent, alirezarezvani, ComposioHQ, BehiSecc)
- `raw/2026/0501/official-skills-laravel-wordpress.md` (Laravel Agent Skills, WordPress Agent Skills)
- `raw/2026/0501/openclaw-skills-overview.md` (OpenClaw docs, ClawHub)

## 2026-05-05 ingest | raw/2026/0502 — AGENTS.md и экосистема контекст-файлов для AI

### Созданные страницы

- **`ai/agents/index.md`**: индексная страница раздела «AI Agents и контекст-файлы»
- **`ai/agents/agents-md.md`**: AGENTS.md — формат, механика автодисковери, иерархия в монорепозиториях, 6 ключевых секций, best practices, влияние на качество (снижение багов 35-55%), FAQ
- **`ai/agents/context-files-ecosystem.md`**: сравнительная таблица AGENTS.md vs CLAUDE.md vs SKILL.md vs .cursorrules vs DESIGN.md, слоистая архитектура, паттерны совместимости, 30+ поддерживающих инструментов

### Обновлённые страницы

- `index.md`: добавлен раздел «AI Agents и контекст-файлы» с 3 ссылками
- `ai/ai-for-code.md`: добавлены cross-links на agents/agents-md.md и agents/context-files-ecosystem.md
- `ai/ai-agents.md`: добавлен блок «См. также» со ссылками на agents/
- `ai/design/design-md.md`: добавлен блок «См. также» со ссылками на agents/

### Источники

- `raw/2026/0502/agents-md-what-is-it.md` (AGENTS.md spec, OpenAI Codex Docs, GitHub Blog, InfoQ)
- `raw/2026/0502/agents-md-ecosystem-comparison.md` (agents.md, Augment Code, Agensi, Claude Platform Docs)
- `raw/2026/0502/agents-md-tools-ecosystem.md` (сводный обзор экосистемы, AAIF, 18 инструментов)

## 2026-05-05 ingest | raw/2026/0503 — AI-дизайн: DESIGN.md и обзор инструментов

### Созданные страницы

- **`ai/design/index.md`**: индексная страница раздела AI-дизайн
- **`ai/design/design-md.md`**: DESIGN.md — формат, структура (YAML frontmatter + Markdown body), типы токенов, CLI-инструменты, экосистема (awesome-design-md, designmd.ai, TypeUI), отличие от полноценной дизайн-системы
- **`ai/design/design-md-workflow.md`**: практический пайплайн — генерация в Google Stitch → экспорт DESIGN.md → интеграция с Claude Code/CLAUDE.md → аудит → версионирование, частые ошибки
- **`ai/design/ai-design-tools.md`**: обзор 7 AI-инструментов (Pencil.dev, Google Stitch 2.0, Claude Design, OpenAI Codex, v0.dev, Uizard, Figma AI) со сравнительной таблицей

### Обновлённые страницы

- `index.md`: добавлен раздел «AI-дизайн» с 4 ссылками на новые страницы

### Источники

- `raw/2026/0503/design-md-official-spec.md` (Google Labs, Apache-2.0 spec)
- `raw/2026/0503/design-md-explained-substack.md` (Department of Product)
- `raw/2026/0503/design-md-typeui-anatomy.md` (TypeUI/Flowbite)
- `raw/2026/0503/design-md-banani-guide.md` (Banani AI)
- `raw/2026/0503/design-md-claude-code-workflow.md` (MindStudio)
- `raw/2026/0503/design-md-mindstudio-deep-dive.md` (MindStudio)
- `raw/2026/0503/ai-design-tools-overview.md` (сводный обзор)

## 2026-05-05 ingest | raw/2026/0505 — трендовые сервисы 2025-2026 (мир + Россия)

### Созданные страницы

- **`ai/vertical-ai.md`**: вертикальные AI-решения — Harvey (legal), Sierra (conversational AI), Glean (enterprise search), Cognition AI/Devin, Dropzone AI (security), Featherless.ai

### Обновлённые страницы

- **`ai/ai-agents.md`**: добавлены Zapier Agents, Botpress, Arahi AI, Cognition AI (Devin) + источники
- **`ai/ai-for-code.md`**: обновлены данные Cursor (оценка $29B, $1B ARR, 500K+ разработчиков)
- **`ai/ai-assistants.md`**: актуализирована модель ChatGPT (GPT-5.4), добавлен ChatGPT Enterprise
- **`ai/ai-search.md`**: добавлены Glean (enterprise search) и ЖИЖИ (российский AI-поиск)
- **`lifestyle/productivity/task-management.md`**: добавлены Motion (AI-планирование) и ClickUp AI
- **`business/clients/crm-systems.md`**: добавлен Bitrix24 AI + раздел «ИИ в CRM-системах»

### Источники

- `raw/2026/0505/trendovye-servisy-mirovoj-rynok-2025-2026.md` (Wellows, CRN, Zapier, Omegatrove, Infoloop)
- `raw/2026/0505/trendovye-servisy-rossiya-2025-2026.md` (ICT.Moscow, Sostav, VC.ru, Plaan, Smink, Businessmens)

## 2026-05-05 ingest | raw/2026/0504 — кредиты, факторинг, лизинг, реструктуризация финансового раздела

### Реструктуризация

- **`banki-dlya-biznesa.md` переписан**: фокус на РКО, счетах, кассовых операциях, эквайринге и онлайн-кассах. Раздел кредитования вынесен в отдельную статью. Добавлена таблица сравнения тарифов РКО (7 банков), кассовые операции, интернет-эквайринг (5 сервисов), онлайн-кассы (5 моделей).
- **Создан `kredity-factoring-lizing.md`**: объединены кредиты (8 банков + 3 альтернативные платформы), кредитные карты для бизнеса (5 банков), факторинг (ТОП-10 компаний, прогноз ставок 2026), лизинг (ТОП-10 компаний, Ozon Лизинг, рынок 2025-2026).
- **Удалён `ekvairing-factoring-lizing.md`**: эквайринг и кассы → `banki-dlya-biznesa.md`, факторинг и лизинг → `kredity-factoring-lizing.md`.

### Обновлённые страницы

- `business/finance/index.md`: обновлены описания страниц, cross-links
- `index.md`: обновлены ссылки на финансовый раздел
- `business/processes/saas/finance-accounting.md`: обновлены cross-links

### Источники

- `raw/2026/0504/kredity-dlya-biznesa-2026.md` (Сравни.ру, Klerk.ru, VBR.ru, VC.ru, DTF)
- `raw/2026/0504/kreditnye-karty-dlya-biznesa-2026.md` (Сравни.ру, 1000bankov.ru, DTF)
- `raw/2026/0504/faktoring-dlya-biznesa-2026.md` (VC.ru, Factoring.ru, КП, VBR.ru)
- `raw/2026/0504/lizing-dlya-biznesa-2026.md` (DTF, All-Leasing.ru, Ассоциация лизинга, RAEX)
- `raw/2026/0504/raw-*.md` (5 raw-файлов — исходные тексты)

## 2026-05-05 ingest | raw/2025/1206 — найм, HRM, онбординг, LMS, WordPress-плагины

### Новые страницы

- Создан `business/staff/poisk-i-najm.md`: hh.ru (77 млн резюме, 56% рынка), SuperJob, Rabota.ru, нишевые (Хабр Карьера, Avito Работа, Работа России), ATS/AI (Garmony AI, Huntflow, Potok)
- Создан `business/staff/hrm-hris-systems.md`: Битрикс24 HRM, 1С:ЗУП, SimpleOne HRMS, Saby HRM — сравнение, цены, критерии выбора по размеру компании
- Создан `business/staff/onbording-i-adaptaciya.md`: Поток Адаптация, ТопФактор, Mirapolis, Motivity (AI), Эквио, Моя Команда, HRBOX — снижение текучести на 20–50%
- Создан `business/staff/korporativnoe-obuchenie-lms.md`: рейтинг CNewsMarket (Skillaz 755, Websoft HCM 710, Эквио 675), альтернативы (Teachbase, Unicraft, SohoLMS, GetCourse)
- Создан `business/staff/wordpress-lms-plugins.md`: LearnDash, LifterLMS, Tutor LMS — open-source/self-hosted альтернатива облачным LMS

### Обновлённые страницы

- `business/staff/index.md`: полностью переписан — добавлены все 5 страниц раздела, cross-links, ключевые темы
- `index.md`: раздел «Персонал» расширен с 1 до 5 ссылок на новые страницы

### Источники

- `raw/2025/1206/poisk-i-najm-sotrudnikov-2025.md` (Т—Ж, VC.ru, Soware, Add-One, Naimee AI)
- `raw/2025/1206/hrm-hris-upravlenie-personalom-2025.md` (ITGlobal, VC.ru, Computerra, Битрикс24, HiHub, Potok, РБК)
- `raw/2025/1206/onbording-i-adaptaciya-2025.md` (VC.ru, DTF, Naimee AI, Potok, РБК, ТопФактор)
- `raw/2025/1206/korporativnoe-obuchenie-lms-2025.md` (DTF, CNewsMarket, КП, LMS Service, LMS List, EdTechs, Soware)
- `raw/2025/1206/wordpress-lms-plugins-2025.md` (ProProfs, OddJar, BuddyBoss, aThemes, Spotlightr, eLearning Evolve, HeroThemes)

---

### Новые страницы

- Создан `business/finance/banki-dlya-biznesa.md`: РКО (Точка, Т-Банк, Альфа-Банк, Сбер, ВТБ), кредитование (Т-Банк до 30 млн, Альфа-Банк до 60 млн, ПСБ до 250 млн), рекордный рост корпоративных кредитов +2 трлн ₽ в октябре 2025
- Создан `business/finance/ekvairing-factoring-lizing.md`: интернет-эквайринг (Т-Банк, ЮKassa, CloudPayments), факторинг (Совкомбанк, ГПБ, SmartFact), лизинг (СберЛизинг >25% рынка, ВТБ, Газпромбанк), онлайн-кассы (Эвотор, АТОЛ, МодульКасса)
- Создан `business/processes/saas/finance-accounting.md`: бухгалтерские программы — Контур.Эльба (от 400 ₽/мес), Моё дело (от 1200 ₽/мес), 1С:БизнесСтарт (от 1300 ₽/мес), сравнение, рекомендации
- Создан `business/processes/saas/erp-crm-sistemy.md`: 1С:ERP (92% рейтинг), Bitrix24 (CoPilot AI), amoCRM (AmoAI), сводная таблица

### Обновлённые страницы

- `business/finance/index.md`: полностью переписан — добавлены страницы раздела, ключевые темы, cross-links
- `business/clients/crm-systems.md`: cross-link на новую `erp-crm-sistemy.md`
- `business/processes/saas/index.md`: добавлена ссылка на `erp-crm-sistemy.md`
- `index.md`: добавлены ссылки на все 4 новые страницы в разделы Финансы и SaaS

### Источники

- `raw/2025/1205/banki-dlya-biznesa-2025.md` (Forbes, DTF, Banki.ru, Сравни.ру, VC.ru, Noboring Finance)
- `raw/2025/1205/buhgalterskie-programmy-2025.md` (DTF, КП, FahimAI, TeamStorm, VC.ru, TenChat)
- `raw/2025/1205/erp-crm-sistemy-2025.md` (42Clouds, Хабр, Diasoft, ELMA365, CRM Rating, Computerra)
- `raw/2025/1205/finansovye-servisy-ekvajring-faktoring-lizing-2025.md` (DTF, Craftum, VC.ru, Сравни.ру, КП, KassaOFD, Banki.ru)

- Раздел `dev` переименован в `it` с подразделами: development (управление кодом, БД, dev-окружение), devops (хостинг, CI/CD, мониторинг), security (безопасность)
- Обновлены AGENTS.md, index.md, it/index.md — отражена новая структура
- Создана база знаний DDPA
- Инициализирована структура разделов: lifestyle (productivity, self-development, health, smart-home, leisure), ai, automation, communication, saas, business, it
- Раздел productivity перенесён в lifestyle/productivity
- Созданы страницы AI-раздела: ai-assistants.md, ai-agents.md, ai-media-generation.md, ai-content-marketing.md, ai-search.md, local-ai.md
- Обновлён ai/index.md и главный index.md — добавлены ссылки на новые AI-страницы
- Созданы подразделы lifestyle: self-development, health, smart-home, leisure
- Раздел business разделён на подразделы: clients, finance, processes, staff
- Разделы automation, communication, saas перенесены в business/processes/
- Настроен Astro + Starlight
- Добавлен GitHub Actions деплой

## 2026-05-05 ingest | raw/2025 — пакетный разбор исходников

### 1201 — AI, SaaS, продуктивность, nocode, маркетинг, лайфстайл

- Обновлён `ai/ai-assistants.md`: добавлен GigaChat (Сбер), обновлены источники
- Обновлён `ai/ai-media-generation.md`: добавлены Nano Banana, Grok Aurora, обновлены Veo и Kling AI
- Обновлён `business/processes/saas/crm-systems.md`: добавлены RetailCRM, ELMA365, Salesforce, Zoho CRM, OkoCRM, SBER CRM, расширена таблица сравнения, обновлены источники
- Создан `business/processes/saas/project-management.md`: YouGile, Мегаплан, Jira, Linear, Height, ClickUp, Asana, Trello, Notion Projects
- Обновлён `business/processes/saas/marketing-platforms.md`: SEO (Serpstat, Keys.So, Semrush, Ahrefs), email-маркетинг (UniSender, DashaMail, ActiveCampaign, Mailchimp), аналитика (Яндекс Метрика, Roistat, GA4, Mixpanel)
- Обновлён `business/processes/automation/no-code-platforms.md`: добавлен AI-модули Make, n8n, Web/App Builders (Bubble, Webflow, Framer), Enterprise (Power Automate, Workato), обновлены источники
- Обновлён `lifestyle/productivity/task-management.md`: добавлен Taskfire, обновлены источники
- Обновлён `lifestyle/productivity/notes-and-wiki.md`: добавлены OneNote, Google Keep, Apple Notes, Evernote
- Создан `lifestyle/productivity/personal-finance.md`: Дзен-мани, CoinKeeper, Wallet
- Создан `lifestyle/health/fitness-apps.md`: FitStars, Nike Training Club, MyFitnessPal

### 1202 — AI-сайты, AI-презентации

- Создан `ai/ai-website-builders.md`: Durable AI, Mixo, Framer, Wix AI, Webflow AI, Mottor, Tilda AI, PageGPT
- Создан `ai/ai-presentations.md`: Gamma, Beautiful.ai, Study AI, Кэмп, Autoppt, MagicSlides

### 1203 — Госуслуги → раздел gov

- Создан раздел `gov/` с индексной страницей
- Создан `gov/education-science.md`: запись в школу/сад, аттестат, поступление в вуз
- Создан `gov/taxes-finance.md`: 3-НДФЛ, налоговые вычеты, УСН, проверка задолженности
- Создан `gov/transport.md`: водительские права, регистрация авто, штрафы ГИБДД 2025
- Создан `gov/housing-utilities.md`: субсидии и льготы ЖКУ, оплата онлайн
- Создан `gov/citizenship-visas.md`: паспорта, ЗАГС, миграционный учёт, визы
- Создан `gov/healthcare-social.md`: полис ОМС, запись к врачу, пенсия, соцподдержка
- Создан `gov/law-enforcement.md`: штрафы ГИБДД, обжалование, суды
- Создан `gov/business.md`: регистрация ИП/ООО, лицензии, статус МСП

### Обновление каталогов

- Обновлён `index.md`: добавлены ссылки на все новые страницы и раздел gov
- Обновлён `ai/index.md`: добавлены ai-website-builders, ai-presentations

## 2026-05-05 ingest | raw/2025 — доразбор и улучшение качества

### Новые страницы

- Создан `business/processes/saas/seo-tools.md`: Serpstat, Keys.So, Топвизор, Rush Analytics, Semrush, Ahrefs, Surfer SEO — сравнение, цены, рекомендации
- Создан `business/processes/saas/email-marketing.md`: UniSender, DashaMail, NotiSend, Sendsay, Mailchimp, ActiveCampaign, Klaviyo, MailerLite, Omnisend
- Создан `business/processes/saas/marketing-analytics.md`: Яндекс Метрика, GA4, Amplitude, Mixpanel, Hotjar, Roistat, Calltouch, Metabase, Looker Studio

### Обновлённые страницы (cross-links + источники)

- `business/processes/saas/crm-systems.md`: добавлены cross-links на новые страницы, источники ITGlobal, Top10-CRM, Marmelab 2025-2026
- `business/processes/automation/no-code-platforms.md`: добавлены cross-links на AI-сайты, email-маркетинг
- `lifestyle/productivity/personal-finance.md`: добавлены источники 2025-2026 (Пенсия.про, PCMag, Kiplinger, NerdWallet, YieldFund), cross-links
- `lifestyle/health/fitness-apps.md`: добавлены источники (AppTweak, Garage Gym Reviews, PCMag), cross-links
- `ai/ai-website-builders.md`: добавлены cross-links на презентации и no-code
- `ai/ai-presentations.md`: добавлены cross-links на сайты и медиа

### Госуслуги — cross-links между страницами

- `gov/taxes-finance.md`: cross-links на бизнес и транспорт
- `gov/transport.md`: cross-links на штрафы и налоги
- `gov/healthcare-social.md`: cross-links на ЖКХ и образование
- `gov/business.md`: cross-links на налоги и CRM

### Инфраструктура

- Обновлён `index.md`: добавлены новые страницы SaaS-раздела, исправлена битая ссылка analytics-dashboards
- Сайдбар `astro.config.mjs` приведён в соответствие 5 разделам: Образ жизни, AI, Бизнес, Госуслуги, IT
