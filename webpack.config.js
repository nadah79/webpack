const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin =require('mini-css-extract-plugin');

module.exports={
    entry:{
        main:path.resolve(__dirname,'./src/index.js')
    },
    output:{
        filename: 'bundle.js',
        path:path.resolve(__dirname,'dist'),
    },
    module: {
        rules: [
          {
            test: /\.html$/i,
            loader: "html-loader",
          },
          {
            test: /\.css$/i,
            use: [MiniCssExtractPlugin.loader, "css-loader"],
          },
          {
            test:/\.jpg$/i,
            loader:"file-loader",
          }
        ],
      },
      plugins: [new HtmlWebpackPlugin({
        template:"./src/index.html",
        inject:"body",
        filename:"index.html"
      }),
      new MiniCssExtractPlugin({
        filename:"style.min.css"})
    ],
      
    };
