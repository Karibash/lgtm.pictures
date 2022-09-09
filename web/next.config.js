/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  experimental: {
    legacyBrowsers: false,
    images: {
      unoptimized: true,
    },
  },
};

module.exports = nextConfig;
