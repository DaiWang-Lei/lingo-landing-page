const path = require("path");
module.exports = (env, argv) => ({
    "entry": path.resolve('./src/index'),
    "output": {
        "filename": "index.js",
        "path": path.resolve('./dist')
    },
    "module": {
        "rules": [{
            "oneOf": [{
                    "test": /\.js$/i,
                    "exclude": argv.mode === 'production' ? [/webpack/, /babel/, /core-js/] : /node_modules/,
                    "use": [{
                        "loader": "babel-loader",
                        "options": {
                            "babelrc": false,
                            "presets": [
                                [
                                    "@babel/preset-env",
                                    {
                                        "useBuiltIns": "usage",
                                        "corejs": "core-js@3",
                                        "targets": {
                                            "chrome": "23"
                                        }
                                    }
                                ]
                            ],
                            "sourceType": "unambiguous"
                        }
                    }]
                },
                {
                    "test": /\.(ts|tsx|jsx)$/i,
                    "exclude": argv.mode === 'production' ? [/webpack/, /babel/, /core-js/] : /node_modules/,
                    "use": [{
                            "loader": "babel-loader",
                            "options": {
                                "babelrc": false,
                                "presets": [
                                    [
                                        "@babel/preset-env",
                                        {
                                            "useBuiltIns": "usage",
                                            "corejs": "core-js@3",
                                            "targets": {
                                                "chrome": "23"
                                            }
                                        }
                                    ]
                                ],
                                "sourceType": "unambiguous"
                            }
                        },
                        {
                            "loader": "ts-loader",
                            "options": {
                                "allowTsInNodeModules": true,
                                "compilerOptions": {
                                    "declaration": false
                                }
                            }
                        }
                    ]
                },
                {
                    "test": /\.css$/i,
                    "use": [
                        "style-loader",
                        {
                            "loader": "css-loader",
                            "options": {
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss-tailwind",
                                "plugins": [
                                    require('autoprefixer'),
                                    require('@fullhuman/postcss-purgecss')({
                                        content: [
                                            './src/**/*.html',
                                            './src/**/*.vue',
                                            './src/**/*.jsx',
                                            './src/**/*.tsx'
                                        ],
                                        defaultExtractor: content => content.match(/[\w-/:]+(?<!:)/g) || [],
                                        whitelist: ['html', 'body']
                                    })
                                ]
                            }
                        }
                    ],
                    "include": [
                        path.resolve('./node_modules/tailwindcss')
                    ],
                    "exclude": argv.mode === 'production' ? [/webpack/, /babel/, /core-js/] : /node_modules/
                },
                {
                    "test": /\.css$/i,
                    "use": [
                        "style-loader",
                        {
                            "loader": "css-loader",
                            "options": {
                                "importLoaders": 1
                            }
                        },
                        {
                            "loader": "postcss-loader",
                            "options": {
                                "ident": "postcss",
                                "plugins": [
                                    require('autoprefixer')
                                ]
                            }
                        }
                    ]
                },
                {
                    "test": /\.gltf$/i,
                    "loader": "content-loader"
                },
                {
                    "loader": "file-loader",
                    "exclude": [/.(js|mjs|jsx|ts|tsx)$/, /.json$/]
                }
            ]
        }]
    },
    "resolve": {
        "extensions": [
            ".js",
            ".ts",
            ".jsx",
            ".tsx",
            ".css"
        ]
    },
    "node": {
        "fs": "empty"
    },
    "plugins": [
        new(require('html-webpack-plugin'))({
            inject: false,
            template: require('html-webpack-template'),
            appMountId: 'app',
            meta: [{
                    name: 'viewport',
                    content: 'width=device-width, initial-scale=1, maximum-scale=1, minimum-scale=1, user-scalable=no'
                },
                {
                    name: 'description',
                    content: '最适合中国青少年的AI在线编程平台'
                }
            ],
            title: '凌高编程',
            bodyHtmlSnippet: `
				<div
				 id="preload"
				 style="z-index: 99999; background: #48b7fd; width: 100vw; height:100vh; position: fixed; display: flex; align-items: center; justify-content: center; left: 0px; top: 0px;"
				>
					<style>
						.sk-chase {
							width: 40px;
							height: 40px;
							position: relative;
							animation: sk-chase 2.5s infinite linear both;
						}
						
						.sk-chase-dot {
							width: 100%;
							height: 100%;
							position: absolute;
							left: 0;
							top: 0; 
							animation: sk-chase-dot 2.0s infinite ease-in-out both; 
						}
						
						.sk-chase-dot:before {
							content: '';
							display: block;
							width: 25%;
							height: 25%;
							background-color: #fff;
							border-radius: 100%;
							animation: sk-chase-dot-before 2.0s infinite ease-in-out both; 
						}
						
						.sk-chase-dot:nth-child(1) { animation-delay: -1.1s; }
						.sk-chase-dot:nth-child(2) { animation-delay: -1.0s; }
						.sk-chase-dot:nth-child(3) { animation-delay: -0.9s; }
						.sk-chase-dot:nth-child(4) { animation-delay: -0.8s; }
						.sk-chase-dot:nth-child(5) { animation-delay: -0.7s; }
						.sk-chase-dot:nth-child(6) { animation-delay: -0.6s; }
						.sk-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
						.sk-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
						.sk-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
						.sk-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
						.sk-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
						.sk-chase-dot:nth-child(6):before { animation-delay: -0.6s; }
						
						@keyframes sk-chase {
							100% { transform: rotate(360deg); } 
						}
						
						@keyframes sk-chase-dot {
							80%, 100% { transform: rotate(360deg); } 
						}
						
						@keyframes sk-chase-dot-before {
							50% {
								transform: scale(0.4); 
							} 100%, 0% {
								transform: scale(1.0); 
							}
						}
					</style>
					<div class="sk-chase">
						<div class="sk-chase-dot"></div>
						<div class="sk-chase-dot"></div>
						<div class="sk-chase-dot"></div>
						<div class="sk-chase-dot"></div>
						<div class="sk-chase-dot"></div>
						<div class="sk-chase-dot"></div>
					</div>
				</div>`
        }),
        ...(argv.mode === 'production' ? [] : [new(require('webpack')).DefinePlugin({
            development: JSON.stringify(true)
        })])
    ],
    "optimization": {
        "minimizer": [
            new(require('terser-webpack-plugin'))({
                terserOptions: {
                    safari10: true
                }
            })
        ]
    },
    "mode": "development",
    "stats": "minimal",
    "devServer": {
        "compress": true,
        "open": true,
        "host": "0.0.0.0",
        "port": 3000,
        "contentBase": path.resolve('./dist'),
        "https": false,
        "useLocalIp": false
    }
});