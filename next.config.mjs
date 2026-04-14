/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export", // 👈 THIS is required for cPanel static hosting

  typescript: {
    ignoreBuildErrors: true,
  },

  images: {
    unoptimized: true,
  },
};

export default nextConfig;