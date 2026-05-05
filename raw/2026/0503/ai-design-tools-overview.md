# Современные AI-инструменты для дизайна сайтов и приложений

> Обзор ключевых инструментов и форматов (май 2026)

---

## 1. DESIGN.md — формат спецификации для AI-агентов

**Что это:** Open-source формат (Apache-2.0) от Google Labs для описания дизайн-систем в одном Markdown-файле. Сочетает машиночитаемые токены с человекочитаемыми объяснениями, чтобы AI-агенты могли генерировать согласованный UI.

**Структура файла:**

```yaml
---
name: Heritage
colors:
  primary: "#1A1C1E"
  secondary: "#6B7280"
typography:
  h1:
    fontFamily: Public Sans
    fontSize: 3rem
spacing:
  sm: 8px
  md: 16px
  lg: 24px
components:
  button-primary:
    backgroundColor: "{colors.primary}"
    textColor: "#FFFFFF"
    rounded: "{rounded.md}"
    padding: "{spacing.md} {spacing.lg}"
  button-primary-hover:
    backgroundColor: "{colors.secondary}"
---
```

После YAML frontmatter идёт Markdown-проза с секциями: Overview, Colors, Typography, Layout, Elevation & Depth, Shapes, Components, Do's and Don'ts.

**CLI-инструменты:**
- `npx @google/design.md lint DESIGN.md` — валидация ссылок, WCAG AA контраст
- `npx @google/design.md diff DESIGN-v1.md DESIGN-v2.md` — детект изменений
- `npx @google/design.md export --format tailwind DESIGN.md > tailwind.theme.json` — экспорт в Tailwind/W3C DTCG

**Зачем нужен:** Обычные design tokens (JSON/YAML) дают значения, но не контекст. DESIGN.md добавляет «почему» и «как использовать». AI-агенты (Claude, Cursor, Codex) читают файл из корня репозитория и генерируют UI с точными цветами, типографикой, отступами — без галлюцинаций.

**Отличие от обычных design tokens:**

| Аспект | DESIGN.md | Design Tokens |
|--------|-----------|---------------|
| Формат | Markdown + YAML frontmatter | JSON/YAML |
| Читаемость | Человек + AI | Машина |
| Контекст | Токены + правила + rationale | Только значения |
| Цель | AI-агенты в корне проекта | Кроссплатформенные дизайн-системы |

**Репозиторий:** https://github.com/google-labs-code/design.md

---

## 2. Pencil.dev

**Что это:** AI-инструмент дизайна на базе Claude, с canvas-интерфейсом в стиле Figma. Для фронтенд-разработчиков и vibe-coding.

**Ключевые фичи:**
- Canvas с слоями, CSS-редактор, drag-and-drop
- Sticky notes как промпты для Claude
- Импорт из Figma
- Design-as-code (.pen JSON) для версионирования в git
- MCP server для интеграции с dev-тулами
- До 6 AI-агентов для параллельной работы

**Плюсы:** Быстрое прототипирование, интуитивный интерфейс как Figma, экономия токенов на мелких правках (редактируешь вручную)

**Минусы:** Ранняя стадия, нет коллаборации, desktop-only, требует Claude subscription ($20/мес), не production-ready

**Доступ:** Бесплатный early-access (Mac/Linux, VS Code/Cursor extension)

**Ссылки:** https://www.pencil.dev

---

## 3. Google Stitch

**Что это:** AI-инструмент дизайна от Google Labs, эволюция Galileo AI (приобретён Google). Генерирует high-fidelity mobile/web UI из промптов, скетчей, изображений или кода.

**Ключевые фичи:**
- Infinite canvas для идей, изображений, текста и кода
- Multi-screen прототипирование (до 5 экранов, линковка, preview)
- Voice commands для правок в реальном времени
- Поддержка DESIGN.md для дизайн-систем
- Экспорт в Figma, HTML/CSS/JS, AI Studio
- Модели Gemini (2.5 Flash — Standard, 2.5 Pro — сложные задачи)

**Stitch 2.0 (март 2026):** AI-native canvas, agent manager, voice input, ~400 дизайнов/день

**Доступ:** Бесплатно, stitch.withgoogle.com

**Ссылки:** https://stitch.withgoogle.com

---

## 4. Claude Design (Anthropic Labs)

**Что это:** Визуальный инструмент дизайна от Anthropic, запущен в апреле 2026. Работает на Claude Opus 4.7 (vision model).

**Ключевые фичи:**
- Генерация дизайнов из текста, изображений, документов или кода
- Автоматическое применение дизайн-системы пользователя (из onboarding-данных, репозитория)
- Интерактивные прототипы с динамикой (кнопки, навигация, формы, 3D, видео, AI-компоненты)
- Итерация через чат (широкие правки), inline-комментарии (точечные), слайдеры (spacing/color)
- Командная работа: шэринг, комментарии, групповые чаты с Claude
- Экспорт: PDF, PPTX, HTML, Canva, handoff в Claude Code

**Доступ:** Pro/Max/Team/Enterprise подписки Claude

**Ссылки:** https://claude.ai/design

---

## 5. OpenAI Codex (UI Design)

**Что это:** AI-кодинг агент от OpenAI (запущен апрель 2025). Не дизайн-тул напрямую, но генерирует production-ready UI из скетчей, Figma, промптов.

**Ключевые UI-фичи:**
- GPT-5.3-Codex-Spark для быстрых UI-итераций (spacing, colors, responsiveness)
- 1:1 имплементация из Figma (фetch assets + screenshots → production UI code)
- Мультимодальность: скетчи с доски → интерактивные UI (3D глобусы, дашборды)
- Playwright для верификации в браузере
- GPT-5.4 (март 2026) + computer control (апрель 2026)
- macOS app (февраль 2026) с multi-agent management

**Отличие от других:** Codex — это coding agent, не дизайн-тул. Он генерирует готовый код, а не пиксели.

**Ссылки:** https://developers.openai.com/codex

---

## 6. v0.dev (by Vercel)

**Что это:** Генератор production-ready React-компонентов с Tailwind CSS и shadcn/ui из текстовых промптов.

**Ключевые фичи:**
- Промпт → рабочий React/Next.js код
- Tailwind CSS + shadcn/ui «из коробки»
- Итеративный рефайнмент
- Прямой деплой через Vercel
- Скорость: 30-60 сек

**Цена:** $20/мес (Pro)

**Ссылки:** https://v0.dev

---

## 7. Uizard

**Что это:** Тул для быстрого прототипирования, ориентированный на non-designers и PM.

**Ключевые фичи:**
- Конвертация скетчей и скриншотов в editable wireframes
- Мульти-экранные прототипы с интерактивными flows
- Простой drag-and-drop интерфейс
- Генерация из текста
- Скорость: секунды

**Цена:** $12-19/мс

**Ссылки:** https://uizard.io

---

## 8. Figma (AI features)

**Что это:** Профессиональный стандарт дизайна. AI-фичи встроены прямо в canvas.

**Ключевые AI-фичи:**
- Figma Make — промпт-дизайн прямо в canvas
- Auto-layout suggestions
- Layer renaming
- Asset generation
- Image editing
- Production-grade дизайн

**Цена:** $15/мес (per seat)

**Отличие:** Единственный тул, который полноценный профессиональный design tool. AI — дополнение, а не основа.

**Ссылки:** https://figma.com

---

## Сравнительная таблица

| Инструмент | Для кого | Выход | Цена | Статус |
|------------|----------|-------|------|--------|
| **Pencil.dev** | Devs, vibe-coders | Canvas + code | Free + Claude ($20/мес) | Early access |
| **Google Stitch** | Дизайнеры, PM | Canvas, Figma, HTML | Free | V2.0 (2026) |
| **Claude Design** | Команды, дизайнеры | Prototypes, PDF, HTML | Claude subscription | Research preview |
| **OpenAI Codex** | Developers | Production code | $20-200/мес | Stable |
| **v0.dev** | React-разработчики | React + Tailwind code | $20/мес | Stable |
| **Uizard** | Non-designers, PM | Wireframes, prototypes | $12-19/мес | Stable |
| **Figma AI** | Дизайнерские команды | Figma designs | $15/мес/seat | Stable |

---

## Ключевой тренд: DESIGN.md как стандарт

DESIGN.md от Google Labs становится **де-факто стандартом** для описания дизайн-систем в контексте AI. Его поддерживают:
- Google Stitch (нативно)
- Claude Design (через onboarding)
- Cursor, Windsurf, другие AI IDE (чтение из корня)
- OpenAI Codex (контекст для генерации)

Паттерн: один файл в корне → любой AI-агент генерирует согласованный UI.

---

## Источники

- Pencil.dev: https://www.pencil.dev, https://www.banani.co/blog/pencil-dev-review
- DESIGN.md: https://github.com/google-labs-code/design.md
- Google Stitch: https://stitch.withgoogle.com, https://blog.google/innovation-and-ai/models-and-research/google-labs/stitch-ai-ui-design/
- Claude Design: https://www.anthropic.com/news/claude-design-anthropic-labs
- OpenAI Codex: https://developers.openai.com/codex
- v0.dev: https://v0.dev
- Uizard: https://uizard.io
- Figma AI: https://figma.com
