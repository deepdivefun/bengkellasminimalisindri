/** @type {import('next').NextConfig} */
const path = require('path')

const nextConfig = {
    sassOptions: {
        includePaths: [path.join(__dirname, 'style')],
      },
      images: {
        domains: ['images.pexels.com'],
      },
}

module.exports = nextConfig
