const del = require('del');

// Конфигурация
const path = require('../config/path.js');
const app = require('../config/app.js');

// Удаление директорий
const clear = () => {
  return del(path.root);
};

module.exports = clear;
