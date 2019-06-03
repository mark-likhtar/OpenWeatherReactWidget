const path = require("path");
module.exports = {
  entry: {
    app: ["babel-polyfill", "./src/index.js"]
  },
  output: {
    path: path.resolve(__dirname, "build"),
    filename: "bundle.js",
    libraryTarget: 'commonjs2'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"],
            plugins: ["babel-plugin-transform-class-properties"]
          }
        }
      },
      {
        test: /\.scss$/,
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          },
          {
            loader: "sass-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      },
      {
        test: /\.css$/,
        include: [
          path.resolve(__dirname, './src/css'),
        ],
        use: [
          {
            loader: "style-loader"
          },
          {
            loader: "css-loader",
            options: {
              sourceMap: true
            }
          }
        ]
      }, {
        test: /\.svg$/,
        loader: 'svg-inline-loader'
      }, {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=\d+\.\d+\.\d+)?$/,
        use: [{
          loader: 'file-loader',
          options: {
            name: '[name].[ext]',
            outputPath: 'fonts/'
          }
        }]
      }
    ]
  },
  resolve: {
    extensions: ["*", ".js", ".jsx"]
  },
  externals: {
    'react': 'commonjs react' 
  },
  mode: "development"
};
