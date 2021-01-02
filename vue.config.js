module.exports = {
  devServer: {
    proxy: 'http://localhost:8080/',
  },
  publicPath: process.env.NODE_ENV === 'production'
    ? '/'
    : '/',
  pwa: {
    name: 'Better Together',
  },
}
