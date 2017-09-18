const path = require('path');

module.exports = {
    entry: './js/entry.jsx',
    output: {
      filename: 'bundle.js',
      path: path.resolve(__dirname, 'dist')
    },
    module: {
        loaders: [
            {
                test: /\.css$/,
                use: [ 'style-loader', 'css-loader' ]
            },
            {
                test: /\.(jsx|js)$/,
                include: /js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react']
                    }
                }
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        alias: {
            'components': './components',
        }
    }
};
