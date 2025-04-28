/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/webp'],
  },
  // Ensure static assets are included
  reactStrictMode: true,
  trailingSlash: true,
};

module.exports = nextConfig; 