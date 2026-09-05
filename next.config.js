const nextConfig = {
  reactStrictMode: true,
  basePath: '/Job-listings-App',
  assetPrefix: '/Job-listings-App/',
  images: { unoptimized: true },
  trailingSlash: true,
  env: {
    NEXT_PUBLIC_BASE_PATH: '/Job-listings-App',
  },
}
module.exports = nextConfig
