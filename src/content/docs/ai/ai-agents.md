---
title: "AI-агенты и автоматизация"
description: "Обзор AI-агентов и платформ для автоматизации: AutoGPT, CrewAI, n8n с AI, Make с AI, Relevance AI — возможности, сценарии, цены"
---

## Что такое AI-агенты

AI-агенты — это автономные системы на базе LLM, которые могут выполнять многошаговые задачи без постоянного участия человека: собирают данные, принимают решения, вызывают инструменты и API.

## Типы AI-агентов

### 1. Исследовательские агенты (Deep Research)
Автономно собирают информацию из интернета, анализируют и формируют отчёт.
- **ChatGPT Deep Research** — встроен в ChatGPT Pro ($200/мес)
- **Gemini Deep Research** — доступен в Gemini Advanced
- **Perplexity Deep Research** — в Perplexity Pro
- **OpenScholar** — академический AI-исследователь с цитированием

### 2. No-code AI-агенты
Платформы для создания агентов без кода, через визуальный интерфейс.

#### n8n + AI
- **Тип:** open-source no-code автоматизация
- **AI-возможности:** LangChain nodes, LLM calls, RAG, embeddings
- **Плюсы:** self-hosted, гибкая логика, большая библиотека интеграций
- **Цена:** Self-hosted — бесплатно (до 2.5K выполнений), Cloud — от €20/мес

#### Make (Integromat) + AI
- **Тип:** cloud no-code автоматизация
- **AI-возможности:** OpenAI/Gemini модули, RAG, анализатор текста
- **Плюсы:** визуальный редактор, 1800+ интеграций, проще чем n8n
- **Цена:** Free / Core $9/мес / Pro $18/мес

#### Relevance AI
- **Тип:** платформа AI-агентов
- **Фичи:** AI-команда, autonomous agents, bulk processing
- **Плюсы:** низкий порог входа, шаблоны агентов
- **Цена:** Free / Pro $19/мес / Business $39/мес

### 3. Фреймворки для AI-агентов (для разработчиков)

#### CrewAI
- **Тип:** Python-фреймворк для multi-agent систем
- **Концепция:** агенты с ролями, задачами, инструментами
- **Плюсы:** понятная абстракция (Agents → Tasks → Crew), интеграция с LangChain
- **Сценарии:** автоматизация создания контента, исследование рынка, customer support
- **Цена:** Open-source / Enterprise

#### AutoGPT
- **Тип:** автономный AI-агент
- **Плюсы:** полностью автономен, self-prompting, веб-поиск
- **Минусы:** нестабилен, зацикливается, высокие затраты токенов
- **Цена:** Open-source, бесплатно
- **Статус:** больше экспериментальный, чем production-ready

#### LangChain / LangGraph
- **Тип:** фреймворк для LLM-приложений и агентов
- **Фичи:** chains, agents, tools, RAG, LangGraph для сложных графов
- **Плюсы:** самая большая экосистема, Python + JS
- **Цена:** Open-source / LangSmith (наблюдаемость) — платно

#### OpenAI Agents SDK
- **Тип:** официальный SDK для агентов от OpenAI
- **Фичи:** Swarm, Guardrails, handoffs между агентами
- **Плюсы:** нативная интеграция с OpenAI, простота
- **Цена:** бесплатно (плата только за API-вызовы)

### 4. Бизнес-AI-агенты

#### HubSpot AI (Breeze)
- **Тип:** AI-агент в CRM
- **Фичи:** AI-копирайтинг, квалификация лидов, чат-боты
- **Цена:** включён в HubSpot (платные тарифы от $50/мес)

#### Salesforce Einstein GPT
- **Тип:** AI-агент для Salesforce
- **Фичи:** генерация писем, предсказания продаж, customer service
- **Цена:** в составе Salesforce (~$25-300+/чел/мес)

#### Intercom Fin
- **Тип:** AI-агент поддержки
- **Фичи:** отвечает на вопросы клиентов из базы знаний
- **Плюсы:** низкий порог, интеграция с Zendesk, Salesforce
- **Цена:** от $0.99 за разрешённый диалог

## Сравнительная таблица

| Инструмент | Тип | Пользователь | Цена | Open-source |
|-----------|-----|-------------|------|-------------|
| n8n + AI | No-code | Технический | free / €20+/мес | ✅ |
| Make + AI | No-code | Любой | free / $9+/мес | ❌ |
| Relevance AI | Платформа | Любой | free / $19+/мес | ❌ |
| CrewAI | Фреймворк | Разработчик | free | ✅ |
| AutoGPT | Агент | Разработчик | free | ✅ |
| LangChain | Фреймворк | Разработчик | free | ✅ |
| HubSpot Breeze | CRM-агент | Бизнес | от $50/мес | ❌ |
| Intercom Fin | Support-агент | Бизнес | $0.99/диалог | ❌ |

## Рекомендации по сценариям

| Задача | Рекомендация |
|--------|-------------|
| Автоматизация процессов компании | n8n или Make с AI-модулями |
| Быстрый AI-агент без кода | Relevance AI |
| Multi-agent система на Python | CrewAI |
| Сложные LLM-пайплайны | LangChain / LangGraph |
| Автономный исследователь | ChatGPT Deep Research, Gemini Deep Research |
| AI-поддержка клиентов | Intercom Fin |
| AI в CRM | HubSpot Breeze |

## Материалы и источники

- [VC.ru — 40 лучших ИИ инструментов 2025](https://vc.ru/ai/1735732-40-luchshih-ii-instrumentov-i-neirosetei-v-2025-godu)
- [Lindy AI — AI Platforms Overview](https://www.lindy.ai/blog/ai-platforms)
- [Zapier — Best AI Productivity Tools](https://zapier.com/blog/best-ai-productivity-tools/)
- [n8n Documentation](https://docs.n8n.io/)
- [CrewAI Documentation](https://docs.crewai.com/)
