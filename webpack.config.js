const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'app.bundle.js',
        path: path.resolve(__dirname, 'dist'),
        sourceMapFilename: '[file].map',
    },
    devServer: {
        static: './dist',
    },
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,  // Updated to include .jsx files
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
};