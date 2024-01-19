/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'apod.nasa.gov',
        pathname: '**',
      },
      {
        protocol: 'https',
        hostname: 'www.youtube.com',
        pathname: '**',
      },
    ],
  },
};

module.exports = nextConfig;
