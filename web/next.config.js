/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    emotion: true,
  },
  images: {
    unoptimized: true,
  },
  experimental: {
    legacyBrowsers: false,
  },
};

module.exports = nextConfig;
