---
title: "Шпаргалка по Git"
description: "Основные команды Git для повседневной работы: ветки, коммиты, rebase, stash, отмена изменений"
---

## Основы

```bash
# Клонировать репозиторий
git clone <url>

# Статус рабочей директории
git status

# Добавить файлы в индекс
git add <file>
git add .                    # все файлы
git add -p                   # интерактивно (по кускам)

# Коммит
git commit -m "message"
git commit --amend           # изменить последний коммит
git commit --amend --no-edit # добавить забытые файлы без смены сообщения
```

## Ветки

```bash
# Создать и переключиться
git checkout -b feature/name

# Переключиться
git switch feature/name

# Список веток
git branch                   # локальные
git branch -a                # все (включая remote)
git branch -d feature/name   # удалить локальную

# Слияние
git merge feature/name       # влить ветку в текущую

# Rebase
git rebase main              # перебазировать на main
git rebase -i HEAD~3         # интерактивный rebase 3 последних коммита
```

## Работа с remote

```bash
git push origin main
git push --force-with-lease   # безопасный force-push
git pull --rebase             # pull с rebase вместо merge
git fetch --prune             # почистить удалённые ветки
```

## Отмена изменений

```bash
# Отменить изменения в файле (до git add)
git checkout -- <file>
git restore <file>

# Убрать файл из индекса (после git add)
git reset HEAD <file>
git restore --staged <file>

# Откатить последний коммит (сохранив изменения)
git reset --soft HEAD~1

# Откатить последний коммит (удалив изменения)
git reset --hard HEAD~1

# Отменить коммит новым коммитом
git revert <commit-hash>
```

## Stash

```bash
git stash                    # спрятать изменения
git stash -m "message"       # с сообщением
git stash pop                # достать последний stash и удалить
git stash apply              # достать последний stash (не удаляя)
git stash list               # список stash-ей
git stash drop stash@{0}     # удалить конкретный stash
```

## Лог и история

```bash
git log --oneline --graph --all
git log -p                   # с диффами
git log --author="name"
git blame <file>             # кто менял каждую строку
git diff                     # изменения в рабочем дереве
git diff --staged            # изменения в индексе
```

## Cherry-pick

```bash
git cherry-pick <commit-hash>
```

## Алиасы (в ~/.gitconfig)

```ini
[alias]
  co = checkout
  br = branch
  ci = commit
  st = status
  lg = log --oneline --graph --all
  unstage = reset HEAD --
  last = log -1 HEAD
```

## Материалы и источники

- [Pro Git Book](https://git-scm.com/book/ru/v2)
- [Oh Shit, Git!?!](https://ohshitgit.com/)
- [Git Cheat Sheet (GitHub)](https://education.github.com/git-cheat-sheet-education.pdf)
