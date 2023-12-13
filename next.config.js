/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.realworld.io',
      },
    ],
  },
};

module.exports = nextConfig;
