var path = require('path');
var webpack = require('webpack');

module.exports = {
    entry: ['babel-polyfill','./src/main.js'], // 项目的入口文件，webpack会从main.js开始，把所有依赖的js都加载打包
    output: {
        path: path.resolve(__dirname, './dist'), // 项目的打包文件路径
        publicPath: '/dist', // 通过devServer访问路径
        filename: 'build.js' // 打包后的文件名
    },
    resolve: {
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    module: {
        rules: [
            {
                test: /\.css$/, // 匹配后缀为css的文件
                use: [
                    'vue-style-loader', // 分别用css-loader和vue-style-loader解析,
                    'css-loader' // 解析器从上往下解析，另外，这里因为使用的是vue开发，所以用vue-style-loader，其他情况下使用style-loader
                ]
            },
            {
                test: /\.scss$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            },
            {
                test: /\.sass$/,
                use: [
                    'vue-style-loader',
                    'css-loader',
                    'sass-loader?indentedSyntax'
                ]
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: /node_modules/ // 忽略node_modules下的文件不进行转码
            },
            {
                test: /\.(png|jpg|gif|svg)$/,
                loader: 'file-loader',
                options: {
                    name: '[name].[ext]?[hash]'
                }
            },
            {
                test: /\.vue$/,
                loader: 'vue-loader',
                options: {
                    loader: {
                        'scss': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader'
                        ],
                        'sass': [
                            'vue-style-loader',
                            'css-loader',
                            'sass-loader?indentedSyntax'
                        ]
                    }
                }
            }
        ]
    },
    devtool: '#eval-source-map'
}

// 判断NODE_ENV为production时压缩代码
if (process.env.NODE_ENV === 'production') {
    module.exports.devtool = '#source-map';
    module.exports.plugins = (module.exports.plugins || []).concat([
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: '"production"'
            }
        }),
        new webpack.optimize.UglifyJsPlugin()
    ])
}