const path = require("path")
const webpack = require("webpack")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
// const marked = require('marked')
// const markdownRenderer = new marked.Renderer()

let devMode = false
if (
  process.env.NODE_ENV == null ||
  process.env.NODE_ENV.substr(0, 3).toLowerCase() === "dev"
) {
  devMode = true
  console.log(`Webpack is running in development mode`)
}

module.exports = {
  target: "web",
  mode: "development",
  entry: ["./src/index.tsx"],
  devtool: "source-map",
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".json"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
        logLevel: "info",
        logInfoToStdOut: true,
        extensions: [".ts", ".tsx"]
      })
    ]
  },
  module: {
    rules: [
      { test: /\.tsx?$/, use: "ts-loader", exclude: /node_modules/ },
      {
        test: /\.md$/,
        use: [{ loader: "html-loader" }, { loader: "markdown-loader" }]
      },
      {
        test: /\.css$/,
        exclude: /\.useable\.css$/,
        loader: "style-loader!raw-loader"
      },
      { test: /\.useable\.css$/, loader: "style-loader/useable!raw-loader" },
      {
        test: /\.(png|ico|gif)?$/,
        loaders: ["file"],
        include: __dirname
      }
    ]
  },
  plugins: [
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": devMode ? '"development"' : '"production"'
    }),
    new HtmlWebpackPlugin({
      template: "./public/index.html",
      favicon: "./public/favicon.ico",
      filename: "index.html"
    }),
    ...(devMode ? [new webpack.HotModuleReplacementPlugin()] : [])
  ],
  devServer: {
    host: "0.0.0.0",
    disableHostCheck: true,
    contentBase: path.join(__dirname, "build"),
    port: 8000,
    compress: true
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "bundle.js",
    publicPath: "/"
  }
}
