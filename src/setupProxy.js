const { createProxyMiddleware } = require('http-proxy-middleware')
const target = process.env.BACKEND_URL

module.exports = function(app) {
  app.use(createProxyMiddleware(
    '/stream',
    {
      target: 'https://freemetal.org/stream',
      secure: false,
      changeOrigin: true,
    },
  ))
  if (target) {
    app.use(createProxyMiddleware('/api', { target }))
    app.use(createProxyMiddleware('/media', { target }))
  }
}
