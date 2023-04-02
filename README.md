<div>
<h1>Приложение: 'Анекдоты'</h1>
<a href="https://vladislavserkir.github.io/anekdotes-app/">
</a>

![2023-04-02_21-10-37](https://user-images.githubusercontent.com/83783362/229370957-890fd57c-a1ab-41a1-b51c-fbf3df8e23a9.png)

Вашему вниманию представляется приложение с развлекательными анекдотами. Интересующие вас анекдоты можно сразу найти по взаимосвязанному фильтру и поиску.

## Технологии в проекте
Для написания проекта использовалась библиотека **React**, в основе проекта лежит сборка **Create React App** с флагом -template ts для возможности компиляции файлов компонентов с разметкой и простых файлов с **JS в TypeScript**. 
* Для написания структуры стилей использовалась БЭМ методология, стили написаны на **SCSS**, который предлагает более удобный и интуитивно понятный синтаксис для понимания и реализации адаптивности на разных расширениях. **Решено не использовать modules** для уменьшения импортов в компоненты и невозможностью написания полноценных селекторов по БЭМ.
* Поиск анекдотов по фильтрам и поиску строится на основе запуска функции **useEffect** каждый раз когда один из параметров поиска меняется. Для сокращения количества запросов к серверу при изменении исходных данных внутри хука реализован паттерн **Props Bounce**. Он позволяет записывать в состояние данные с задержкой, что сокращает количество запросов к серверу.
* В качестве **API JSON сервера** для хранения базы данных на данном этапе выбран **RTMP server**. Для полноценной работы приложения небходимо скачать содежимое папки server и непосредственно запустить на локальном компьютере с помощью команды **npm run start**.
* Для запросов к серверу использовалась библиотека **axios** с удобным синтаксисом конфигурирования запросов.
* Приложение имеет каскадную структуру компонентов с разметкой, где головной компонент App рендерится в корневой блок div .
* Для удобного отображения блоков с анекдотами реализована **пагинация** через хук **usePagination**. 
* Для управления состоянием приложения использовался **React Redux Toolkit** с использованием функции **createSlice** для автоматического создания экшенов и их последующей удобной типизации.

## Реализация

Приложение разделено на 2 части:
* Блок с исходными данными в виде формы. 
* Блок с результатами и пагинацией.

![Запись экрана 2023-04-02 в 21 42 20](https://user-images.githubusercontent.com/83783362/229372711-7d215805-244f-4ae2-a61c-89723cb9eef6.gif)

## Технологии

<div align="left">
  <br/>
  <img src="https://github.com/devicons/devicon/blob/master/icons/html5/html5-original.svg" title="HTML5" alt="HTML" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/sass/sass-original.svg"  title="SASS" alt="SASS" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/react/react-original-wordmark.svg" title="React" alt="React" width="40" height="40"/>&nbsp;
  <img src="https://github.com/devicons/devicon/blob/master/icons/typescript/typescript-plain.svg" title="TypeScript" alt="TypeScript" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/javascript/javascript-plain.svg" title="JavaScript" alt="JavaScript" width="40" height="40"/>&nbsp;
    <img src="https://github.com/devicons/devicon/blob/master/icons/redux/redux-original.svg" title="Redux" alt="Redux" width="40" height="40"/>&nbsp;
</div>

## Установка, настройка
Проект, развернутый на Github:  [GitHub Pages](https://vladislavserkir.github.io/anekdotes-app/)
- Установка зависимостей: `npm install`
- Режим разработки: `npm run dev`
- Запуск сервера: `npm run start` в директории **server**
- Сформировать проект для последующего размещения на ресурсах: `npm run build`
- Сформировать заново проект для отображения на GitHub pages: `npm run deploy`
## Написать мне
[![github](https://img.shields.io/badge/GitHub-000000?style=for-the-badge&logo=github)](https://github.com/VladislavSerKir)
[![telegram](https://img.shields.io/badge/Telegram-68c4f0?style=for-the-badge&logo=telegram)](https://t.me/vl_kireev)

</div>
<hr>
