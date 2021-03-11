const CracoLessPlugin = require('craco-less');
const path = require('path');

module.exports = {
  webpack: {
    // 别名
    alias: {
      "@": path.resolve("src"),
      "@utils": path.resolve("src/utils"),
      "@constants": path.resolve("src/constants"),
      "@components": path.resolve("src/components"),
      "@pages": path.resolve("src/pages"),
      "@router": path.resolve("src/router"),
      "@examples": path.resolve("src/examples"),
      "@assets": path.resolve("src/assets"),
      "@services": path.resolve("src/services"),
      "@actions": path.resolve("src/actions"),
      "@cache": path.resolve("src/cache"),
    }
  },
  plugins: [
    {
      plugin: CracoLessPlugin,
      options: {
        lessLoaderOptions: {
          lessOptions: {
            modifyVars: { '@primary-color': '#1DA57A' },
            javascriptEnabled: true,
          },
        },
      },
    },
  ],
  babel:{  
    plugins: [
      ["@babel/plugin-proposal-decorators", { legacy: true }],  //装饰器
      [   
        "import", 
        {
          "libraryName": "antd",
          "libraryDirectory": "es",
           "style": true //设置为true即是less
         }
     ]
    ]
  },
  //配置代理解决跨域
  devServer: {
    proxy: {
      "/api": {
        target: "http://apis.juhe.cn",
        // target: "http://v.juhe.cn",
        //target: 'http://192.168.9.19:8080',
        changeOrigin: true,
        pathRewrite: {
          // 替换target中的请求地址，也就是说以后你在请求http://v.juhe.cn这个地址的时候直接写成/api即可。
            "^/api": ""
        }
      },
    }
  },
  
};