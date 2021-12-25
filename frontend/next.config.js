/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

module.exports = withFonts({
  images: {
    domains: ['i.insider.com']
  },
  enableSvg: true,
  webpack(config, options) {
    return config;
  }
});
