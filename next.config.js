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
      {
        protocol: 'https',
        hostname: 'kaifui.com',
        port: '',
        pathname: '/image/cache/catalog/products/15-1000x1000.png',
        },
      {
        protocol: 'https',
        hostname: 'img.freepik.com',
        port: '',
        pathname: '/free-photo/front-view-burger-stand_141793-15542.jpg',
        },
      {
        protocol: 'https',
        hostname: 'st.depositphotos.com',
        port: '',
        pathname: '/2577341/3143/i/600/depositphotos_31433595-stock-photo-glass-of-beer.jpg',
        },
      {
        protocol: 'https',
        hostname: 'static.21vek.by',
        port: '',
        pathname: '/img/tmp/60923dcb9cf3a.jpeg',
      },
    ],
  },
}

module.exports = nextConfig
