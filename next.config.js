const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')]
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'localhost',
        port: '4000',
        pathname: '/assets/**',
      },
      {
        protocol: 'https',
        hostname: 'personal-server-taupe.vercel.app',
        port: '',
        pathname: '/assets/**',
      },
    ],
  },
}