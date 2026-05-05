---
title: "MARKETING.md — спецификация и архитектура"
description: "Детальная спецификация MARKETING.md: двухуровневая архитектура core + 15 companion-файлов, ключевые принципы, YAML для structured data, Approved Claims Library, autonomy tiers"
---

## Архитектура файлов

MARKETING.md использует двухуровневую архитектуру: компактный core-файл и 15 companion-файлов, которые загружаются агентами по запросу под свою роль.

```
MARKETING.md              # Core configuration — каждый агент читает это
companion/
  SAFETY.MD                # Crisis protocols, brand safety — загружается всегда
  BUDGET.MD                # Budget allocation, spend authority, bid ceilings
  CALENDAR.MD              # Campaign calendar, seasonal events, brief deadlines
  CAMPAIGNS.MD             # Full campaign type specs
  CHANNELS.MD              # Per-channel config — email, paid, social, SEO
  COMPETITORS.MD           # Competitive intelligence and response rules
  CONTENT.MD               # Editorial strategy, content formats, SEO config
  EXPERIMENTATION.MD       # A/B testing governance, statistical standards
  LIFECYCLE.MD             # Lifecycle stages, post-purchase, winback rules
  MEASUREMENT.MD           # Attribution models, KPI definitions, UTM standards
  MESSAGING.MD             # Positioning, pillars, approved claims library
  PARTNERS.MD              # Partnership, affiliate, co-marketing config
  PERSONALIZATION.MD       # Recommendation engine, dynamic content rules
  PRICING.MD               # Discount authority, promotional frequency rules
  SIGNALS.MD               # Behavioral triggers, signal priority
  VISUAL.MD                # Visual identity system for AI-generated assets
```

### Core (MARKETING.md)

Содержит то, что нужно каждому агенту для каждого решения:
- Brand identity и миссия
- Customer personas
- Campaign type defaults
- KPI framework
- Suppression rules
- Human approval gates

Намеренно компактный — чтобы не перегружать контекст агента.

### Companion files

Содержат глубину для конкретных ролей. Загружаются по запросу:
- **Контент-агент** → `CONTENT.MD` + `MESSAGING.MD`
- **Кампании-агент** → `CAMPAIGNS.MD` + `BUDGET.MD` + `PRICING.MD`
- **Аналитик** → `MEASUREMENT.MD`
- **Триггерные email** → `SIGNALS.MD` + `LIFECYCLE.MD`

**SAFETY.MD** — исключение: загружается всегда вместе с core.

## Ключевые принципы

### 1. Конфигурация vs логика

Инженеры давно разделяют конфигурацию и логику. MARKETING.md применяет этот паттерн к маркетинговому контексту: brand decisions, constraints, personas декларируются один раз. Каждый агент читает из файла, а не получает инструкции через промпты.

### 2. YAML для структурированных данных

Persona definitions, campaign defaults, discount authority, suppression rules — всё в YAML. Агент может извлечь AOV персоны или KPI кампании без двусмысленности — это критично для машиночитаемости.

### 3. Prose для качественного контента

Voice, tone, messaging principles — prose в named sections. Потому что голос бренда inherently qualitative и плохо ложится в YAML.

### 4. Approved Claims Library

`MESSAGING.MD` содержит явный, human-curated список утверждений, которые бренд может делать. Агенты инструктированы пропускать любые утверждения, не входящие в библиотеку. Галлюцинации становятся видимы как пробел в библиотеке — их можно осознанно добавить или запретить.

```
Approved Claims:
  - "Снижает время на маркетинг на 60%"
  - "Интегрируется с 50+ платформами"
  - "Соответствует 152-ФЗ"
```

### 5. Fail toward caution

Когда агент сталкивается с непокрытой ситуацией — подавляющий статус неясен, claim не в библиотеке, канал не в списке — система действует консервативно. Предсказуемый консервативный отказ безопаснее и отлаживаемее непредсказуемой импровизации.

### 6. Autonomy tiers

Human oversight закодирован машинно-читаемо:

| Уровень | Поведение агента | Пример |
|---------|-----------------|--------|
| **Full autonomy** | Делает без спроса | Генерация черновиков контента |
| **Notify and proceed** | Делает, потом уведомляет | Публикация в соцсетях по расписанию |
| **Notify and wait** | Пауза для аппрува | Запуск paid-кампании |
| **Human only** | Только человек | Сделки с партнёрами, rebranding |

### 7. Version control

Каждое изменение конфигурации — commit с timestamp и author. Можно реконструировать, под какими правилами агент работал в любой момент времени. Устаревший MARKETING.md хуже отсутствующего — quarterly review обязателен.

## Для кого

Для команд, которые строят или управляют **agentic маркетинговыми системами**. Если ваш AI-маркетинговый workflow — человек пишет промпты и проверяет каждый output, overhead ещё не стоит того. Ценность растёт с автономией агентов и сложностью системы.

## Как начать

1. **MARKETING.md** — первое приоритетное. Бизнес-идентичность, personas, campaign defaults, suppression rules, approval gates. Честная неполная конфигурация лучше полной сфабрикованной.
2. **SAFETY.MD** — немедленно. Crisis protocols, kill switch, holding statements.
3. **Companion files** — добавляйте по мере появления агентов.
4. **Version control** — всё в одном репо с agent configuration.
5. **Review cadence** — quarterly. Устаревший MARKETING.md хуже отсутствующего.

## Вдохновение

Паттерн старше AI. Инженеры давно отделяют конфигурацию от логики. Infrastructure-as-Code сделал принцип явным. MARKETING.md применяет его к маркетинговому контексту — Marketing-as-Code.

## Связанные страницы

- [MARKETING.md — новый стандарт AI-маркетинга](./marketing-md.md) — общее введение и сценарии использования
- [Маркетинговые Agent Skills](./marketing-skills.md) — экосистема скиллов для AI-маркетинга
- [DESIGN.md — формат дизайн-систем для AI](../design/design-md.md) — дизайновый аналог с похожей архитектурой
- [AGENTS.md и контекст-файлы для AI](../agents/index.md) — экосистема контекст-файлов

## Материалы и источники

- [MARKETING.md — Agentic Standard (benkohcc)](https://github.com/benkohcc/Marketing-MD-Agentic-Standard)
