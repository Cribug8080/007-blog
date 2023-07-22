/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'img.duoziwang.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

module.exports = nextConfig
