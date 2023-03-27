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
  async redirects() {
    return [
      {
        source: "/program-kerja",
        destination: "/proker",
        permanent: true,
      },
      {
        source: "/media-partnership",
        destination: "/medpart",
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
