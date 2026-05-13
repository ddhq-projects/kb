---
title: "ISO/IEC 38500:2024 — корпоративное управление ИТ"
description: "ISO 38500:2024 для board/C-level: 12 принципов, модель EDM, IT Governance Committee, пошаговое внедрение, кейсы, KPI и российский контекст"
---

## Что это за стандарт

**ISO/IEC 38500:2024** — международный стандарт по **корпоративному управлению ИТ** (Governance of IT for the organization).

Он ориентирован на уровень руководящего органа (board, owners, C-level) и задаёт принципы принятия решений по ИТ, данным, рискам и ценности. Стандарт не предписывает конкретные процессы — он даёт управленческие ориентиры и разделяет governance (что делает руководящий орган) и management (как исполняют команды).

Актуальная версия — **2024**, заменившая версию 2015. Главное изменение: количество принципов выросло с 6 до **12** (взяты из ISO 37000:2021 — Governance of organizations), усилены акценты на stakeholder engagement, data-driven decisions, risk governance, этику и долгосрочную жизнеспособность.

## Ключевые возможности

- **Board-level рамка**: понятная ответственность руководства за ИТ-решения.
- **12 принципов (2024)**: расширенный набор управленческих ориентиров вместо прежних 6.
- **Модель EDM**: Evaluate, Direct, Monitor — цикл принятия и контроля решений.
- **Governance vs Management**: чёткое разделение стратегического надзора и операционного исполнения.
- **Фокус на ценности и рисках**: баланс инвестиций, устойчивости, соответствия и бизнес-результата.
- **Интеграция с экосистемой**: «зонтичная» модель над COBIT, ITIL, ISO 27001, NIST.

## 12 принципов ISO/IEC 38500:2024 (Clause 5)

Версия 2024 расширила набор принципов с 6 до 12, взяв их из ISO 37000:2021 (Governance of organizations):

| # | Принцип | Суть | Что это значит для ИТ |
|---|---------|------|----------------------|
| 1 | **Purpose** (Цель) | Организация имеет чётко определённую и коммуницируемую цель | ИТ-инициативы напрямую поддерживают миссию и ценности организации |
| 2 | **Value Generation** (Создание ценности) | Цели организации направлены на создание ценности | ИТ-инвестиции оцениваются через призму business value, а не только технологий |
| 3 | **Strategy** (Стратегия) | Руководство направляет стратегию для достижения целей | ИТ-стратегия интегрирована в бизнес-стратегию, тех. дорожная карта привязана к стратегическим темам |
| 4 | **Oversight** (Надзор) | Руководство отслеживает результативность организации | Политики, мониторинг compliance, аудит — на уровне совета директоров |
| 5 | **Accountability** (Подотчётность) | Руководство демонстрирует подотчётность за использование ИТ | Решения по ИТ принимают люди с надлежащими полномочиями и компетенциями |
| 6 | **Stakeholder Engagement** (Вовлечение стейкхолдеров) | Учёт потребностей и ожиданий всех заинтересованных сторон | Технологические решения проектируются с участием стейкхолдеров |
| 7 | **Leadership** (Лидерство) | Этичное и эффективное лидерство с ясным видением | Сильное лидерство в ИТ, согласованное с ценностями организации |
| 8 | **Data and Decisions** (Данные и решения) | Данные — ценный ресурс для принятия решений | Data governance, точность данных, защита от misuse, compliance с regulation |
| 9 | **Risk Governance** (Управление рисками) | Понимание и управление рисками использования ИТ | Фреймворк риск-менеджмента: кибербезопасность, compliance, emerging tech |
| 10 | **Social Responsibility** (Социальная ответственность) | Учёт влияния ИТ на общество | Data privacy, digital inclusion, environmental impact ИТ-инфраструктуры |
| 11 | **Viability and Performance Over Time** (Жизнеспособность) | Организация остаётся устойчивой и результативной в долгосрочной перспективе | Резильентность ИТ-систем, адаптивность, долгосрочное стратегическое планирование |
| 12 | **Ethical Behaviour** (Этичное поведение) | Этичное поведение во всей ИТ-деятельности | Уважение прав и приватности, compliance с законом, непричинение вреда |

### Сравнение: 6 принципов (2015) → 12 принципов (2024)

| Старые 6 (2015) | Новые 12 (2024) | Что изменилось |
|---|---|---|
| Responsibility | Accountability + Oversight | Разделено на два: подотчётность руководства и надзор |
| Strategy | Strategy + Purpose + Value Generation | Стратегия расширена целью и ценностью |
| Acquisition | *(включено в Value Generation и Risk Governance)* | Закупки теперь часть создания ценности и риск-менеджмента |
| Performance | Viability and Performance Over Time | Добавлен долгосрочный горизонт |
| Conformance | *(включено в Oversight и Ethical Behaviour)* | Compliance стал частью надзора и этики |
| Human Behavior | Stakeholder Engagement + Social Responsibility + Ethical Behaviour | «Человеческий фактор» развёрнут в три отдельных принципа |
| *(отсутствовал)* | Leadership | Новый принцип |
| *(отсутствовал)* | Data and Decisions | Новый принцип |
| *(отсутствовал)* | Risk Governance | Новый принцип |

## Модель EDM: Evaluate → Direct → Monitor

Цикл EDM — это практический «позвоночник» governance, структурирующий работу совета директоров и C-level:

| Фаза | Действия руководящего органа | Примеры артефактов |
|------|------------------------------|-------------------|
| **Evaluate** | Оценка стратегии, рисков, capabilities — proposals, sourcing models, архитектуры проверяются через призму 12 принципов | Decision brief (2-4 стр.), maturity assessment, бизнес-кейс |
| **Direct** | Установка политик, приоритетов, investment decisions; назначение ролей и decision rights; определение guardrails | Governance charter, RACI/RAPID-матрица, risk tiering criteria |
| **Monitor** | Отслеживание outcomes через dashboards (value, risk, performance, compliance); review exceptions; независимый assurance | KPI-дашборд, decision log, audit reports, breach reports |

### Практический ритм EDM

- **Ежемесячно**: операционные KPI, review exceptions, статус ключевых инициатив
- **Ежеквартально**: review governance effectiveness (cycle time, decision loops, benefits realisation)
- **Ежегодно**: пересмотр charter, decision rights, risk appetite; combined assurance (1st line testing, 2nd line monitoring, internal audit)

## Governance vs Management: где граница

| Governance (Board/C-level) | Management (Executives/Teams) |
|---|---|
| Задаёт направление | Проектирует и строит |
| Утверждает инвестиции | Управляет программами и платформами |
| Определяет политики и risk appetite | Эксплуатирует в рамках guardrails |
| Назначает accountable owners | Выполняет delivery |
| Запрашивает assurance | Предоставляет evidence |

**Антипаттерн 1**: Board погружается в детали delivery → микроменеджмент, размывание ответственности.
**Антипаттерн 2**: Management сбрасывает каждое решение «на governance» → paralysis, задержки.

## Когда стандарт особенно полезен

- Организация масштабируется и ИТ-решения влияют на стратегию бизнеса.
- Нужно повысить качество надзора за цифровыми инициативами.
- Требуется единый язык между бизнес-руководством и ИТ-функцией.
- Необходимо увязать ценность, риски, комплаенс и инвестиции в технологии.
- **Digital transformation, cloud migration, platform modernization** — нужна Board-level ясность по направлению, рискам и ценности.
- **Technology investments underperform** — проекты затягиваются, benefits не реализуются.
- **Risk/regulatory scrutiny растёт** — privacy, cybersecurity, resilience.
- **Decision rights размыты** — product, platform, security, risk, finance не могут договориться.

### Когда ISO 38500 НЕ подходит

- Как **operations manual** — он не скажет, как run incident response или build platforms.
- Как **control checklist** — используй ISO 27001 / NIST / COBIT для детальных контролей.
- Для **микро-решений** — governance резервируется для решений, влияющих на value, risk, architecture, sourcing.

## Пошаговый план внедрения

### 1. Определить scope, ambition и risk appetite
Сформулировать, зачем усиливаем IT governance. Пример: «Увеличить value realization на 20%; сократить high-severity incidents на 40%; ускорить risk-tiered change decisions на 30%». Зафиксировать risk appetite по availability, security/privacy, supplier concentration, financial exposure.

### 2. Создать Governance Charter и decision rights
Одностраничный charter: governance bodies (Board committee, investment council, architecture/risk forums), их решения и escalation paths. Для повторяющихся решений — RACI/RAPID:
- **R**esponsible (исполнитель)
- **A**ccountable (единый decider)
- **C**onsulted (с кем советуются)
- **I**nformed (кого информируют)

Правило: один decider на решение, time-boxed consultation.

### 3. Оценить текущее состояние по 12 принципам
Rapid maturity/health check: пройти по каждому из 12 принципов, выявить 4-6 gap'ов с наибольшим impact на value/risk.

### 4. Запустить EDM-ритм
- **Evaluate**: decision briefs (2-4 стр.) с options, criteria, risks, benefits.
- **Direct**: решения по стратегии, финансированию, политикам и стандартам.
- **Monitor**: dashboards, review breaches, independent assurance.
- **SLA**: Input — 3-5 рабочих дней, veto/Agree — 24-48 часов, escalation — 48 часов.

### 5. Интегрировать с операционными фреймворками
- **COBIT** → control objectives и assurance
- **ITIL/SRE** → service, reliability, incident/change management
- **NIST/ISO 27001** → security
- **ISO 22301** → business continuity
- **Portfolio management / Lean-Agile** → funding и delivery cadence

### 6. Определить KPI и reporting
Сбалансированный набор governance KPI/KRI:

| Категория | KPI |
|-----------|-----|
| **Value** | Benefits realized vs business case, time-to-value, NRR/uplift от digital initiatives |
| **Performance** | SLO attainment, change failure rate, MTTR, cost-to-serve |
| **Conformance/Risk** | Audit findings closed, policy-as-code coverage, privacy/security incidents, supplier concentration |
| **Human factors** | Critical skill coverage, change adoption, engagement, ethics/accessibility compliance |

Отчётность: monthly → executives, quarterly → Board.

### 7. Встроить в финансирование и подотчётность
Привязать investment approvals к governance criteria; release funds в траншах на основе evidence. Accountable owners отвечают в performance dialogues за value, risk и performance outcomes. Вести decision log.

### 8. Регулярный пересмотр
- **Ежеквартально**: review governance effectiveness
- **Ежегодно**: пересмотр charter, decision rights, risk appetite
- **Combined assurance**: валидация через 1st line testing, 2nd line monitoring, internal audit

## Кейс: Cloud & Platform Modernization в Regional Bank

**Контекст**: банк на 9 000 сотрудников, ускоренная cloud migration и platform modernization. Проекты slipping, change incidents растут, benefits tracking слабый, risk/compliance approvals тормозят delivery.

**Что сделали**:
1. **Charter & decision rights**: одностраничный governance charter, RAPID-матрица для повторяющихся решений (cloud service selection, data platform standards, release authorization by risk tier, third-party onboarding).
2. **Principles assessment**: выявлены gap'ы в Acquisition (lifecycle benefits), Performance (SLOs, change failure), Conformance.
3. **EDM cadence**: tiered approvals — low-risk changes автономны, medium — architecture review, high — investment council.
4. **Metrics**: SLO attainment, change failure rate, time-to-value, benefits realisation.

**Результаты**:
- **42% быстрее** decision cycles
- **36% меньше** incidents
- **30% выше** IT project success rate
- **100% compliance** с регуляторными требованиями

## IT Governance Committee Charter — структура

Шаблон устава комитета по ИТ-управлению (на основе ISO 38500):

| Секция | Содержание |
|--------|-----------|
| **Purpose** | Стратегический надзор за ИТ-инициативами, alignment с бизнес-целями, управление рисками, обеспечение value delivery |
| **Authority** | Утверждение ИТ-стратегии, бюджетов, политик; приоритизация проектов; мониторинг performance и compliance |
| **Membership** | Chair (CIO или CEO), постоянные члены (руководители finance, operations, risk), advisory experts |
| **Roles** | Определение ИТ-дорожных карт, portfolio management, risk monitoring, resource allocation, vendor oversight, KPI review |
| **Meetings** | Ежемесячно/ежеквартально; pre-published agendas, minutes, decision log |
| **Decision process** | RAPID-модель: Recommend → Agree → Perform → Input → Decide |
| **Review** | Ежегодный пересмотр membership; раз в 2 года — charter review |
| **Escalation** | 48 часов на эскалацию; narrow veto/Agree — 24-48 часов с policy citation |

## Интеграция ISO 38500 с другими стандартами

ISO 38500 работает как **«зонтичная» governance-модель**. Под ней — операционные фреймворки:

| Уровень | Стандарт | Роль |
|---------|----------|------|
| **Governance** | ISO/IEC 38500 | Стратегический надзор совета директоров |
| **Controls** | COBIT 2019 | Детальные control objectives и assurance |
| **Security** | ISO/IEC 27001 | ISMS, операционная безопасность |
| **Service** | ITIL 4, ISO/IEC 20000 | Service management и эксплуатация |
| **Risk** | ISO 31000 | Risk management framework |
| **Continuity** | ISO 22301 | Business continuity |
| **Delivery** | SAFe, Scrum, Agile | Методологии поставки |
| **Architecture** | TOGAF | Enterprise architecture |

## Российский контекст

В России стандарт введён как **ГОСТ Р ИСО/МЭК 38500-2017** (идентичен ISO/IEC 38500:2015). Версия 2024 пока не локализована.

**Особенности применения в РФ:**
- Стандарт применим для организаций любого размера и формы собственности
- Часто используется в связке с ISO 27001 (ИБ) и COBIT (контроли)
- Доступна сертификация через российские органы (~16 000 руб.)
- Обучение — от 89 000 руб. (онлайн-курсы)
- Процесс внедрения описан в **ISO/IEC TS 38501**
- Хорошо сочетается с требованиями ФСТЭК, 152-ФЗ (ПДн), КИИ

**Практический совет**: в РФ ISO 38500 редко внедряют изолированно. Обычно это часть комплексной программы GRC (Governance, Risk, Compliance) вместе с ISO 27001, ISO 9001, и отраслевыми требованиями ЦБ РФ (для финансового сектора).

## Сравнение с аналогами

| Подход | Роль | Уровень | Когда полезен |
|--------|------|---------|---------------|
| **ISO/IEC 38500** | Принципы governance ИТ на уровне руководства | Board/C-level | Нужен верхнеуровневый контур управления ИТ |
| **COBIT 2019** | Детализированная модель IT-governance и контролей | Management/Operations | Нужна глубина и формализация доменов управления |
| **ISO/IEC 27001** | Система управления ИБ + сертификация | Management/Operations | Нужен формальный контур ИБ и аудитопригодность |
| **ITIL 4** | IT Service Management | Operations | Нужна зрелость сервисной эксплуатации |
| **ISO/IEC 20000** | Стандарт системы менеджмента сервисов | Management/Operations | Нужна сертификация IT-сервисов |
| **ISO 31000** | Risk management framework | Board/Management | Нужна формальная система риск-менеджмента |
| **NIST CSF** | Cybersecurity framework | Operations | Приоритет — кибербезопасность и regulated industries |

## Практические сценарии использования

### Сценарий 1: Стартап растёт → нужен governance
Компания из 50 человек выросла до 500. ИТ-решения принимались ad-hoc. Пора:
- Создать IT Governance Committee
- Внедрить EDM-ритм с ежемесячными reviews
- Разделить decisions по risk tier (low/medium/high)
- Назначить accountable owners для ключевых доменов

### Сценарий 2: Digital transformation буксует
Крупная компания запустила digital transformation, но проекты затягиваются. Решение:
- Оценка портфеля ИТ-инициатив через призму Value Generation и Strategy
- Внедрение stage-gate funding: транши только при evidence
- KPI: time-to-value, benefits realisation rate

### Сценарий 3: Regulatory pressure
Регулятор требует прозрачности по киберрискам и ИТ-инвестициям. Решение:
- ISO 38500 как governance umbrella
- COBIT для control evidence
- ISO 27001 для security compliance
- Quarterly Board reporting с KRI (key risk indicators)

### Сценарий 4: M&A интеграция
Две компании сливаются — нужен единый governance над объединённым ИТ-ландшафтом:
- Единый governance charter
- RAPID-матрица для ключевых decisions
- EDM-цикл для monitoring интеграции

## Цены и тарифы

ISO/IEC 38500 — стандарт, а не программный продукт. Прямого тарифа нет.

**Прямые расходы:**
- Покупка текста стандарта: ~$150-200 (ISO.org)
- Сертификация (РФ): ~16 000 руб.
- Обучение: от 89 000 руб. (онлайн)

**Косвенные расходы (основные):**
- Организационные изменения (governance structures, committees)
- Обучение руководителей и ключевых сотрудников
- Внедрение governance-практик (policy framework, KPI dashboards)
- Возможный найм GRC-специалистов
- Инструменты автоматизации compliance monitoring

**Для малого бизнеса**: разумный подход — взять принципы и модель EDM без полной сертификации. Стоимость: время руководителей + 1-2 шаблона документов.

## См. также

- [IT best-practices и стандарты](./index.md)
- [COBIT 2019 — корпоративное управление I&T](./cobit.md)
- [ITIL 4 — управление IT-сервисами через ценность](./itil-itsm.md)
- [ISO/IEC 20000 — стандарт системы менеджмента сервисов](./iso-20000.md)
- [ISO/IEC 27001 — система управления информационной безопасностью (ISMS)](../security/iso-27001.md)
- [ISO 31000 — риск-менеджмент (внешняя ссылка)](https://www.iso.org/iso-31000-risk-management.html)

## Материалы и источники

- [ISO/IEC 38500:2024 (официальная страница стандарта)](https://www.iso.org/standard/81684.html)
- [ISO/IEC 38500:2024 — 12 Principles Deep Dive (Clause 5)](https://isoltx.com/article.php?id=24)
- [Umbrex — ISO 38500 IT Governance Framework (comprehensive guide)](https://umbrex.com/resources/frameworks/organization-frameworks/iso-38500-it-governance-framework/)
- [ГОСТ Р ИСО/МЭК 38500-2017 (российская версия)](https://docs.cntd.ru/document/1200146826)
- [LockThreat — Top Governance Frameworks Comparison](https://www.lockthreat.ai/resources/blogs/top-governance-frameworks-cobit-iso-38500-and-more)
- [Resguard — IT Governance Frameworks: COBIT, ITIL and ISO 38500 Compared](https://resguard-solutions.com/blog/en/it-governance-frameworks-comparison/)
- [ISO 37000:2021 — Governance of organizations](https://www.iso.org/standard/65036.html)
