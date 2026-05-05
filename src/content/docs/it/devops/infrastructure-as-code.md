---
title: "Infrastructure as Code (IaC)"
description: "Управление IT-инфраструктурой через код: Terraform, Pulumi, Ansible, OpenTofu, Deckhouse и российские облака"
---

## Что такое Infrastructure as Code

**Infrastructure as Code (IaC)** — подход к управлению IT-инфраструктурой, при котором серверы, базы данных, сети и балансировщики описываются в конфигурационных файлах и разворачиваются автоматически, а не настраиваются вручную через веб-интерфейсы.

Ключевые составляющие IaC:

| Компонент | Роль |
|-----------|------|
| **Конфигурационные файлы** | Описание ресурсов (HCL, YAML, JSON или код на Python/TypeScript) |
| **Git** | Версионирование, audit trail, code review инфраструктуры |
| **IaC-инструмент** | Читает конфигурацию и приводит реальную инфраструктуру к описанному состоянию |
| **State-менеджмент** | Отслеживание фактического состояния ресурсов, обнаружение drift |
| **CI/CD-конвейеры** | Автоматическое тестирование и применение инфраструктурного кода |
| **Модули** | Переиспользуемые компоненты (как библиотеки в программировании) |

### Ключевые принципы

- **Декларативность** — описывается *желаемое* состояние, а не пошаговые команды
- **Идемпотентность** — повторное применение кода не ломает работающую инфраструктуру
- **Воспроизводимость** — один и тот же код создаёт идентичные окружения (dev = staging = prod)
- **Контролируемость** — все изменения в Git, всегда можно откатить
- **Policy-as-Code** — политики безопасности проверяются автоматически (Open Policy Agent, Checkov)

## Три подхода к IaC

### Декларативный

Описывается конечное состояние инфраструктуры — инструмент сам решает, какие ресурсы создать, обновить или удалить.

**Инструменты:** Terraform, OpenTofu, AWS CloudFormation, Crossplane.

**Пример (Terraform):**

```hcl
resource "yandex_compute_instance" "web" {
  name     = "web-server"
  platform = "standard-v2"
  resources {
    cores  = 2
    memory = 4
  }
}
```

### Императивный

Описываются пошаговые действия для достижения состояния.

**Инструменты:** Ansible, Chef, SaltStack.

**Пример (Ansible):**

```yaml
- name: Установить Nginx
  apt:
    name: nginx
    state: present
```

### Гибридный

Программирование на реальных языках (Python, TypeScript, Go) с декларативной моделью инфраструктуры.

**Инструменты:** Pulumi, AWS CDK, CDK for Terraform.

## Топ инструментов IaC (мировые)

### Terraform / OpenTofu

- **Язык:** HCL (HashiCorp Configuration Language)
- **Провайдеров:** 4800+ (AWS, Azure, GCP, Yandex Cloud, VK Cloud, GitHub, Cloudflare и др.)
- **Подход:** декларативный, планирование перед применением (`plan` → `apply`)
- **Лицензия:** Terraform — BSL (ограничения для конкурентов); OpenTofu — MPL 2.0 (полностью открытый форк)
- **Лучше всего для:** Enterprise multi-cloud, сложные облачные инфраструктуры
- **OpenTofu** — форк Terraform, созданный после перехода на BSL-лицензию. Совместим с Terraform-провайдерами и активно используется в России как открытая альтернатива.

### Pulumi

- **Языки:** Python, TypeScript, Go, C#, Java
- **Провайдеров:** 1500+ (включая совместимость с Terraform-провайдерами)
- **Подход:** гибридный
- **Преимущества:** автодополнение в IDE, unit-тесты, циклы и условия на реальном языке
- **Лучше всего для:** команды разработчиков, которые хотят IaC без изучения DSL

### Ansible

- **Язык:** YAML (playbooks)
- **Подход:** императивный, agentless (не требует установки агентов на серверы)
- **Преимущества:** простой порог входа, оркестрация, широкая поддержка модулей
- **Лучше всего для:** конфигурация серверов, автоматизация рутинных задач

### Crossplane

- **Подход:** Kubernetes как control plane для облачной инфраструктуры
- **Модель:** CRD (Custom Resource Definitions) — база данных становится таким же K8s-объектом, как и Pod
- **Статус:** CNCF Incubating
- **Лучше всего для:** платформенная инженерия, GitOps through Kubernetes

### Helm

- **Фокус:** пакетный менеджер для Kubernetes
- **Модель:** Charts — упакованные K8s-приложения с версионированием
- **Интеграция:** ArgoCD, Flux CD (GitOps)
- **Лучше всего для:** управление жизненным циклом K8s-приложений

### Другие инструменты

- **AWS CloudFormation** — нативный IaC для AWS (только AWS, глубоко интегрирован)
- **Chef** — configuration management на Ruby DSL (крутая кривая обучения)
- **SaltStack** — event-driven конфигурация, высокая скорость на тысячах нод
- **Packer** — создание образов виртуальных машин
- **Spacelift / env0** — специализированные платформы CI/CD для инфраструктурного кода

## Российский контекст IaC

### Российские облака с Terraform-провайдерами

Все основные российские облачные платформы поддерживают управление через Terraform и предоставляют официальные провайдеры:

| Платформа | Инструменты | Что есть |
|-----------|-------------|----------|
| **Yandex Cloud** | Terraform, Pulumi, Crossplane | Официальный `yandex-cloud` provider, модули, документация |
| **VK Cloud** | Terraform, Ansible, Packer, Pulumi | Провайдер `vkcs`, примеры манифестов |
| **Selectel** | Terraform | Провайдер `selectel` (на базе OpenStack) |
| **Cloud.ru** (Сбер) | Terraform | Провайдер для облака Сбера |
| **Timeweb Cloud** | Terraform | Провайдер для Timeweb Cloud |
| **K2 Cloud (КРОК)** | Terraform, Ansible | Провайдер + внутренние DevOps-практики |

### Deckhouse Kubernetes Platform (Flant)

**Deckhouse** — российская Kubernetes-платформа с встроенным IaC и GitOps. Ключевые особенности:

- В реестре отечественного ПО с 2021 года
- Сертификация ФСТЭК (октябрь 2024)
- **Deckhouse Virtualization Platform** — управление до 50 000 VM на базе KubeVirt
- Поддержка Astra Linux и air-gapped (изолированных) окружений
- Секреты через IaC, встроенный мониторинг, SDN/SDS
- NoOps-режим: автоматические обновления и исправление уязвимостей

Для организаций с требованиями импортозамещения Deckhouse — наиболее зрелое российское решение в сегменте платформенного IaC.

### OpenTofu как альтернатива Terraform

После смены лицензии Terraform на BSL многие российские команды переходят на **OpenTofu** — полностью открытый форк под лицензией MPL 2.0, совместимый со всеми Terraform-провайдерами (включая российские облака).

## Сценарии использования

### Стартапы и малые команды
Быстрое создание идентичных окружений dev/staging/prod из кода. Один PR — и новое окружение готово.

### Облачные миграции
Перенос инфраструктуры между облаками через единый код (Terraform с разными провайдерами).

### CI/CD для инфраструктуры
Инфраструктурный код тестируется и применяется в пайплайне вместе с кодом приложения. Изменения проходят code review перед применением.

### Восстановление после сбоев
Вся инфраструктура описана в коде — при аварии она восстанавливается одной командой, а не многочасовым ручным восстановлением.

### Комплаенс и аудит
Все изменения инфраструктуры задокументированы в Git — полный audit trail.

## Best Practices

1. **Весь код в Git** — никаких ручных правок в продакшене
2. **Модульность** — выделяйте переиспользуемые компоненты (VPC, кластер БД, балансировщик)
3. **GitOps** — изменения инфраструктуры через PR и code review
4. **Тестирование инфраструктуры** — Checkov для security-политик, Terratest для интеграционных тестов
5. **Drift detection** — регулярная проверка расхождения кода и реальной инфраструктуры
6. **Минимальные привилегии** — IaC-раннеры с минимально необходимыми правами
7. **Документируйте код** — README для модулей, осмысленные имена ресурсов

## Сравнение с хостинг-платформами (PaaS)

IaC отличается от PaaS ([хостинг и деплой](./hosting-deploy.md)) уровнем абстракции:

| | IaC | PaaS (Railway, Vercel) |
|---|---|---|
| **Уровень управления** | Инфраструктура (VM, сети, диски) | Приложение (код → работающий сервис) |
| **Гибкость** | Полный контроль | Ограничен платформой |
| **Порог входа** | Требует DevOps-компетенций | Минимальный |
| **Типичный пользователь** | DevOps/SRE/Platform Engineer | Разработчик |

На практике IaC и PaaS часто используются вместе: Terraform поднимает облачную инфраструктуру, а Railway или Vercel деплоят на неё приложение.

## Материалы и источники

- [IBM — What is Infrastructure as Code](https://www.ibm.com/think/topics/infrastructure-as-code)
- [AWS — What is IaC](https://aws.amazon.com/what-is/iac/)
- [Red Hat — What is Infrastructure as Code](https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac)
- [Firefly — 6 Actionable IaC Tips for 2025](https://www.firefly.ai/blog/6-actionable-iac-tips-for-cloud-practitioners-in-2025)
- [Apiiro — Best IaC Tools](https://apiiro.com/blog/best-iac-tools/)
- [Spacelift — Infrastructure as Code Tools](https://spacelift.io/blog/infrastructure-as-code-tools)
- [EITT Academy — Terraform vs Pulumi vs OpenTofu 2026](https://eitt.academy/knowledge-base/terraform-vs-pulumi-vs-opentofu-iac-comparison-2026/)
- [dasroot — Terraform Ansible Pulumi сравнение 2026](https://dasroot.net/posts/2026/03/terraform-ansible-pulumi-iac-tool-comparison-2026/)
- [Yandex Cloud — Инструменты управления облаком](https://yandex.cloud/ru/blog/cloud-control-tools)
- [Timeweb Cloud — Infrastructure as Code](https://timeweb.cloud/blog/infrastructure-as-code-iac)
- [GM Insights — IaC Market Analysis](https://www.gminsights.com/ru/industry-analysis/infrastructure-as-code-market)
- [Quali — Top IaC Tools for 2025](https://www.quali.com/blog/top-infrastructure-as-code-iac-tools-for-2025/)
