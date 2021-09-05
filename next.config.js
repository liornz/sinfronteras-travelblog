const withPWA = require('next-pwa');
// const runtimeCaching = require('next-pwa/cache');
const runtimeCaching = require('./cache');
const { i18n } = require('./next-i18next.config')

module.exports = withPWA({
  pwa: {
    dest: 'public',
    runtimeCaching,
  },
  i18n,
});