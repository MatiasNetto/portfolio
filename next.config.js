/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['external-content.duckduckgo.com'],
  },
};

module.exports = nextConfig;
