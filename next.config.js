const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
const runtimeCaching = require('./cache');

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  i18n: {
    locales: ['en-US', 'es-AR'],
    defaultLocale: 'es-AR',
  },
});