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

module.exports = {
  images: {
    domains: ["i.imgur.com"],
  },
};
