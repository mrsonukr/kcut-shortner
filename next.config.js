/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: { unoptimized: true },
  compress: true,
  poweredByHeader: false,
  generateEtags: true,
  trailingSlash: false,
};

module.exports = nextConfig;
