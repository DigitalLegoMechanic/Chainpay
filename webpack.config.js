const path = require('path');

module.exports = {
  // Entry point for your application
  entry: './src/index.js',  // Adjust to your entry file

  // Output configuration
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),  // The folder where the build will be saved
  },

  // Module rules for handling different file types
  module: {
    rules: [
      // JavaScript files handling with Babel loader
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
        },
      },
      
      // CSS files handling with CSS loader and style loader
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },

  // Optional: Add source maps for easier debugging (remove in production if not needed)
  devtool: 'source-map',

  // Mode for Webpack (can be 'development' or 'production')
  mode: 'development',  // Change to 'production' when deploying
};
