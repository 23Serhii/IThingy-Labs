import type { NextConfig } from "next";

const nextConfig = {
    async rewrites() {
        return [
            {
                source: '/api/:path*',
                destination: 'https://ithingy-labs-production.up.railway.app/api/:path*',
            },
        ]
    },
}
export default nextConfig
