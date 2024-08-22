/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['images.unsplash.com', 'replicate.delivery', 'utfs.io'],
    },
    // async headers() {
    //     return [
    //     {
    //         source: '/(.*)',
    //         headers: [
    //         {
    //             key: 'X-Frame-Options',
    //             value: 'SAMEORIGIN',
    //         },
    //         ],
    //     },
    //     ];
    // },
};

export default nextConfig;
