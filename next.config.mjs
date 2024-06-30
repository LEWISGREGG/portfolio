/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [{
            protocol: 'https',
            hostname: 'cdn.sanity.io',
            port: '',
            
        },
    {
            protocol: 'https',
            hostname: 'i.imgur.com',
            port: '', 
    },
    {
            protocol: 'https',
            hostname: 'www.w3.org',
            port: '', 
    },
    {
            protocol: 'https',
            hostname: 'www.svgrepo.com',
            port: '', 
    }]
    }
};

export default nextConfig;

