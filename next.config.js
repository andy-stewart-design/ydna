/** @type {import('next').NextConfig} */
const { withContentlayer } = require("next-contentlayer");

module.exports = withContentlayer({
  reactStrictMode: true,
  experimental: {
    images: {
      allowFutureImage: true,
    },
  },
});
