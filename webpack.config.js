const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[file].map', // Updated sourceMapFilename
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,  // Updated to include .jsx files
                exclude: /node_modules/, 
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env', '@babel/preset-react'],
                        sourceMaps: true
                    }
                }
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx'],
    },
    optimization: {
        minimize: true,
    },
};