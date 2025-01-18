/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable the app directory if you're using it.
    optimizeFonts: true, // Ensures better font optimization.
  },
  images: {
    domains: [], // Add external domains if your images are hosted elsewhere.
    unoptimized: true, // Disables image optimization (needed for Firebase Hosting).
  },
  output: 'export', // Configure static export.
};

export default nextConfig;
