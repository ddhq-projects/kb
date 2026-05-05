---
title: "Лог операций"
description: "Хронологический журнал всех операций в базе знаний DDPA"
---

## 2026-05-05

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
