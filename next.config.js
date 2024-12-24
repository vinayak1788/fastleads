
/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
    config.cache = {
      type: 'filesystem',
      cacheDirectory: require('path').resolve('.next/cache')
    }
    return config
  }
}

module.exports = nextConfig
