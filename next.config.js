/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  basePath: '',
  assetPrefix: '',
  trailingSlash: true,
};

module.exports = nextConfig;