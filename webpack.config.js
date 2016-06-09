const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const merge = require('webpack-merge');
const validate = require('webpack-validator');

const parts = require('./public/lib/webpack_config/parts');

const PATHS = {
  app: path.join(__dirname, 'public/app'),
  style: path.join(__dirname, 'public/app', 'public/app/main.css'),
  build: path.join(__dirname, 'public/build')
};

const common = {
  // Entry accepts a path or an object of entries.
  // We'll be using the latter form given it's
  // convenient with more complex configurations.
  entry: {
    app: PATHS.app,
    style: PATHS.style,
  },
  output: {
    path: PATHS.build,
    filename: '[name].js'
  },
  plugins: [
    new HtmlWebpackPlugin({
    title: 'Zenkara'
  })
  ]
};

var config;
  // Detect how npm is run and branch based on that
  switch(process.env.npm_lifecycle_event) {
    case 'build':
      config = merge(
        common,
        {
          devtool: 'source-map',
          output: {
            path: PATHS.build,
            filename: '[name].[chunkhash].js',
            // This is used for require.ensure. The setup
            // will work without but this is useful to set.
            chunkFilename: '[chunkhash].js'
          }
        },
        parts.clean(PATHS.build),
        parts.setFreeVariable(
          'process.env.NODE_ENV',
          'production'
        ),
        parts.extractBundle({
          name: 'vendor',
          entries: ['react']
        }),
        parts.minify(),
        parts.extractCSS(PATHS.style)
      );
    default:
      config = merge(
        common,
        parts.minify(),
        {
          devtool: 'eval-source-map'
        },
        parts.setupCSS(PATHS.style),
        parts.devServer({
          // Customize host/port here if needed
          host: process.env.HOST,
          port: 3000
        })
      );
};

module.exports = validate(config);