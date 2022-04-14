const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const pugs = require('gulp-pug'); // Шаблонизатор HTML
const webpHtml = require('gulp-webp-html'); // Автоматически оборачивает изображения в конструкцию picture
const prettyHtml = require('gulp-pretty-html'); // Убирает минификацию и разворачивает код

// Обработка PUG
const pug = () => {
  return src(path.pug.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Pug',
          message: error.message,
        })),
      })
    )

    .pipe(pugs(app.pug))
    .pipe(webpHtml())
    .pipe(prettyHtml())
    .pipe(dest(path.pug.dest));
};

module.exports = pug;
