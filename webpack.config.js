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
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true
                        }
                    }
                ]
            },
            {
                test: /\.(jsx|js)$/,
                include: /js/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env', 'react', 'stage-3']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg)$/,
                use: 'file-loader'
            }
        ]
    },
    devServer: {
        contentBase: './dist'
    },
    resolve: {
        alias: {
            'helpers': path.resolve(__dirname, 'js/helpers'),
            'components': path.resolve(__dirname, 'js/components'),
            'css': path.resolve(__dirname, 'css')
        }
    }
};
