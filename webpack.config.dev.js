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

const PUBLIC_PATH = '/';

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  mode: 'development',
  entry: {
    main: './src/index.js',
  },
  target: 'web',
  devtool: 'inline-source-map',
  output: {
    // serves build from memory
    path: path.join(__dirname, 'public'),
    filename: 'js/[name].bundle.[fullhash].js',
    chunkFilename: 'chunks/[name].chunk.[fullhash].js',
    publicPath: PUBLIC_PATH,
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
      files: './src/static/css/*.css',
      fix: true,
    }),
    new ImageMinimizerPlugin({
      minimizer: {
        implementation: ImageMinimizerPlugin.squooshMinify,
        options: {
          encodeOptions: {
            mozjpeg: {
              // That setting might be close to lossless, but it’s not guaranteed
              // https://github.com/GoogleChromeLabs/squoosh/issues/85
              quality: 100,
            },
            webp: {
              lossless: 1,
            },
            avif: {
              // https://github.com/GoogleChromeLabs/squoosh/blob/dev/codecs/avif/enc/README.md
              cqLevel: 0,
            },
          },
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
        type: 'asset/resource',
        use: ['file-loader'],
      },
      // file loader for images
      {
        test: /\.(jpg|jpeg|png|gif|svg|pdf|ico)$/,
        type: 'asset/resource',
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
      Images: path.resolve(__dirname, './static/src/images/'),
      Fonts: path.resolve(__dirname, './src/static/fontawesome/webfonts/'),
    },
  },
};
