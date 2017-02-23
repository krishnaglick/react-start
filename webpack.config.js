
const path = require('path');

module.exports = {
  entry: './app/app.js',
  output: {
    path: './dist/',
    filename: 'bundle.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      loader: 'babel-loader',
      include: [path.resolve(__dirname, './app')]
    }]
  }
};
