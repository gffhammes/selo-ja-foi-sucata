/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [{ loader: '@svgr/webpack', options: { icon: true } }],
    })

    return config
  }
}

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
})

module.exports = nextConfig;
module.exports = (phase, defaultConfig) => {
  return withBundleAnalyzer(nextConfig)
}
