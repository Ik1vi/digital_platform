const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const multi = require('multi-loader');

module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
        // {
        //     test: /\.html$/,
        //     use: "html-loader"
        // },
        // {
        //     test: /\.css$/,
        //     use: ["style-loader", "css-loader"],
        // },
        {
            test: /\.scss$/,
            use: ["style-loader", "css-loader", "sass-loader"],
        },
        // {
        //     test: /\.m?js$/,
        //     exclude: /(node_modules|bower_components)/,
        //     use: {
        //         loader: 'babel-loader',
        //         options: {
        //             presets: ['@babel/preset-env'],
        //         }
        //     },
        // },
        {
            test: /\.(png|svg|jpg|jpeg|gif|webp)$/,
            type: 'asset/resource',
        },
        {
            test: /\.(woff|woff2|eot|ttf|otf)$/,
            type: 'asset/resource',
        },
        // {
        //   test: /\.(jpe?g|png)$/i,
        //   loader: multi(
        //     'file-loader?name=[name].[ext].webp!webp-loader?{quality: 95}',
        //     'file-loader?name=[name].[ext]'
        //   )
        // },
    ],
},
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./favicon.png",
      template: path.resolve(__dirname, "index.html")
    }),
  ],
};
