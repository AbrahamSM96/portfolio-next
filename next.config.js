// module.exports = {
//   webpack(config) {
//     config.module.rules.push({
//       test: /\.svg$/,
//       issuer: {
//         test: /\.(js|ts)x?$/
//       },
//       use: ['@svgr/webpack']
//     })

//     return config
//   }
// }
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 60,
    domains: [
      "i.imgur.com",
      "res.cloudinary.com",
      "firebasestorage.googleapis.com",
    ],
  },
  i18n: {
    locales: ["en", "es"],
    defaultLocale: "es",
  },
};

module.exports = nextConfig;
