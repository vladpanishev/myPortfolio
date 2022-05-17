const { watch, series, parallel } = require('gulp'); // методы пакета GULP
const browserSync = require('browser-sync').create(); // автообновление браузера

// Конфигурация
const path = require('./config/path.js');
const app = require('./config/app.js');

// Задачи
const clear = require('./task/clear.js');
const html = require('./task/html.js');
const scss = require('./task/scss.js');
const js = require('./task/js.js');
const img = require('./task/img.js');
const font = require('./task/font.js');
const favicon = require('./task/favicon.js');

// Сервер browserSync
const server = () => {
  browserSync.init({
    server: {
      baseDir: path.root,
    },
    notify: false,
  });
};

// Наблюдение за файлами
const watcher = () => {
  watch(path.html.watch, html).on('all', browserSync.reload);
  watch(path.scss.watch, scss).on('all', browserSync.reload);
  watch(path.js.watch, js).on('all', browserSync.reload);
  watch(path.img.watch, img).on('all', browserSync.reload);
  watch(path.font.watch, font).on('all', browserSync.reload);
  watch(path.favicon.watch, favicon).on('all', browserSync.reload);
};

// Сборка проекта
const build = series(clear, parallel(html, scss, js, img, font, favicon));

// Сервер и наблюдение
const dev = series(build, parallel(watcher, server));

// Задачи
exports.html = html; // отдельный вызов HTML-задач
exports.scss = scss; // отдельный вызов CSS-задач
exports.js = js; // отдельный вызов JavaScript-задач
exports.img = img; // отдельный вызов img-задач
exports.font = font; // отдельный вызов font-задач
exports.favicon = favicon; // отдельный вызов favicon-задач

// Задачи сборки
exports.dev = dev; // задача для запуска сервера и наблюдения
exports.build = build; // задача для сборки всех файлов нашего проекта

exports.default = app.isProd ? build : dev;
