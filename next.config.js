/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "s3.us-west-2.amazonaws.com",
      },
    ],
  },
};

const withPWA = require('next-pwa')({
  dest: 'public',
})

module.exports = withPWA({
  // config
})

module.exports = nextConfig;
