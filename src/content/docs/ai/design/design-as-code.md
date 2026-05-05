---
title: "Design as Code — дизайн-токены и архитектура"
description: "Design as Code: подход к дизайну через версионированные токены (W3C DTCG), которые автоматически генерируют стили для всех платформ — web, iOS, Android"
---

## Что такое Design as Code

**Design as Code** — подход, при котором дизайн-решения представляются как версионированные файлы кода (JSON), которые автоматически генерируют стили для всех платформ. Design tokens служат единым source of truth между дизайнерами и разработчиками, устраняя ручной handoff.

Ядро подхода: дизайн-решения → JSON tokens → Style Dictionary → CSS/Swift/Kotlin/документация.

Это **upstream-парадигма** по отношению к [DESIGN.md](./design-md.md) — если DESIGN.md адаптирует дизайн-систему для AI-агентов, то Design as Code охватывает полный цикл от дизайна в Figma до продакшен-кода на всех платформах.

## Design Tokens — ядро подхода

**Design Tokens** — именованные переменные, хранящие значения цветов, отступов, типографики, z-index и других визуальных свойств. W3C Design Tokens Community Group (DTCG) разрабатывает [официальную спецификацию](https://tr.designtokens.org/) формата.

### Три слоя токенов

| Слой | Описание | Пример |
|------|----------|--------|
| **Option tokens** (primitive) | Сырая палитра, базовые значения | `blue-500: #78bbfa` |
| **Decision tokens** (semantic) | Как и где применять | `color-accent: {color.options.blue-900}` |
| **Component tokens** | Контекст для конкретных компонентов | `button-primary-bg: {color.decisions.accent}` |

Такая трёхуровневая иерархия позволяет менять визуальный язык продукта через изменение нескольких семантических токенов, не трогая каждый компонент по отдельности.

### Алиасы (token references)

Токены ссылаются друг на друга через синтаксис `{path.to.token}`:

```json
{
  "color": {
    "options": { "blue-900": "#0D47A1" },
    "decisions": {
      "accent": "{color.options.blue-900}",
      "text-primary": "{color.options.gray-900}"
    }
  }
}
```

Это ключевой механизм: при смене accent-цвета достаточно изменить reference на другой option token — и все компоненты обновятся автоматически.

### Public vs Private tokens

Не все option tokens нужно публиковать для продуктовых команд. Обычно публикуются только decision-level токены — это даёт гибкость менять implementation details без влияния на консьюмеров.

## Workflow

1. **Дизайнер определяет токены в Figma** через плагин **Tokens Studio**
2. **Токены синхронизируются с Git** (GitHub/GitLab) bidirectionally — изменения в любую сторону отражаются в другой
3. **CI/CD pipeline:** Validate → Transform (Style Dictionary) → Test (Storybook) → Publish (npm)
4. **Автоматическая генерация** CSS variables, Swift, Kotlin, документации для всех платформ

Рабочий пайплайн из 5 стадий (по Thoughtworks):

| Стадия | Инструменты |
|--------|-------------|
| **Check** | Линтинг токенов, валидация references |
| **Build** | Style Dictionary → CSS/Sass/iOS/Android |
| **Test** | Storybook визуальные регрессии |
| **Publish** | npm-пакет, обновление документации |
| **Notify** | Slack/Teams уведомления командам |

## Инструменты

| Инструмент | Назначение | Ключевое |
|-----------|-----------|----------|
| **Tokens Studio** | Figma-плагин для design tokens | Bidirectional Git-синхронизация, W3C DTCG-формат, мульти-темность |
| **Style Dictionary** (Amazon) | Трансформация токенов → код | CSS, Sass, Android XML, iOS Swift, документация |
| **Figma Make** | AI-генерация кода из фреймов | HTML, CSS, JS, React из Figma frames |
| **Builder.io** | Mapping Figma → code components | Визуальное редактирование → production code |
| **Specify** | Извлечение токенов из Figma | Экспорт в различные code-форматы |
| **Storybook** | Тестирование UI + visual regression | Документация + тесты компонентов |

### Style Dictionary

Open-source инструмент от Amazon (Apache 2.0). Принимает JSON с токенами, трансформирует в platform-specific форматы через конфигурируемые трансформеры и форматеры. Поддерживает:

- **Web**: CSS custom properties, Sass/SCSS, Less
- **iOS**: Swift, Objective-C
- **Android**: XML resources, Compose
- **Документация**: Markdown, HTML

### Tokens Studio

Figma-плагин, который делает Figma способной хранить и версионировать токены. Ключевая фича — **bidirectional Git sync**: изменения токенов в Figma автоматически коммитятся в Git, а изменения в Git-репозитории применяются к Figma-файлу. Это решает проблему «Figma как source of truth vs код как source of truth» — оба источника синхронизированы.

## Пошаговое построение design token system

Методология (по Contentful) — от простого к сложному:

### Шаг 1: Первый primitive token

Начать с одного цвета — primary brand color:

```json
{
  "color": {
    "options": {
      "brand-primary": "#1A73E8"
    }
  }
}
```

### Шаг 2: Расширение палитры

Stepping system (100–950), secondary + neutral + feedback colors:

```json
{
  "color": {
    "options": {
      "brand-primary-500": "#1A73E8",
      "brand-primary-100": "#D2E3FC",
      "brand-primary-900": "#0D47A1",
      "neutral-100": "#F8F9FA",
      "neutral-900": "#212529"
    }
  }
}
```

### Шаг 3: Первый semantic token

Семантические токены несут смысл и guidance:

```json
{
  "color": {
    "decisions": {
      "text-default": "{color.options.neutral-900}",
      "surface-default": "{color.options.neutral-100}"
    }
  }
}
```

### Шаг 4: Расширение семантики

Interactive states, emphasis levels:

```json
{
  "color": {
    "decisions": {
      "text-default": "{color.options.neutral-900}",
      "text-subtle": "{color.options.neutral-600}",
      "surface-hover": "{color.options.neutral-200}",
      "border-default": "{color.options.neutral-300}"
    }
  }
}
```

### Шаг 5: Component tokens

Специфичные для компонентов:

```json
{
  "button": {
    "primary": {
      "background": "{color.decisions.brand-primary}",
      "text": "{color.options.white}",
      "border-radius": "{shape.border-radius.md}"
    }
  }
}
```

## Бизнес-кейс

McKinsey: design-driven компании показывают **+32% к выручке**. Без токенов обновление primary color может занимать месяц ручной работы на всех платформах. С токенами — изменение одного значения и автоматическая регенерация.

Tokens → автоматизация → скорость итераций. Команды Thoughtworks сообщают о возможности проводить «smaller design changes across multiple front-ends in a single day».

## Когда токены не нужны

Design tokens добавляют сложность. По Browser London, они оправданы когда:

- Есть несколько платформ (web + iOS + Android)
- Есть multiple themes (dark/light, white-label)
- Дизайн-система переиспользуется несколькими командами
- Частота дизайн-изменений высока

Для одного лендинга на одной платформе overhead от токенов может превышать выгоду.

## Design as Code и DESIGN.md

| Аспект | Design as Code (tokens) | DESIGN.md |
|--------|------------------------|-----------|
| Аудитория | Команды разработки | AI-агенты |
| Формат | JSON (W3C DTCG) | Markdown + YAML frontmatter |
| Результат | CSS/Swift/Kotlin | AI генерирует UI в заданном стиле |
| Инструменты | Style Dictionary, Tokens Studio | Google Stitch, Claude Code |
| Уровень | Полная дизайн-система | Token-subset для AI |

DESIGN.md — это «translation layer»: берёт узкий срез design tokens и упаковывает в формат, который AI-агент может механически применить.

## См. также

- [DESIGN.md — формат дизайн-систем для AI](./design-md.md) — как DESIGN.md адаптирует токены для AI-агентов
- [DESIGN.md — рабочий пайплайн](./design-md-workflow.md) — практическая цепочка Stitch → DESIGN.md → Claude Code
- [Обзор AI-инструментов для дизайна](./ai-design-tools.md) — Pencil.dev, Google Stitch, v0.dev и другие
- [Infrastructure as Code](../../it/devops/infrastructure-as-code.md) — IaC как предшественник парадигмы «всё как код»

## Материалы и источники

- [Martin Fowler: Design Token-Based UI Architecture (Thoughtworks)](https://martinfowler.com/articles/design-token-based-ui-architecture.html)
- [Contentful: Design Tokens Explained](https://www.contentful.com/blog/design-token-system/)
- [Browser London: Do Design Tokens Really Make Design Systems Smarter?](https://www.browserlondon.com/blog/2025/10/20/do-design-tokens-really-make-design-systems-smarter/)
- [MaterialUI: Design Tokens and Theming](https://materialui.co/blog/design-tokens-and-theming-scalable-ui-2025)
- [W3C Design Tokens Community Group](https://tr.designtokens.org/)
- [Tokens Studio + Style Dictionary](https://docs.tokens.studio/transform-tokens/style-dictionary)
- [Adobe Spectrum Design Tokens](https://spectrum.adobe.com/page/design-tokens/)
- [Smashing Magazine: Naming Best Practices for Design Tokens](https://smashingmagazine.com/2024/05/naming-best-practices/)
