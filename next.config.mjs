/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'tailwindui.com',
              pathname: '/plus/img/logos/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
