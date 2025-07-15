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
  },
  
  // Désactiver l'optimisation des images pour la build statique
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  
  // Configuration pour GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '' : '',
  
  // Headers de cache pour les assets statiques
  async headers() {
    return [
      {
        source: '/(.*\\.(png|jpg|jpeg|webp|avif|svg|ico|css|js|woff|woff2))',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate',
          },
        ],
      },
    ];
  },
}

module.exports = nextConfig 