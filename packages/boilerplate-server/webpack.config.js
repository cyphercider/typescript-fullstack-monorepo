const path = require("path")
const webpack = require("webpack")
const TsconfigPathsPlugin = require("tsconfig-paths-webpack-plugin")
const nodeExternals = require("webpack-node-externals")

let devMode = false
if (
  process.env.NODE_ENV == null ||
  process.env.NODE_ENV.substr(0, 3).toLowerCase() === "dev"
) {
  devMode = true
  console.log(`Webpack is running in development mode`)
}

module.exports = {
  target: "node",
  mode: devMode ? "development" : "production",
  entry: ["./src/server.ts"],
  watch: devMode,
  devtool: devMode ? "source-map" : undefined,
  externals: [nodeExternals()],
  resolve: {
    extensions: [".ts", ".js", ".json"],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: "./tsconfig.json",
        logLevel: "info",
        logInfoToStdOut: true,
        extensions: [".ts"]
      })
    ]
  },
  module: {
    rules: [
      {
        test: /.tsx?$/,
        use: "ts-loader"
      }
    ]
  },
  plugins: [],
  output: {
    path: path.join(__dirname, "dist"),
    filename: "server.js",
    publicPath: "/"
  }
}
