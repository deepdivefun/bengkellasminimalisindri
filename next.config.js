/** @type {import('next').NextConfig} */

const nextConfig = {
  images: {
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "wp.bengkellasminimalisindri.com",
        port: "",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
}

module.exports = nextConfig
