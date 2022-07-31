import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import StyleLintPlugin from 'stylelint-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import ImageMinimizerPlugin from 'image-minimizer-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(new URL(import.meta.url).pathname);
// const { extendDefaultPlugins } = require("svgo");
const isDev = true;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  watch: true,
  target: 'web',
  devtool: 'eval-source-map',
  output: {
    // serves build from memory
    path: path.join(__dirname, '..', 'public'),
    filename: 'js/[name].bundle.[fullhash].js',
    chunkFilename: 'chunks/[name].chunk.[fullhash].js',
  },

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development'),
    }),
    // Create HTML file that includes reference to bundled JS.
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[fullhash].css',
      chunkFilename: 'chunks/[id].chunk.[fullhash].css',
    }),
    new StyleLintPlugin({
      configFile: './.stylelintrc.json',
      files: './src/static/sass/*.scss',
      fix: true,
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.imageminMinify,
        options: {
          // Lossless optimization with custom option
          // Feel free to experiment with options for better result for you
          plugins: [
            ['gifsicle', { interlaced: true }],
            // ['jpegtran', { progressive: true }],
            ['pngquant', { optimizationLevel: 5 }],
            ['jpegtran', { progressive: true }],
          ],
        },
      },
    }),
    // new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        enforce: 'pre',
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      {
        test: /\.css$|sass$|\.scss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {},
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: isDev,
            },
          },
          // {
          //   loader: 'postcss-loader',
          //   options: {
          //     postcssOptions: {
          //       plugins: [
          //         [
          //           'postcss-preset-env',
          //           {
          //             // Options
          //           },
          //         ],
          //       ],
          //     },
          //   },
          // },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: isDev,
            },
          },
        ],
      },

      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['file-loader'],
      },
      // file loader for images
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name]-[fullhash:8].[ext]',
            },
          },
        ],
      },
    ],
  },
  stats: {
    children: true,
    errorDetails: true,
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
    alias: {
      Images: path.resolve(__dirname, './src/static/img/'),
      Fonts: path.resolve(__dirname, './src/static/fontawesome/'),
    },
  },
};
