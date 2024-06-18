/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    remotePatterns: [
      {
        hostname: "i.imgur.com",
        protocol: "https",
      },
      {
        hostname: "res.cloudinary.com",
        protocol: "https",
      },
      {
        hostname: "firebasestorage.googleapis.com",
        protocol: "https",
      },
    ],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
};

module.exports = nextConfig;
