/** @type {import('next').NextConfig} */
const withFonts = require('next-fonts');

module.exports = withFonts({
  images: {
    domains: ['i.insider.com'],
  },
  enableSvg: true,
  webpack(config, options) {
    return config;
  },
  async rewrites() {
    return [
      {
        source: '/:path*',
        destination: 'http://localhost:3001/:path*',
      },
    ];
  },
});
