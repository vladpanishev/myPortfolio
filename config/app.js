const isProd = process.argv.includes('--production');
const isDev = !isProd;

module.exports = {
  isProd: isProd,
  isDev: isDev,

  imagemin: {
    verbose: true,
  },

  fonter: {
    formats: ['ttf', 'woff', 'eot', 'svg'],
  },
};
