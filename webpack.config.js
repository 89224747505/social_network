const path = require('path');

module.exports = {
    mode: "production",
    resolve: {
        fallback: {
            "fs": false,
            "tls": false,
            "net": false,
            "path": false,
            "zlib": false,
            "http": false,
            "https": false,
            "stream": false,
            "crypto": false,
            "url": false,
            "util": false,
            "assert":false,
            "child_process":false,
            "os": false,
            "node-gyp":false,
            "npm":false,
            "querystring":false,
            "nock":false,
            "aws-sdk":false,
            "mock-aws-s3":false,
        }
    },
    entry: "./server/index.js",
    module:{
      rules:[
          { test: /\.(js)$/, use: 'babel-loader' },
          { test: /\.node$/, use: "node-loader"},
          { test: /\.html$/, use: "html-loader"}
      ]
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].[hash].js",
    },
}