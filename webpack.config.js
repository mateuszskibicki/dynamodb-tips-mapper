const path = require('path');
const slsw = require('serverless-webpack');
const nodeExternals = require('webpack-node-externals');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { TsConfigPathsPlugin } = require('awesome-typescript-loader');

const plugins = [new CleanWebpackPlugin()];

module.exports = {
  context: __dirname,
  mode: slsw.lib.webpack.isLocal ? 'development' : 'production',
  entry: slsw.lib.entries,
  devtool: slsw.lib.webpack.isLocal ? 'cheap-module-eval-source-map' : 'source-map',
  resolve: {
    extensions: [".ts", ".js"],
    plugins: [
      new TsConfigPathsPlugin()
    ]
  },
  output: {
    libraryTarget: 'commonjs',
    path: path.join(__dirname, '.webpack'),
    filename: '[name].js',
  },
  target: 'node',
  externals: [nodeExternals()],
  module: {
    rules: [
      // all files with a `.ts` or `.tsx` extension will be handled by `ts-loader`
      {
        test: /\.(tsx?)$/,
        loader: 'ts-loader',
        exclude: [
          [
            path.resolve(__dirname, 'node_modules'),
            path.resolve(__dirname, '.serverless'),
            path.resolve(__dirname, '.webpack'),
          ],
        ],
        options: {
          transpileOnly: true,
          experimentalWatchApi: true,
        },
      },
    ],
  },
  plugins: plugins
};
