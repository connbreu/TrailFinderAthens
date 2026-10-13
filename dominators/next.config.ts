import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
      {
        protocol: 'https',
        hostname: 'cloudfront.traillink.com',
      },
      {
        protocol: 'https',
        hostname: 'assets.simpleviewinc.com',
      },
      {
        protocol: 'https',
        hostname: 'www.nateshivar.com',
      },
      {
        protocol: 'https',
        hostname: 'www.fireflytrail.com',
      },
      {
        protocol: 'https',
        hostname: 'exploregeorgia.org',
      },
      {
        protocol: 'https',
        hostname: 'www.accgov.com',
      },
      {
        protocol: 'https',
        hostname: 'trailrunner.com',
      },
      {
        protocol: 'https',
        hostname: 'news.uga.edu',
      },
    ],
  },
};

export default nextConfig;