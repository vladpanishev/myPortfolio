const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const babel = require('gulp-babel'); // babel - позволяет использовать все последние возможности JavaScript
const uglify = require('gulp-uglify'); // минифицирует/сжимает JavaScript-код
const rename = require('gulp-rename'); // Переименование файлов
const gulpif = require('gulp-if'); // Выбирает какие плагины будут работать во время разработки, а какие во время продакшенаgulp

// JavaScript
const js = () => {
  return src(path.js.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'JavaScript',
          message: error.message,
        })),
      })
    )
    .pipe(babel())
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif(app.isProd, uglify()))
    .pipe(dest(path.js.dest, { sourcemaps: app.isDev }));
};

module.exports = js;
