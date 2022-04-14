const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const newer = require('gulp-newer'); // Обробатывает только те шрифты, которые ещё небыли обработаны
const fonter = require('gulp-fonter'); // Конвертирует шрифты
const ttf2woff2 = require('gulp-ttf2woff2'); // Конвертирует шрифты форма woff2

// Обработка Font
const font = () => {
  return src(path.font.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'Font',
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.font.dest))
    .pipe(fonter(app.fonter))
    .pipe(dest(path.font.dest))
    .pipe(ttf2woff2())
    .pipe(dest(path.font.dest));
};

module.exports = font;
