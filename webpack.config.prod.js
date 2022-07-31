import path from 'path';
import webpack from 'webpack';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import { CleanWebpackPlugin } from 'clean-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import CssMinimizerPlugin from 'css-minimizer-webpack-plugin';

// eslint-disable-next-line no-underscore-dangle
const __dirname = path.dirname(new URL(import.meta.url).pathname);

const isDev = false;

const webpackConfig = {
  mode: 'production',
  devtool: 'source-map',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
    vendor: ['react', 'react-dom'],
  },
  target: 'web',
  output: {
    filename: 'js/[name].bundle.[fullhash].js',
    chunkFilename: 'chunks/[name].chunk.[fullhash].js',
    path: path.resolve(__dirname, 'dist/'),
    publicPath: '/',
  },
  optimization: {
    // splitChunks replaces CommonsChunkPlugin
    runtimeChunk: false,
    splitChunks: {
      cacheGroups: {
        default: false,
        commons: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor_app',
          chunks: 'all',
          minChunks: 2,
        },
      },
    },
    minimize: true,
    minimizer: [
      // Minify JS
      new TerserPlugin({
        terserOptions: {
          output: {
            comments: false,
          },
          compress: {
            passes: 3,
            pure_getters: true,
            unsafe: true,
          },
          ecma: undefined,
          warnings: false,
          parse: {
            html5_comments: false,
          },
          mangle: true,
          module: false,
          toplevel: false,
          nameCache: null,
          ie8: false,
          keep_classnames: false,
          keep_fnames: false,
          safari10: false,
        },
      }),
      new CssMinimizerPlugin(),
    ],
  },
  module: {
    rules: [
      // file loader for javascript
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env', '@babel/preset-react'],
          },
        },
      },
      // file loader for html
      {
        test: /\.html$/,
        loader: 'html-loader',
      },
      {
        test: /\.css$|sass$|\.scss$/,
        use: [
          MiniCssExtractPlugin.loader,
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
          //       plugins: [['postcss-preset-env']],
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
      // file loader for fonts
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: ['file-loader'],
      },
      // file loader for images
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/,
        use: [
          'file-loader',
          {
            loader: 'image-webpack-loader',
            options: {
              name: '[path][name]-[fullhash:8].[ext]',
              mozjpeg: {
                progressive: true,
                quality: 65,
              },
              // optipng.enabled: false will disable optipng
              optipng: {
                enabled: false,
              },
              pngquant: {
                quality: [0.65, 0.9],
                speed: 4,
              },
              gifsicle: {
                interlaced: false,
              },
              // the webp option will enable WEBP
              webp: {
                quality: 75,
              },
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('production'),
    }),
    new CleanWebpackPlugin({
      cleanOnceBeforeBuildPatterns: ['**/*'],
    }),
    new HtmlWebpackPlugin({
      // Also generate a test.html
      hash: true,
      filename: 'index.html',
      template: path.join(__dirname, '/public/index.html'),
      inject: true,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].bundle.[fullhash].css',
      chunkFilename: 'chunks/[id].chunk.[fullhash].css',
    }),
  ],
  stats: {
    children: true,
    errorDetails: true,
  },
};

export default webpackConfig;
