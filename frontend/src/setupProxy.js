// eslint-disable-next-line @typescript-eslint/no-var-requires
const proxy = require('http-proxy-middleware');

// src/setupProxy.js
module.exports = function (app) {
    app.use(
        proxy('/api', {
            target: 'http://localhost:3000',
            changeOrigin: false,
        })
    );
};