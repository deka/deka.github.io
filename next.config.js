/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
    formats: ['image/webp', 'image/avif'],
    minimumCacheTTL: 31536000, // 1 année
  },
  // Configuration pour optimiser les performances
  compress: true,
  poweredByHeader: false,
  
  // Optimisation des bundles JavaScript
  experimental: {
    optimizePackageImports: ['react', 'react-dom'],
  }
}

module.exports = nextConfig 