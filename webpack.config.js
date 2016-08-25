var webpack = require('webpack');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'index.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        loader: 'babel',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  resolve: {
    extensions: ['', '.js']
  // },
  // plugins: [
  //   new webpack.optimize.UglifyJsPlugin({minimize: true})
  // ]
  }
};
