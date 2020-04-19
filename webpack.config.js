const path = require('path');
module.exports = {
   entry: "./src/index.ts",
   output: {
       filename: "bundle.js",
       path: path.resolve(__dirname, 'lib')
   },
   resolve: {
       extensions: [".webpack.js", ".web.js", ".ts", ".js"]
   },
   module: {
       rules: [{ test: /\.ts$/, loader: "ts-loader" }]
   }
}