# 前端工程师的奇淫巧技
------------------------------------------------------------------------
npm install

/----启动NODE服务----/

node run server

/----NODE启动完成----/

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