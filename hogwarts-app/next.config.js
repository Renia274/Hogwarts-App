/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    experimental: {
      forceSwcTransforms: false
    },
     eslint: {
    ignoreDuringBuilds: true,
    }
  };
  
  module.exports = nextConfig;