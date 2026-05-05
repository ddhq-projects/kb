# Infrastructure as Code (IaC) — Полный обзор

> Дата сбора: 2026-05-05

---

## Что такое Infrastructure as Code

**Infrastructure as Code (IaC)** — подход к управлению и предоставлению IT-инфраструктуры через конфигурационные файлы и код вместо ручных процессов. IaC позволяет описывать всю инфраструктуру (серверы, базы данных, сети, балансировщики нагрузки) как текстовые файлы, которые версионируются и развёртываются автоматически.

---

## Составляющие IaC

| Компонент | Описание |
|-----------|----------|
| **Конфигурационные файлы** | Текстовые описания инфраструктурных ресурсов и их параметров (HCL, YAML, JSON) |
| **Система контроля версий** | Git и аналоги — отслеживание изменений инфраструктуры |
| **Инструменты автоматизации** | Специализированное ПО (Terraform, Ansible, Pulumi), читающее конфигурации и создающее ресурсы |
| **CI/CD конвейеры** | Интеграция инфраструктурного кода с процессами тестирования и развёртывания |
| **Управление состоянием (state)** | Отслеживание реальной инфраструктуры относительно кода, обнаружение drift |
| **Модули** | Переиспользуемые компоненты инфраструктурного кода |

---

## Особенности IaC

- **Декларативность** — описывается желаемое состояние, а не пошаговые команды
- **Воспроизводимость** — один и тот же код всегда создаёт идентичные окружения
- **Модульность** — код организуется в переиспользуемые компоненты
- **Контролируемость** — все изменения видны, отслеживаются и могут быть откачены
- **Автоматизация** — исключает ручные настройки и снижает вероятность ошибок
- **Идемпотентность** — повторное применение кода даёт тот же результат
- **Policy-as-Code** — соблюдение политик безопасности через код (OPA, Checkov)

---

## Сценарии использования

1. **Стартапы** — быстрое создание идентичных окружений dev/staging/prod
2. **Облачные инфраструктуры** — автоматическое управление VM, сетями, хранилищами в AWS, Azure, GCP и др.
3. **Непрерывное развёртывание (CI/CD)** — автоматическое тестирование и развёртывание инфраструктуры вместе с кодом приложения
4. **Масштабирование** — создание дополнительных идентичных окружений по мере роста нагрузки
5. **Восстановление после сбоев** — быстрое восстановление инфраструктуры из кода при аварии
6. **Комплаенс и аудит** — все изменения задокументированы через Git

---

## Подходы к IaC

| Подход | Описание | Примеры |
|--------|----------|---------|
| **Декларативный** | Описывается желаемое конечное состояние; инструмент сам определяет, что создать/изменить | Terraform, CloudFormation, Crossplane |
| **Императивный** | Описываются конкретные шаги/команды для достижения состояния | Ansible, Chef, SaltStack |
| **Гибридный** | Программные языки + декларативный фреймворк | Pulumi |

---

## Топ инструментов IaC (English / Мировые)

### 1. Terraform / OpenTofu
- **Язык:** HCL / JSON
- **Фокус:** Multi-cloud provisioning
- **Провайдеры:** 4800+
- **Преимущества:** Огромная экосистема, state management, план/применение
- **Лицензия:** Terraform — BSL; OpenTofu — MPL 2.0 (open-source форк)
- **Лучше всего для:** Enterprise multi-cloud

### 2. Pulumi
- **Язык:** Python, TypeScript, Go, C#, Java
- **Фокус:** IaC с реальными языками программирования
- **Провайдеры:** 1500+ (включая Terraform bridge)
- **Преимущества:** IDE-поддержка, unit/integration тесты, гибкость
- **Лицензия:** Apache 2.0
- **Лучше всего для:** Команды разработчиков

### 3. Ansible
- **Язык:** YAML (playbooks)
- **Фокус:** Configuration management (agentless)
- **Преимущества:** Не требует агентов, простота освоения, оркестрация
- **Лицензия:** Open source (GPL)
- **Лучше всего для:** Конфигурация серверов и оркестрация

### 4. AWS CloudFormation
- **Язык:** JSON / YAML
- **Фокус:** AWS-native IaC
- **Преимущества:** Глубокая интеграция с AWS, drift detection, rollback
- **Ограничения:** Только AWS
- **Лучше всего для:** AWS-only окружения

### 5. Crossplane
- **Фокус:** Kubernetes как control plane для инфраструктуры
- **Преимущества:** Multi-cloud через K8s CRDs, continuous reconciliation, GitOps
- **Статус:** CNCF Incubating
- **Лучше всего для:** K8s-тяжёлые команды, платформенная инженерия

### 6. Helm
- **Фокус:** Kubernetes package manager
- **Преимущества:** Charts для приложения, версионирование, интеграция с ArgoCD
- **Ограничения:** Только Kubernetes
- **Лучше всего для:** Жизненный цикл K8s-приложений

### 7. Chef
- **Язык:** Ruby DSL
- **Фокус:** Configuration management
- **Преимущества:** Cookbooks/recipes для серверов, compliance
- **Ограничения:** Крутая кривая обучения Ruby

### 8. SaltStack (Salt)
- **Язык:** YAML (states), Jinja
- **Фокус:** Event-driven config + remote execution
- **Преимущества:** High-speed scaling (ZeroMQ), тысячи нод
- **Ограничения:** Сложность отладки

### Дополнительные инструменты
- **Packer** — создание образов VM
- **Consul** — service discovery и configuration
- **CDK (AWS CDK, CDK for Terraform)** — IaC через реальные языки
- **Spacelift** — платформа управления IaC (CI/CD для инфраструктуры)
- **env0** — аналогичная платформа для IaC workflows

---

## Топ инструментов IaC (Россия / Российские решения)

> Полностью российских IaC-инструментов немного; чаще используются open-source решения с локальными провайдерами.

### Облачные платформы с IaC-поддержкой

| Платформа | IaC-инструменты | Провайдеры/Интеграции |
|-----------|-----------------|----------------------|
| **Yandex Cloud** | Terraform, Pulumi, Crossplane | Официальный `yandex-cloud` provider, готовые модули |
| **VK Cloud** | Terraform, Ansible, Packer, Pulumi | `vkcs` provider, примеры манифестов |
| **Selectel** | Terraform | `selectel` provider (OpenStack-based) |
| **Timeweb Cloud** | Terraform | Провайдер для Timeweb Cloud |
| **Cloud.ru** | Terraform | Провайдер для Сбербанковского облака |
| **K2 Cloud (КРОК)** | Terraform, Ansible | Провайдер + внутренние DevOps-практики |

### Отечественные решения

1. **Deckhouse Kubernetes Platform (Flant)**
   - Российская Kubernetes-платформа с IaC/GitOps
   - Virtualization Platform на базе KubeVirt (до 50,000 VM)
   - В реестре отечественного ПО с 2021, сертификация ФСТЭК (октябрь 2024)
   - Поддержка Astra Linux, air-gapped режим
   - Секреты через IaC, мониторинг, SDN/SDS

2. **Колибри-АРМ**
   - Автоматизация администрирования
   - Импортозамещение для IT-инфраструктуры

3. **RedLab**
   - Комбинация Ansible/Terraform для облачных задач

### Open-source с российской адаптацией
- **OpenTofu** — open-source форк Terraform, используется вместо BSL-версии
- **KubeVirt** — Kubernetes-native VM management (интегрирован в Deckhouse)

---

## Best Practices

1. **Version control** — весь инфраструктурный код в Git
2. **Модульность** — переиспользуемые модули
3. **GitOps/CI/CD** — автоматизация через pipelines
4. **Тестирование** — Terratest, Checkov, policy-as-code
5. **Drift detection** — автоматическое обнаружение и исправление расхождений
6. **Минимальные привилегии** — принцип least privilege в инфраструктурном коде
7. **Документация** — самодокументируемый код + README для модулей

---

## Источники

- https://www.ibm.com/think/topics/infrastructure-as-code
- https://aws.amazon.com/what-is/iac/
- https://www.redhat.com/en/topics/automation/what-is-infrastructure-as-code-iac
- https://www.firefly.ai/blog/6-actionable-iac-tips-for-cloud-practitioners-in-2025
- https://apiiro.com/blog/best-iac-tools/
- https://spacelift.io/blog/infrastructure-as-code-tools
- https://eitt.academy/knowledge-base/terraform-vs-pulumi-vs-opentofu-iac-comparison-2026/
- https://dasroot.net/posts/2026/03/terraform-ansible-pulumi-iac-tool-comparison-2026/
- https://yandex.cloud/ru/blog/cloud-control-tools
- https://timeweb.cloud/blog/infrastructure-as-code-iac
- https://www.gminsights.com/ru/industry-analysis/infrastructure-as-code-market
- https://www.quali.com/blog/top-infrastructure-as-code-iac-tools-for-2025/
