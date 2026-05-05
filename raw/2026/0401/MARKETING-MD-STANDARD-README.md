# MARKETING.MD — Agentic Standard

> Источник: https://github.com/benkohcc/Marketing-MD-Agentic-Standard

A machine-readable marketing configuration standard for AI-native marketing systems.

## История появления

В 2025 Google DeepMind выпустили **Stitch** — AI design tool, построенный вокруг файла `DESIGN.MD`. Идея: вместо повторного объяснения визуальной идентичности продукта каждому AI-инструменту, вы декларируете её один раз в структурированном файле. Файл живёт в version control. Каждый AI-агент, принимающий дизайнерские решения, сначала читает его.

**MARKETING.MD** применяет ту же идею к маркетингу.

## Суть

Если вы строите AI маркетинговую систему — агенты, которые планируют кампании, пишут копирайтинг, управляют email-последовательностями, запускают paid media, анализируют performance, персонализируют опыт — этим агентам нужно общее понимание: кто бренд, кто его клиенты, как выглядит успех, и чего они никогда не должны делать.

**MARKETING.MD — это онбординг-документ, который ваша AI-маркетинговая команда читает перед действиями.**

## Архитектура файлов

```
MARKETING.MD              # Core configuration — каждый агент читает это
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

### Двухуровневая структура

**Core (MARKETING.MD):** содержит то, что нужно каждому агенту для каждого решения — brand identity, customer personas, campaign type defaults, KPI framework, suppression rules, human approval gates. Намеренно компактный.

**Companion files:** содержат глубину для конкретных ролей. Загружаются по запросу:
- Контент-агент → CONTENT.MD + MESSAGING.MD
- Кампании-агент → CAMPAIGNS.MD + BUDGET.MD + PRICING.MD
- Аналитик → MEASUREMENT.MD
- Триггерные email → SIGNALS.MD + LIFECYCLE.MD

**SAFETY.MD** — исключение: загружается всегда вместе с core.

## Ключевые принципы

### 1. Конфигурация vs логика
Инженеры давно разделяют конфигурацию и логику. MARKETING.MD применяет этот паттерн к маркетинговому контексту. Brand decisions, constraints, personas — декларируются один раз. Каждый агент читает из файла.

### 2. YAML для структурированных данных
Persona definitions, campaign defaults, discount authority, suppression rules — всё в YAML. Агент может извлечь AOV персоны или KPI кампании без двусмысленности.

### 3. Prose для качественного контента
Voice, tone, messaging principles — prose в named sections. Потому что inherently qualitative.

### 4. Approved Claims Library
MESSAGING.MD содержит явный, human-curated список утверждений, которые бренд может делать. Агенты инструктированы пропускать любые утверждения не из библиотеки. Галлюцинации становятся видимы как пробел в библиотеке.

### 5. Fail toward caution
Когда агент сталкивается с непокрытой ситуацией — подавляющий статус неясен, claim не в библиотеке, канал не в списке — система действует консервативно. Предсказуемый консервативный отказ безопаснее и отлаживаемее непредсказуемой импровизации.

### 6. Autonomy tiers
Human oversight закодирован машинно-читаемо:
- **Full autonomy** — агент делает без спроса
- **Notify and proceed** — делает, потом уведомляет
- **Notify and wait** — пауза для аппрува
- **Human only** — только человек

### 7. Version control
Каждое изменение конфигурации — commit с timestamp и author. Можно реконструировать правила, под которыми агент работал в любой момент времени.

## Для кого

Для команд, которые строят или управляют **agentic маркетинговыми системами**. Если ваш AI маркетинговый workflow — человек пишет промпты и проверяет каждый output — overhead ещё не стоит того. Ценность растёт с автономией агентов и сложностью системы.

## Как начать

1. **MARKETING.MD** — первое приоритетное. Бизнес-идентичность, personas, campaign defaults, suppression rules, approval gates. Честная неполная конфигурация лучше полной сфабрикованной.
2. **SAFETY.MD** — немедленно. Crisis protocols, kill switch, holding statements.
3. **Companion files** — добавляйте по мере появления агентов.
4. **Version control** — всё в одном репо с agent configuration.
5. **Review cadence** — quarterly. Устаревший MARKETING.MD хуже отсутствующего.

## Автор

**Benjamin Koh** — Director of Product в PayPal, отвечает за Marketing AI и data strategy. Не теоретик — человек, который строит martech внутри большой компании.

## Вдохновение

Паттерн старше AI. Инженеры давно отделяют конфигурацию от логики. Infrastructure-as-code сделал принцип явным. MARKETING.MD применяет его к маркетинговому контексту.

---

*Версия: v1.0. Разработан для AI-native маркетинговых систем 2025-2026.*
