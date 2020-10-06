const webpack = require('webpack')
const isProd = process.env.NODE_ENV === 'production'
process.env.ASSET_PREFIX = isProd ? '/hockeyfrossa' : '';

module.exports = {
  basePath: isProd ? '/hockeyfrossa' : '',
  exportPathMap: function () {
    return {
      '/': { page: '/' },
      '/frillor/vasttysk': { page: '/frillor/[id]', query: { id: 'vasttysk' } },
    }
  },
  webpack: config => {
    config.plugins.push(
      new webpack.DefinePlugin({
        'process.env.ASSET_PREFIX': JSON.stringify(process.env.ASSET_PREFIX),
      }),
    )
    return config
  },
  assetPrefix: process.env.ASSET_PREFIX,
}