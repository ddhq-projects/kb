---
title: "Каталог документов ISO 27001: 20+ шаблонов ISMS"
description: "Полный каталог шаблонов документов для ISO 27001:2022: обязательные и рекомендуемые, маппинг на разделы стандарта, инструменты с открытым кодом"
---

## Зачем нужен каталог

ISO 27001 требует доказательной базы: «если не записано — значит не существует». Аудитору нужны документы, а не устные заверения.

Ниже — структурированный каталог шаблонов, покрывающий все разделы ISO 27001:2022. Часть документов обязательна (без них сертификацию не пройти), часть — рекомендуется для зрелой СУИБ.

## Обязательные документы (mandatory)

| Документ | Пункт ISO 27001 | Зачем |
|---|---|---|
| **Scope ISMS** | П. 4.3 | Границы сертификации: процессы, системы, площадки, исключения |
| **Политика информационной безопасности** | П. 5.2 | Высокоуровневый документ, подписанный руководством. Цели ИБ, обязательства руководства |
| **Методика оценки рисков** | П. 6.1.2 | Как организация идентифицирует, оценивает и приоритизирует риски |
| **Реестр рисков + Risk Treatment Plan** | П. 6.1.2 | Центральный репозиторий угроз, скоринг, стратегия обработки, владельцы, остаточный риск |
| **Statement of Applicability (SoA)** | П. 6.1.3(d) | Полный список 93 контролей Annex A с обоснованием применимости и статусом внедрения |
| **Результаты внутренних аудитов** | П. 9.2 | Доказательство работы цикла внутренних проверок |
| **Протоколы Management Review** | П. 9.3 | Анализ СУИБ со стороны руководства: повестка, решения, действия |

## Рекомендуемые документы

### Управление и governance

| Документ | Пункт | Описание |
|---|---|---|
| **Organisation Overview** | П. 4.1 | Высокоуровневое описание организации: миссия, цели, ценности |
| **Context of Organisation** | П. 4.1-4.2 | Внешние/внутренние факторы, заинтересованные стороны и их требования |
| **RASCI Accountability Matrix** | — | Матрица ответственности за контроли Annex A по отделам |
| **Information Security Document Tracker** | — | Версионирование всей документации ISMS: владельцы, даты пересмотра |

### Активы и классификация

| Документ | Пункт | Описание |
|---|---|---|
| **Physical Asset Register** | Annex A 5.9 | Инвентаризация hardware и носителей, хранящих/обрабатывающих чувствительные данные |
| **Data Asset Register (ROPA)** | Annex A 5.9 | Реестр информационных активов с маппингом на GDPR / 152-ФЗ |
| **Information Classification Summary** | Annex A 5.12 | Памятка по уровням классификации и правилам обработки данных |

### Доступ и контроль

| Документ | Пункт | Описание |
|---|---|---|
| **Access Control Policy** | Annex A 5.15 | Политика контроля доступа: роли, принципы, процесс выдачи/отзыва |
| **Mobile Device & Remote Working Policy** | Annex A 6.7 | Безопасность BYOD и удалённой работы |

### Риски и инциденты

| Документ | Пункт | Описание |
|---|---|---|
| **Risk Management Process** | П. 6.1 | Пошаговая процедура идентификации, оценки и обработки рисков |
| **Incident & Corrective Action Log** | П. 10.1 | Журнал инцидентов безопасности и корректирующих действий |
| **Business Impact Analysis (BIA)** | Annex A 5.30 | Анализ влияния сбоев на бизнес: RTO, RPO, критичные процессы |
| **Business Continuity Plan (BCP)** | Annex A 5.29 | Процедуры восстановления операций после инцидента |
| **Business Continuity Objectives & Strategy** | Annex A 5.29 | Высокоуровневая стратегия непрерывности бизнеса |

### Поставщики и compliance

| Документ | Пункт | Описание |
|---|---|---|
| **Legal Register** | П. 4.2 | Реестр применимых законов, регуляторных и контрактных требований |
| **Supplier Register** | Annex A 5.19 | Управление рисками третьих сторон: контракты, проверки безопасности |

### Персонал и обучение

| Документ | Пункт | Описание |
|---|---|---|
| **Competency Matrix** | П. 7.2 | Навыки сотрудников и требования к обучению для поддержки ISMS |
| **Awareness & Training Plan** | П. 7.3 | План повышения осведомлённости и обучения персонала |

### Аудит

| Документ | Пункт | Описание |
|---|---|---|
| **Audit Plan** | П. 9.2 | План внутренних и внешних аудитов на год |
| **Audit Report & Worksheets** | П. 9.2 | Детальные worksheets для аудита разделов и контролей Annex A |
| **Gap Assessment Plan** | — | Оценка разрыва между текущим состоянием и требованиями ISO 27001 |

## Маппинг: разделы ISO 27001 → шаблоны

| Раздел ISO 27001 | Необходимые шаблоны |
|---|---|
| **4.1-4.4** (Контекст, Scope) | Organisation Overview, Context of Organisation, Scope ISMS |
| **5.1-5.2** (Лидерство) | Информационная политика ИБ, Management Review Meeting Agenda, RASCI Matrix |
| **6.1-6.2** (Планирование) | Risk Management Process, Risk Register, SoA |
| **7.1-7.5** (Поддержка) | Competency Matrix, Awareness & Training Plan, Document Tracker |
| **8.1** (Функционирование) | Risk Register (актуализация), Incident Log |
| **9.1-9.3** (Оценка) | Audit Plan, Audit Worksheets, Management Review Minutes |
| **10.1-10.2** (Улучшение) | Incident & Corrective Action Log |

## Бесплатные инструменты и репозитории

### ISO 27001:2022 Toolkit (GitHub, MIT License)

Репозиторий с открытым исходным кодом: [github.com/PehanIn/ISO-27001-2022-Toolkit](https://github.com/PehanIn/ISO-27001-2022-Toolkit)

12 готовых шаблонов:
- Gap Assessment Plan
- Statement of Applicability (SoA)
- Risk Register
- Scope and Context Definition
- Asset Inventory
- Business Continuity and Disaster Recovery Plan
- Information Security Policy and Procedures
- Awareness and Training Plan
- Management Review Meeting
- ISMS Checklists
- Internal Audit Plan
- Return on Investment (ROI) Analysis

### Другие источники бесплатных шаблонов

- **UpGuard** — бесплатные шаблоны: Risk Assessment, Vendor Questionnaire, Implementation Checklists
- **Vanta** — ISO 27001 Documentation Template (free download)
- **ICT Institute** — Information Security Policy, Procedures, SoA, GDPR-aligned templates
- **HighTable** — полный набор из 20+ шаблонов (часть бесплатно, полный toolkit платный)

## См. также

- [ISO/IEC 27001 — система управления ИБ (ISMS)](./iso-27001.md)
- [Безопасность (Security) — обзор раздела](./index.md)

## Материалы и источники

- [GitHub: ISO-27001-2022-Toolkit (MIT)](https://github.com/PehanIn/ISO-27001-2022-Toolkit)
- [HighTable — ISO 27001 Template Documents Ultimate Guide](https://hightable.io/iso-27001-documents/)
- [HighTable — ISO 27001 Statement of Applicability](https://hightable.io/statement-of-applicability-iso-27001/)
- [HighTable — ISO 27001 Risk Register](https://hightable.io/risk-register/)
- [КиберОснова — ISO 27001: руководство по внедрению СУИБ](https://sgrc.cyberosnova.ru/blog/iso-27001-suib/)
