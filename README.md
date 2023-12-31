# Sapphire

### Ссылки на проект:

- [stage.sapphire.pet-project.habr.com](https://stage.sapphire.pet-project.habr.com)
- [sapphire.pet-project.habr.com](https://sapphire.pet-project.habr.com)

[Бекенд репозиторий](https://github.com/habralab/sapphire-team-back)  
[Figma](https://www.figma.com/file/0NelvdkD6gTqKrWfRYydI2/)  
[Task manager](https://tree.taiga.io/project/olegyurchik-sapphire-habr/timeline)

Установка зависимостей:

```
yarn
```

Разработка проекта:

```
yarn dev
```

### Запуск тестов

Когда необходимо запустить тесты один раз:

```
yarn test
```

Когда разрабатываем тесты и реализуем их:

```
yarn test:watch
```

### Качество кода

Качество кода проверяется такие инструментами как prettier, eslint, tsc.

IDE автоматически показывает эти ошибки. Если есть возможность, то prettier и eslint ошибки исправляются в момент сохранения файла, а также в момент коммита.

typescript ошибки необходимо исправлять самому, т.к. только мы ведуем про типизацию.

### Запускаем локально (переносы строк - оставляем только lf)

git config --global core.autocrlf false

git rm --cached -r .

git reset --hard HEAD

git config core.ignorecase false
