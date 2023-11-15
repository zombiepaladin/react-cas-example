// Because React's development server defaults to serving the React app
// to any request accepting html, we must instead set up our own proxy 
// server.  All routes starting with `/api` will be forwarded to our API 
// server.
const { createProxyMiddleware } = require('http-proxy-middleware');

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'http://localhost:3050',
      changeOrigin: true,
    })
  );
};