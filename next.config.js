/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    customKey: 'customValue'
  },
  compress: true,
  async redirects(){
    return [
      {
        source: '/hola',
        destination: '/hello',
        permanent: true,
      }
    ]
  },
  images: {
    domains: ['api.lorem.space', 'http2.mlstatic.com', 'placeimg.com']
  }
}

module.exports = nextConfig
