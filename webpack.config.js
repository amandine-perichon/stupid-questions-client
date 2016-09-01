module.exports = {
  entry: './src/index.js',
  output: './src/public/bundle.js',
  module: {
    loaders: [
      {loader: 'babel-loader', test: /\.jsx?$/, exclude: 'node_modules'}
    ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  devtool: 'source-map'
}
