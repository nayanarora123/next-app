/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
              protocol: 'https',
              hostname: 'tailwindui.com',
              pathname: '/plus/img/logos/**',
            },
            {
              protocol: 'https',
              hostname: 'nextjs.org',
              pathname: '/icons/**',
            },
        ],
        dangerouslyAllowSVG: true,
    },
};

export default nextConfig;
