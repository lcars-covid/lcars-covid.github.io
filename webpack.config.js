const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { VueLoaderPlugin } = require("vue-loader");
// This is main configuration object.
// Here you write different options and tell Webpack what to do
module.exports = {
  // Path to your entry point. From this file Webpack will begin his work
  entry: './src/javascript/index.js',
  // Path and filename of your result bundle.
  // Webpack will bundle all JavaScript into this file
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  devServer: {
    // Can be omitted unless you are using 'docker' 
    //host: '0.0.0.0',
    // This is where webpack-dev-server serves your bundle
    // which is created in memory.
    // To use the in-memory bundle,
    // your <script> 'src' should point to the bundle
    // prefixed with the 'publicPath', e.g.:
    //   <script src='http://localhost:9001/assets/bundle.js'>
    //   </script>
    publicPath: '/assets/',
    // The local filesystem directory where static html files
    // should be placed.
    // Put your main static html page containing the <script> tag
    // here to enjoy 'live-reloading'
    // E.g., if 'contentBase' is '../views', you can
    // put 'index.html' in '../views/main/index.html', and
    // it will be available at the url:
    //   https://localhost:9001/main/index.html
    contentBase: path.resolve(__dirname, "../views"),
    // 'Live-reloading' happens when you make changes to code
    // dependency pointed to by 'entry' parameter explained earlier.
    // To make live-reloading happen even when changes are made
    // to the static html pages in 'contentBase', add 
    // 'watchContentBase'
    watchContentBase: true,
    compress: true,
  },
  // Default mode for Webpack is production.
  // Depending on mode Webpack will apply different things
  // on final bundle. For now we don't need production's JavaScript 
  // minifying and other thing so let's set mode to development
  mode: 'production',

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env']
          }
        }
      },
      {
        // Apply rule for .sass, .scss or .css files
        test: /\.(sa|sc|c)ss$/,
        // Set loaders to transform files.
        // Loaders are applying from right to left(!)
        // The first loader will be applied after others
        use: [
          {
            // After all CSS loaders we use plugin to do his work.
            // It gets all transformed CSS and extracts it into separate
            // single bundled file
            loader: MiniCssExtractPlugin.loader
          },
          {
            // This loader resolves url() and @imports inside CSS
            loader: "css-loader",
          },
          {
            // Then we apply postCSS fixes like autoprefixer and minifying
            loader: "postcss-loader"
          },
          {
            // First we transform SASS to standard CSS
            loader: "sass-loader",
            options: {
              implementation: require("sass")
            }
          }
        ]
      },
      {
        // Now we apply rule for images
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            // Using file-loader for these files
            loader: "file-loader",
            // In options we can set different things like format
            // and directory to save
            options: {
              outputPath: 'images'
            }
          }
        ]
      },
      {
        // Apply rule for fonts files
        test: /\.(woff|woff2|ttf|otf|eot)$/,
        use: [
          {
            // Using file-loader too
            loader: "file-loader",
            options: {
              outputPath: 'fonts'
            }
          }
        ]
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
      }
    ]
  },
  resolve: { alias: { vue: 'vue/dist/vue.esm.js' } },

  plugins: [
    new MiniCssExtractPlugin({
      filename: "bundle.css"
    }),
    new VueLoaderPlugin()
  ]
};