# 前端工程师的奇淫巧技
------------------------------------------------------------------------
npm install

node run server

webpack -p

npm start

访问：http://localhost:/6868

#关于谷歌浏览器跨域的解决方法

1、右键谷歌浏览器，选择属性

2、选择快捷方式

3、目标选项内的谷歌浏览器位置后面添加 --disable-web-security，(留一个空格)如："C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --disable-web-security
   注：chrome 49版本之后需要添加一个用户个人信息存放目录，在后面加上：--user-data-dir=C:\MyChromeDevUserData
   在chrome setting页面输入：chrome://version 可以查看当前版本信息及默认的个人信息路径
   
4、关闭浏览器，重新打开，出现小黄条：'您使用的是不受支持的命令行标记：--disable-web-security。稳定性和安全性有所下降'，就成功了

/****eslint 配置开始****/

(先全局安装eslint、babel-eslint，再依赖安装)

npm install eslint -g/--save-dev

npm install babel-eslint -g/--save-dev

根据项目需要配置.eslintrc文件，放入项目根目录

详细规则在https://cn.eslint.org/docs/rules/查看并添加


webpack配置：

rules中添加：

{
   test: /\.(js|jsx)$/,
   use: {loader: 'eslint-loader'},
   exclude: /node_modules/
}

plugins中添加：

new webpack.LoaderOptionsPlugin({
    test: /\.(js|jsx)$/,
    options:{
        eslint: './.eslintrc'
    }
})

在package.json的scripts中加入:

"lint": "eslint --fix --ext .js,.jsx web"

web是需要修复的目录

npm run lint就可以修复代码了

/****eslint 配置结束****/

