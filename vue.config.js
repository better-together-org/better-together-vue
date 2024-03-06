module.exports = {
  devServer: {
    proxy: {
      '/api': {
        target: 'http://localhost:8080',
        pathRewrite: { '^/api': '' },
      },
    },
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  pwa: {
    name: 'Better Together',
  },
}
