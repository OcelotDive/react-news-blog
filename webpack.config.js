var path = require('path');
var HtmlWebpackPlugin = require ('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin')
// Object which contains an entry point loaders an output path and any plugins
// publicPath property allows to set base path for all assets
//historyApiFallback when server sees a route it falls back to the root then 
//redirected by react router
module.exports = {
    entry: './app/index.js',
    module: {
        rules: [
        {test: /\.(js)$/, use: 'babel-loader'},
        {test: /\.css$/, use: ['style-loader', 'css-loader']},
      
        {test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf|svg)(\?[a-z0-9=.]+)?$/,loader: 'url-loader?limit=100000' }    
        ]
    },
    output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'index_bundle.js',
    publicPath: '/'
},
    devServer: {
        historyApiFallback: true
    },
    mode: process.env.NODE_ENV === 'production' ? 'production' : 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: 'app/index.html'
        }),
         new CopyPlugin([
      { from : '_redirects' }
    ])
    ]
    
}