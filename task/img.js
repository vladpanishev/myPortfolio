const { src, dest } = require('gulp'); // методы пакета GULP

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Плагины
const plumber = require('gulp-plumber'); // Перехват ошибок и более наглядный их вывод
const notify = require('gulp-notify'); // Уведомление об ошибке в виде всплывающих сообщений
const imagemin = require('gulp-imagemin'); // Минификация изображений
const newer = require('gulp-newer'); // Обробатывает только те изображения, которые ещё небыли сжаты
const webp = require('gulp-webp'); // Конвертирование изображений в формат webp
const gulpif = require('gulp-if'); // Выбирает какие плагины будут работать во время разработки, а какие во время продакшена

// IMG
const img = () => {
  return src(path.img.src)
    .pipe(
      plumber({
        errorHandler: notify.onError((error) => ({
          title: 'IMG',
          message: error.message,
        })),
      })
    )
    .pipe(newer(path.img.dest))
    .pipe(webp())
    .pipe(dest(path.img.dest))
    .pipe(src(path.img.src))
    .pipe(newer(path.img.dest))
    .pipe(gulpif(app.isProd, imagemin(app.imagemin)))
    .pipe(dest(path.img.dest));
};

module.exports = img;
