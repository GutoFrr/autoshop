/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = nextConfig

const withImages = require('next-images')
module.exports = withImages({
  esModule: true,
  webpack(config, options) {
    return config
  },
  images: {
    disableStaticImages: true
  }
})
