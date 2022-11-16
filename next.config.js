/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  compress: true,
  async redirects() {
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanent: true,
      },
    ];
  },
  images: {
    domains: ['api.lorem.space', 'http2.mlstatic.com', 'placeimg.com', 'images.pexels.com'],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
  register: true,
  disable: process.env.NODE_ENV === 'development',
});

module.exports = withPWA(nextConfig);
