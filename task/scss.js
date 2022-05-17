const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const sass = require('gulp-sass')(require('sass')); // Препроцессор и компилятор SASS
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const autoprefixer = require('gulp-autoprefixer'); // Добавление вендорных преффиксов к CSS-свойствам
const csso = require('gulp-csso'); // Сжатие/минификация CSS-файла (удаление пробелов)
const rename = require('gulp-rename'); // Переименование файлов
const size = require('gulp-size'); // Показывает размер файла
const shorthand = require('gulp-shorthand'); // Переводит CSS-свойства  в краткую форму
const groupCssMediaQueries = require('gulp-group-css-media-queries'); // Показывает размер файла
const sassGlob = require('gulp-sass-glob'); // Импортирование SASS-файлов через специальные маски (чтобы не импортировать каждый файл отдельно)
const webpCss = require('gulp-webp-css'); // Позволяет использовать webp изображения в CSS
const gulpif = require('gulp-if'); // Выбирает какие плагины будут работать во время разработки, а какие во время продакшена

// SCSS
const scss = () => {
  return src(path.scss.src, { sourcemaps: app.isDev })
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'SCSS',
          message: error.message,
        })),
      })
    )
    .pipe(sassGlob())
    .pipe(sass())
    .pipe(webpCss())
    .pipe(gulpif(app.isProd, autoprefixer()))
    .pipe(groupCssMediaQueries())
    .pipe(shorthand())
    .pipe(size({ title: 'style.css' }))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }))
    .pipe(rename({ suffix: '.min' }))
    .pipe(gulpif(app.isProd, csso()))
    .pipe(size({ title: 'style.min.css' }))
    .pipe(dest(path.scss.dest, { sourcemaps: app.isDev }));
};

module.exports = scss;
