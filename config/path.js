const pathSrc = './src';
const pathDest = './dist';

module.exports = {
  root: pathDest,

  html: {
    src: pathSrc + '/html/**/*.html',
    watch: pathSrc + '/html/**/*.html',
    dest: pathDest,
  },

  scss: {
    src: pathSrc + '/sass/*.{sass,scss}',
    watch: pathSrc + '/sass/**/*.{sass,scss}',
    dest: pathDest + '/css',
  },

  js: {
    src: pathSrc + '/js/*.js',
    watch: pathSrc + '/js/**/*.js',
    dest: pathDest + '/js',
  },

  img: {
    src: pathSrc + '/img/*.{png,jpg,jpeg,gif,webp}',
    watch: pathSrc + '/img/**/*.{png,jpg,jpeg,gif,webp}',
    dest: pathDest + '/img',
  },

  favicon: {
    src: pathSrc + '/img/favicon/favicon.png',
    watch: pathSrc + '/img/favicon/favicon.png',
    dest: pathDest + '/img/favicon/',
  },

  font: {
    src: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}',
    watch: pathSrc + '/font/**/*.{eot,ttf,otf,otc,ttc,woff,woff2}',
    dest: pathDest + '/font',
  },
};
