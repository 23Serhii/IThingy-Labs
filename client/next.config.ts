import type { NextConfig } from "next";

const nextConfig = {
  eslint: {
    // Ігнорувати помилки лінтера під час білду
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Ігнорувати помилки TypeScript під час білду
    ignoreBuildErrors: true,
  },
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination:
          "https://ithingy-labs-production.up.railway.app/api/:path*",
      },
    ];
  },
};
export default nextConfig;
