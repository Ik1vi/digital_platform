const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
  entry: './src/index.js',
  output: {
    filename: 'main.js',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
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
    ],
},
  plugins: [
    new HtmlWebpackPlugin({
      favicon: "./favicon.png",
      template: path.resolve(__dirname, "index.html")
    }),
  ],
};
