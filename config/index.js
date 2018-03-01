// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        // index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist/web/'),
        assetsSubDirectory: 'webStatic',
        assetsPublicPath: '/',
        productionSourceMap: false,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: true,
        productionGzipExtensions: ['js', 'css']
    },
    dev: {
        env: require('./dev.env'),
        port: 8083,
        assetsSubDirectory: 'webStatic',
        assetsPublicPath: '/',
        proxyTable: {
            // '/lifeservice': {
                // target: 'http://192.168.1.157:8080/api.do', // 俊哥
                // target: 'http://10.1.1.250:8080/hbx-api-server/api.do', // 服务器
                // target: 'http://192.168.1.166:8080/api/api.do', // 柯南
                // target: 'http://192.168.1.165:8080/hbx-api-server', // 乔洋
                // changeOrigin: true,
                // pathRewrite: {
                //     '^/lifeservice': ''
                // }
            // }
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: true
    }
}
