const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const concat = require('gulp-concat'); // Объединение CSS-файлов в один файл
const cssimport = require('gulp-cssimport'); // Импортирование CSS-файлов в нужной нам последовательности
const autoprefixer = require('gulp-autoprefixer'); // Добавление вендорных преффиксов к CSS-свойствам
const csso = require('gulp-csso'); // Сжатие/минификация CSS-файла (удаление пробелов)
const rename = require('gulp-rename'); // Переименование файлов
const size = require('gulp-size'); // Показывает размер файла
const shorthand = require('gulp-shorthand'); // Переводит CSS-свойства  в краткую форму
const groupCssMediaQueries = require('gulp-group-css-media-queries'); // Показывает размер файла
const webpCss = require('gulp-webp-css'); // Позволяет использовать webp изображения в CSS

// Обработка CSS
const css = () => {
  return src(path.css.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'CSS',
          message: error.message,
        })),
      })
    )
    .pipe(concat('style.css'))
    .pipe(cssimport())
    .pipe(webpCss())
    .pipe(autoprefixer())
    .pipe(groupCssMediaQueries())
    .pipe(shorthand())
    .pipe(size({ title: 'style.css' }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(csso())
    .pipe(size({ title: 'style.min.css' }))
    .pipe(dest(path.css.dest, { sourcemaps: app.isDev }));
};

module.exports = css;
