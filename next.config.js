/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  output: 'export',

  basePath: '/Job-listings-App',
  assetPrefix: '/Job-listings-App/',

  images: {
    unoptimized: true,
  },

  trailingSlash: true,
}

module.exports = nextConfig
