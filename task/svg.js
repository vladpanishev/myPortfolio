const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const svgSprite = require('gulp-svg-sprite'); // создание SVG спрайтов

// Обработка img
const svg = () => {
  return src(path.svg.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'SVG',
          message: error.message,
        })),
      })
    )
    .pipe(svgSprite(app.svgSprite))
    .pipe(dest(path.img.dest));
};

module.exports = svg;
