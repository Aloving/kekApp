const webpack = require('webpack');
const path = require('path');

const DashboardPlugin = require('webpack-dashboard/plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const autoprefixer = require('autoprefixer');

const nodeEnv = process.env.NODE_ENV || 'development';
const isProduction = nodeEnv === 'production';

const jsSourcePath = path.join(__dirname, './frontend/source/js');
const buildPath = path.join(__dirname, './public');
const imgPath = path.join(__dirname, './frontend/source/assets');
const sourcePath = path.join(__dirname, './frontend/source');



// Common plugins
const plugins = [

  new webpack.optimize.CommonsChunkPlugin({
    name: 'vendor',
    filename: 'vendor.js',
    minChunks(module) {
      const context = module.context;
      return context && context.indexOf('node_modules') >= 0;
    },
  }),
  new webpack.DefinePlugin({
    'process.env': {
      NODE_ENV: JSON.stringify(nodeEnv),
    },
  }),
    new ExtractTextPlugin({ filename: 'style.css', disable: false, allChunks: true }),
  new webpack.LoaderOptionsPlugin({
    options: {
      postcss: [
        autoprefixer({
          browsers: [
            'last 3 version',
            'ie >= 10',
          ],
        }),
      ],
      context: sourcePath,
    },
  }),
];

// Common rules
const rules = [
    {
    test: /\.(js|jsx)$/,
    exclude: /node_modules/,
    use: [
      'babel-loader',
    ],
  },
  {
    test: /\.(png|gif|jpg|svg)$/,
    include: imgPath,
    use: 'url-loader?limit=20480&name=/../assets/[name].[ext]',
  },
];

if (isProduction) {
  // Production plugins
  plugins.push(
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false,
        screw_ie8: true,
        conditionals: true,
        unused: true,
        comparisons: true,
        sequences: true,
        dead_code: true,
        evaluate: true,
        if_return: true,
        join_vars: true,
      },
      output: {
        comments: false,
      },
    })
  );



  // Production rules
  rules.push(
    {
      test: /\.scss$/,
      loader: ExtractTextPlugin.extract({
        fallback: 'style-loader',
        use: 'css-loader!postcss-loader!sass-loader',
      }),
    }
  );
} else {
  // Development plugins
  plugins.push(
    new webpack.HotModuleReplacementPlugin(),
    new DashboardPlugin()
  );

  // Development rules
  rules.push(
    {
      test: /\.scss$/,
      exclude: /node_modules/,

      use:
          [
        'style-loader',
        // Using source maps breaks urls in the CSS loader
        // https://github.com/webpack/css-loader/issues/232
        // This comment solves it, but breaks testing from a local network
        // https://github.com/webpack/css-loader/issues/232#issuecomment-240449998
        // 'css-loader?sourceMap',
        'css-loader',
        'postcss-loader',
        'sass-loader?sourceMap',
      ],
    }
  );
}

module.exports = {
  devtool: isProduction ? false : 'source-map',
  context: jsSourcePath,
  entry: {
    js: './index.js',
  },
  output: {
    path: buildPath,
    publicPath: '/static',
    filename: 'app.js',
  },
  module: {
    rules,
  },
  resolve: {
    extensions: ['.webpack-loader.js', '.web-loader.js', '.loader.js', '.js', '.jsx'],
    modules: [
      path.resolve(__dirname, 'node_modules'),
      jsSourcePath,
    ],
  },
  plugins,
  devServer: {
      historyApiFallback: true,
      proxy: [{
          path: '/api/**',
          target: 'http://localhost:80'
      }],
      port: 8001
  }
};
