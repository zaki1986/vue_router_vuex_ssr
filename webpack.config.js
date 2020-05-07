const path = require('path')
const VueLoaderPlugin = require('vue-loader/lib/plugin.js')
const HTMLPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {
  CleanWebpackPlugin
} = require('clean-webpack-plugin')

const isDev = process.env.NODE_ENV === 'development'

const config = {
  target: 'web',
  entry: path.join(__dirname, 'src/index.js'),
  output: {
    filename: 'bundle.[hash:8].js',
    path: path.join(__dirname, 'dist')
  },
  module: {
    rules: [{
      test: /\.vue$/,
      loader: 'vue-loader'
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: path.join(__dirname, 'node_modules'),
      include: path.join(__dirname, 'src'),
      options: {
        presets: ['env']
      }
    }, {
      test: /\.(gif|jpg|png|svg|jpeg)$/,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 1024,
          name: '[name].[ext]',
          outputPath: 'assets/img/'
        }
      }]
    }]
  },
  plugins: [
    new CleanWebpackPlugin(),
    new VueLoaderPlugin(),
    new HTMLPlugin()
  ]
}

if (isDev) {
  config.module.rules.push({
    test: /\.styl/,
    use: [
      'vue-style-loader',
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  new MiniCssExtractPlugin({
    filename: '[name].css',
    ignoreOrder: false // Enable to remove warnings about conflicting order
  })
  config.devServer = {
    port: 8800,
    overlay: {
      errors: true
    },
    hot: true
  }
} else {
  config.output.filename = '[name].[chunkhash:8].js'
  config.module.rules.push({
    test: /\.styl/,
    use: [{
        loader: MiniCssExtractPlugin.loader,
        options: {
          // you can specify a publicPath here
          // by default it uses publicPath in webpackOptions.output
          publicPath: './',
          hmr: process.env.NODE_ENV === 'production'
        }
      },
      'css-loader',
      {
        loader: 'postcss-loader',
        options: {
          sourceMap: true
        }
      },
      'stylus-loader'
    ]
  })
  config.plugins.push(
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: '[name].[chunkhash].css',
      ignoreOrder: false // Enable to remove warnings about conflicting order
    })
  )
}

module.exports = config
