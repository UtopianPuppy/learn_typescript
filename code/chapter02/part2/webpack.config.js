const path = require("path");
const HTMLWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

// webpack中的所有配置信息都应该写在module.exports中
module.exports = {
    mode: "development",
    // 指定入口文件
    entry: "./src/index.ts",

    // 指定打包文件所在目录
    output: {
        // 指定打包文件的目录
        path: path.resolve(__dirname, 'dist'),
        // 打包后文件的名字
        filename: "bundle.js",

        // 告诉webpack不使用箭头函数
        // environment: {
        //     arrowFunction: false
        // }
    },

    // 指定webpack打包时要使用的模块
    module: {
        // 指定要加载的规则
        rules: [
            {
                // test指定规则生效的文件类型
                test: /\.ts$/,
                // 要使用的loader
                use: [
                    // 配置babel
                    {
                        // 指定加载器
                        loader: "babel-loader",
                        // 设置babel
                        options: {
                            presets: [
                                [
                                    "@babel/preset-env",
                                    {
                                        // 要兼容的目标浏览器
                                        targets: {
                                            "chrome": "58",
                                            "ie": "8"
                                        },

                                        // 指定corejs的版本
                                        "corejs": "3",
                                        // 使用corejs的方式"usage" 表示按需加载
                                        "useBuiltIns": 'usage'
                                    }
                                ]
                            ]
                        }
                    }
                    , 'ts-loader'],
                // 要排除的文件
                exclude: /node_modules/
            },
            {
                test: /\.less$/,
                use: [
                    "style-loader",
                    "css-loader",
                    {
                        loader: "postcss-loader",
                        options: {
                            postcssOptions: {
                                plugins: [
                                    [
                                        "postcss-preset-env",
                                        {
                                            browsers: 'last 2 versions'
                                        }
                                    ]
                                ]
                            }
                        }
                    },
                    "less-loader"
                ]
            }
        ]
    },

    // 配置webpack插件
    plugins: [
        new CleanWebpackPlugin(),
        new HTMLWebpackPlugin({
            // title: "欸嘿"
            template: "./src/index.html"
        }),

    ],

    // 设置引用模块
    resolve: {
        extensions: ['.ts', '.js']
    }
}