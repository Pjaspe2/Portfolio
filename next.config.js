/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  output: 'export',  // Enable static exports
  images: {
    unoptimized: true, // Required for static export
  },
  trailingSlash: true,
  distDir: 'out',
}

module.exports = nextConfig 