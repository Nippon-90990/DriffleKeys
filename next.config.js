/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    eslint: {
        ignoreDuringBuilds: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'colorful-prize-ad2019cb60.media.strapiapp.com',
            },
            {
                protocol: 'https',
                hostname: 'colorful-prize-ad2019cb60.strapiapp.com',
            },
            {
                protocol: 'https',
                hostname: 'stylish-gift-a7e817f55b.media.strapiapp.com',
            },
            {
                protocol: 'https',
                hostname: 'res.cloudinary.com',
            },
            {
                protocol: 'https',
                hostname: 'static.driffle.com',
            },
            {
                protocol: 'https',
                hostname: 'driffle.com',
            },
            {
                protocol: 'http',
                hostname: '103.91.67.162', // VPS
            },
            {
                protocol: 'http',
                hostname: 'localhost', // local dev
            },
        ],
    },
};

module.exports = nextConfig;
