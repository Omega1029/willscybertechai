/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // Allow images from any domain for infographic display
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  // Allow all hosts for Replit proxy
  allowedDevOrigins: ['*'],
};

module.exports = nextConfig;
