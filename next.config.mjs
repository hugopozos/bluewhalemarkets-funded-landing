/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  basePath: '',
  assetPrefix: '',
  crossOrigin: 'anonymous',
  // Configuración para minimizar errores JavaScript
  swcMinify: false,
  productionBrowserSourceMaps: false
}

export default nextConfig
