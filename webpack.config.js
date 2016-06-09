const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./public/lib/webpack_config/parts');

const PATHS = {
  app: path.join(__dirname, 'public/app'),
  build: path.join(__dirname, 'public/build')
};

const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Webpack demo'
  })
  ]
};

var config;
  // Detect how npm is run and branch based on that
  switch(process.env.npm_lifecycle_event) {
    case 'build':
      config = merge(common, {});
      break;
    default:
      config = merge(
        common,
        parts.devServer({
          // Customize host/port here if needed
          host: process.env.HOST,
          port: 3000
        })
      );
};

module.exports = validate(config);