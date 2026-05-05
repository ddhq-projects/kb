# Design as Code — Обзор и ключевые статьи

> Дата сбора: 2026-05-05

---

## Что такое Design as Code

**Design as Code** — подход, при котором дизайн-решения (через design tokens) представляются как версионированные файлы кода (JSON), которые автоматически генерируют стили для всех платформ — web, iOS, Android. Design tokens служат единым source of truth между дизайнерами и разработчиками, устраняя ручной handoff.

Ядро подхода: дизайн-решения → JSON tokens → Style Dictionary → CSS/Swift/Kotlin/документация.

---

## Ключевые концепции

### Design Tokens
Именованные переменные, хранящие значения цветов, отступов, типографики, z-index и т.д. Три слоя:

| Слой | Описание | Пример |
|------|----------|--------|
| **Option tokens** (primitive) | Сырая палитра, базовые значения | `blue-500: #78bbfa` |
| **Decision tokens** (semantic) | Как и где применять | `color-accent: {color.options.blue-900}` |
| **Component tokens** | Контекст для конкретных компонентов | `button-primary-bg: {color.decisions.accent}` |

### Workflow
1. Designer определяет tokens в Figma (Tokens Studio plugin)
2. Tokens синхронизируются bidirectionally с Git (GitHub/GitLab)
3. CI/CD pipeline: Validate → Transform (Style Dictionary) → Test (Storybook) → Publish (npm)
4. Автоматическая генерация CSS variables, Swift, Kotlin, документации

---

## Инструменты

| Инструмент | Назначение | Ключевое |
|-----------|-----------|----------|
| **Tokens Studio** | Figma plugin для design tokens | Bidirectional Git sync, W3C JSON, multi-theme |
| **Style Dictionary** (Amazon) | Трансформация tokens → код | CSS, Sass, Android XML, iOS Swift |
| **Figma Make** | AI генерация кода из фреймов | HTML, CSS, JS, React из Figma frames |
| **Builder.io** | Mapping Figma → code components | Visual edits → production code |
| **Specify** | Извлечение tokens из Figma | Экспорт в code formats |
| **Storybook** | Тестирование UI + visual regression | Документация + тесты компонентов |

---

## Статьи

### Статья 1: Martin Fowler — Design Token-Based UI Architecture
**URL:** https://martinfowler.com/articles/design-token-based-ui-architecture.html
**Дата:** Декабрь 2024

Архитектурный deep-dive от Thoughtworks. Самая фундаментальная статья по теме.

**Ключевые тезисы:**
- **Role of tokens:** Origin story — Salesforce придумали tokens для синхронизации обновлений на мультиплатформе
- **W3C Design Token Spec:** Второй editor's draft (2022) + call to implement
- **Single source of truth:** Git repo > Figma file (Tokens Studio обеспечивает bidirectional sync)
- **Translation tools:** Style Dictionary, Theo, Diez, Specify App
- **Automated pipeline:** 5 stages: Check → Build → Test → Publish → Notify
  - semantic-release для автоматического версионирования
  - Storybook для visual regression тестов
  - Thoughtworks: «smaller design changes across multiple front-ends in a single day»
- **3 типа tokens (Option → Decision → Component):** Подробная иерархия с JSON-примерами
- **Public vs Private tokens:** Не все option tokens нужно публиковать — только decision-level для product teams
- **Manual approval option:** PR-based workflow с preview environments

---

### Статья 2: Contentful — Design Tokens Explained (How to Build a Design Token System)
**URL:** https://www.contentful.com/blog/design-token-system/

Практический гайд по построению design token system с нуля, от простого к сложному.

**Ключевые тезисы:**
- **Бизнес-кейс:** Design-driven компании = +32% revenue growth (McKinsey). Без tokens — обновление primary color может занять месяц
- **3 типа tokens:**
  - Primitive — урезают бесконечные возможности до бренд-релевантных (десятки-сотни)
  - Semantic — несут смысл и guidance (как/где применять)
  - Component — специфичны для компонентов, полезны для theming
- **Пошаговое построение:**
  1. Первый primitive token: primary brand color (hex → JSON)
  2. Расширение палитры: stepping system (100-950), secondary + neutral + feedback colors
  3. Первый semantic token: `text-default → gray-200` (уменьшает двусмысленность)
  4. Расширение semantic: interactive states, emphasis levels
- **Alias mechanism:** Токены ссылаются друг на друга → гибкость при обновлениях
- **Distribution:** Style Dictionary + Knapsack для трансформации
- **Design tokens как «database»:** связывают design files, mobile apps, documentation, content platform

---

### Статья 3: Browser London — Do Design Tokens Really Make Design Systems Smarter?
**URL:** https://www.browserlondon.com/blog/2025/10/20/do-design-tokens-really-make-design-systems-smarter/
**Дата:** Октябрь 2025

Критический взгляд на design tokens — реально ли они делают design systems умнее?

**Ключевые тезисы:**
- Tokens как мост между design и code
- Когда tokens добавляют сложность вместо пользы
- Баланс между restrictiveness и гибкостью design system
- *(Страница заблокирована Cloudflare — проверить через VPN/браузер)*

---

### Статья 4: MaterialUI — Design Tokens and Theming: Scalable UI 2025
**URL:** https://materialui.co/blog/design-tokens-and-theming-scalable-ui-2025
**Дата:** Октябрь 2025

Системные паттерны и theming через design tokens для масштабных UI.

**Ключевые тезисы:**
- Multi-platform theming через единый token layer
- Dark mode, brand variations, white-label через semantic token overrides
- Паттерны масштабирования design token systems

---

## Дополнительные ресурсы
- https://smashingmagazine.com/2024/05/naming-best-practices/ — Naming best practices for design tokens
- https://spectrum.adobe.com/page/design-tokens/ — Adobe Spectrum design tokens (W3C-compliant)
- https://docs.tokens.studio/transform-tokens/style-dictionary — Tokens Studio + Style Dictionary integration
- https://www.figma.com/solutions/design-to-code/ — Figma Design to Code overview
- https://designtokenscourse.com — Design Tokens Course (обучение)
- https://www.boldare.com/blog/design-tokens-explained/ — Design tokens explained (Boldare)
