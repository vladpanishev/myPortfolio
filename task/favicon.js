const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const favicons = require('gulp-favicons'); // Создание favicon под все устройства
const filter = require('gulp-filter'); // Выносит основные favicon-файлы в корень проекта

// Favicon
const favicon = () => {
  return src(path.favicon.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'FAVICON',
          message: error.message,
        })),
      })
    )
    .pipe(dest(path.favicon.dest))
    .pipe(favicons(app.favicons))
    .pipe(dest(path.favicon.dest))
    .pipe(filter(['favicon.ico', 'apple-touch-icon.png', 'manifest.json']))
    .pipe(dest(path.root));
};

module.exports = favicon;
