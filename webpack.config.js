const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');


console.error(__dirname);


module.exports = {
  // Mode set in package.json scripts
  context: path.resolve(__dirname, 'src'), // Replace 'src' with your desired root directory
  entry: {
    background: './background.js',
    newTab: './newTab.js',
    popup: './popup.js',
    allPagesScript: './content-scripts/allPagesScript.js',
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  plugins: [
    new CopyWebpackPlugin({
      patterns: [
        { from: '*.html', to: '[name].html' },
        { from: 'manifest.json', to: 'manifest.json' },
      ],
    }),
  ],
};