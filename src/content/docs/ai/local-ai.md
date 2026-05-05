---
title: "Локальные AI-модели: Ollama, LM Studio"
description: "Запуск AI-моделей локально на своём компьютере: Ollama, LM Studio, Open WebUI, llama.cpp — настройка, модели, сценарии"
---

## Зачем запускать AI локально

Локальный запуск LLM даёт:
- **Приватность** — данные не покидают компьютер
- **Отсутствие цензуры** — нет модерации ответов
- **Бесплатно** — без подписок и платы за токены
- **Offline** — работает без интернета

Минусы:
- Нужна мощная GPU (VRAM 8GB+ для хороших моделей)
- Модели слабее облачных GPT-4o и Claude
- Нет веб-поиска, плагинов и экосистемы

---

## Инструменты для локального запуска

### Ollama
- **Тип:** CLI + API для запуска LLM
- **Платформы:** macOS, Linux, Windows
- **Ключевые фичи:**
  - Простая установка (`brew install ollama`)
  - Огромная библиотека моделей (Llama 4, Mistral, DeepSeek, Qwen, Gemma, Phi)
  - REST API (совместим с OpenAI API)
  - Modelfile — кастомизация системного промпта
  - Поддержка GPU (Metal на Mac, CUDA на NVIDIA)
- **Плюсы:** простота, богатая библиотека, API
- **Цена:** бесплатно, open-source

```bash
# Установка
brew install ollama

# Запуск модели
ollama run llama4
ollama run deepseek-r1
ollama run mistral
```

### LM Studio
- **Тип:** GUI-приложение для запуска LLM
- **Платформы:** macOS, Windows, Linux
- **Ключевые фичи:**
  - Графический интерфейс для скачивания и запуска моделей
  - Чат-интерфейс
  - Локальный сервер (OpenAI-совместимый API)
  - Автоматический подбор квантизации под VRAM
  - Поддержка GPU-ускорения
- **Плюсы:** простой GUI, не нужен терминал
- **Минусы:** не open-source, проприетарный
- **Цена:** бесплатно

### Open WebUI
- **Тип:** веб-интерфейс для Ollama и OpenAI API
- **Платформы:** Docker (любая OS)
- **Ключевые фичи:**
  - Чат-интерфейс как у ChatGPT
  - Множественные модели
  - RAG (загрузка документов)
  - Сохранение истории
  - Multi-user (для компаний)
- **Плюсы:** лучший интерфейс для локальных моделей
- **Цена:** бесплатно, open-source

### llama.cpp
- **Тип:** C/C++ библиотека для инференса LLM
- **Платформы:** macOS, Linux, Windows
- **Ключевые фичи:**
  - Максимальная производительность на CPU и GPU
  - Квантизация (1-8 бит)
  - Минимальные зависимости
- **Плюсы:** работает на любом железе, основа большинства локальных решений
- **Цена:** бесплатно, open-source

---

## Популярные модели для локального запуска (2026)

| Модель | Размер | VRAM | Качество | Для чего |
|--------|--------|------|----------|----------|
| **Llama 4 Scout** | 17B (109B MoE) | 8-16 GB | ★★★★ | Универсальная |
| **Llama 4 Maverick** | 17B (400B MoE) | 16-24 GB | ★★★★★ | Сложные задачи |
| **Mistral Large** | 123B | 24+ GB | ★★★★★ | Анализ, код |
| **Qwen 3 32B** | 32B | 16-24 GB | ★★★★ | Кодинг, рассуждения |
| **Phi-4** | 14B | 8 GB | ★★★ | Быстрый, на слабом железе |
| **Gemma 3 27B** | 27B | 16 GB | ★★★★ | Универсальная |
| **DeepSeek-R1 Distill** | 7-70B | 4-32 GB | ★★★★ | Reasoning |

## Требования к железу

| VRAM | Что запустится |
|------|---------------|
| 4 GB | Phi-4, Gemma 3 4B, Qwen 3 7B (q4) |
| 8 GB | Llama 4 Scout (q4), Qwen 3 14B (q4) |
| 16 GB | Llama 4 Scout, Mistral Small, Gemma 3 27B |
| 24 GB | Llama 4 Maverick, Mistral Large (q4) |
| 32+ GB | Всё, включая большие квантизации |

> Apple Silicon Mac (M1-M4) с unified memory особенно хороши для локального запуска — можно использовать почти всю RAM как VRAM.

## Типичная настройка

```bash
# 1. Ollama + Open WebUI (рекомендуемый стек)
brew install ollama
ollama serve &
ollama pull llama4-scout
ollama pull deepseek-r1:7b

# Docker для Open WebUI
docker run -d -p 3000:8080 \
  -v open-webui:/app/backend/data \
  --name open-webui \
  ghcr.io/open-webui/open-webui:main

# 2. Открыть http://localhost:3000
```

## Сценарии использования

| Задача | Рекомендация |
|--------|-------------|
| Первый запуск | LM Studio — простой GUI |
| Разработка, API | Ollama + Open WebUI |
| Слабое железо | Phi-4 (4GB VRAM) |
| Кодинг | DeepSeek-R1, Qwen 3 |
| Анализ документов | Llama 4 Scout |
| Приватный чат для команды | Open WebUI (multi-user) |
| Максимальное качество | Llama 4 Maverick (24GB+) |

## Материалы и источники

- [Ollama Documentation](https://github.com/ollama/ollama)
- [LM Studio](https://lmstudio.ai/)
- [Open WebUI](https://github.com/open-webui/open-webui)
- [llama.cpp](https://github.com/ggerganov/llama.cpp)
- [Хабр — AI инструменты](https://habr.com/ru/articles/948672/)
- [Bothub обзор](https://habr.com/ru/companies/bothub/articles/992038/)
