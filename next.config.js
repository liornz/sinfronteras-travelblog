/** @type {import('next').NextConfig} */
const runtimeCaching = require("./cache");
const withPWA = require("next-pwa")({
  dest: "public",
  runtimeCaching,
  dynamicStartUrl: false,
  buildExcludes: [/middleware-manifest.json$/],
});
const { i18n } = require("./next-i18next.config");

module.exports =
  process.env.NODE_ENV === "development"
    ? { i18n }
    : withPWA({
        i18n,
      });
