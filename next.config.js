/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.pizza33.ua',
        port: '',
        pathname: '/products/product/m0JGsuHe13JdmMiCYuSNMtoOrcWY0tWU.jpg',
      },
    ],
  },
}

module.exports = nextConfig
