/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'style')],
      },
      images: {
        remotePatterns: [
          {
            protocol: 'http',
            hostname: 'wp.bengkellasminimalisindri.com',
            port: '',
          },
        ],
      },
}

module.exports = nextConfig
