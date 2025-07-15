/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
  // Désactiver l'optimisation des images pour la build statique
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Configuration pour GitHub Pages
  basePath: process.env.NODE_ENV === 'production' ? '/deka-landing' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/deka-landing/' : '',
}

module.exports = nextConfig 