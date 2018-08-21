/**
 * 浏览器对象的一些信息
 **/
class Browser{
    constructor(){
        this.u = navigator.userAgent;//用户代理
        this.app = navigator.appVersion;//版本
        this.p = navigator.platform;//平台
    }
    navigatorInfo(){
        const devices = [
            {windows: this.p.indexOf('Win') > -1, name:'windows操作系统'},
            {webKit: this.u.indexOf('AppleWebKit') > -1, name:'苹果、谷歌内核'},
            {mac: this.p.indexOf('Mac') > -1, name:'Mac操作系统'},
            {trident: this.u.indexOf('Trident') > -1, name:'IE内核'},
            {presto: this.u.indexOf('Presto') > -1, name:'opera内核'},
            {gecko: this.u.indexOf('Gecko') > -1 && this.u.indexOf('KHTML') == -1, name:'火狐内核'},
            {mobile: !!this.u.match(/AppleWebKit.*Mobile.*/), name:'移动终端设备'},
            {ios: !!this.u.match(/i[^;]+;( U;)? CPU.+Mac OS X/), name:'ios终端'},
            {android: this.u.indexOf('Android') > -1 || this.u.indexOf('Linux') > -1, name:'android终端或uc浏览器'},
            {iPhone: this.u.indexOf('iPhone') > -1, name:'iPhone/QQHD浏览器'},
            {iPad: this.u.indexOf('iPad') > -1, name:'iPad'},
            {weixin: this.u.indexOf('MicroMessenger') > -1, name:'微信'},
            {webApp: this.u.indexOf('Safari') == -1, name:'web应用程序'},
            {UCB: this.u.match(/UCBrowser/i) == "UCBrowser", name:'uc浏览器'},
            {QQB: this.u.match(/MQQBrowser/i) == "MQQBrowser", name:'QQ浏览器'}
        ];
        const currentInfo = [];
        for(let i=0;i<devices.length;i++){
            for(let key in devices[i]){
                if(devices[i][key] == true){
                    currentInfo.push(devices[i]);
                }
            }
        }
        return JSON.stringify(currentInfo);
    }
    //浏览器的userAgent，用正则来判断是否是ios和Android客户端
    appInfo(){
        const isAndroid = this.u.indexOf('Android') > -1 || this.u.indexOf('Linux') > -1; //android终端或者uc浏览器
        const isiOS = !!this.u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/); //ios终端
        const isWindow = this.u.indexOf('Windows') > -1;//pc端windows
        return 'Android：'+isAndroid+'\n'+'ios：'+isiOS+'\n'+'Window: '+isWindow+'\n'+"verson info:"+this.app;
    }
}
const browser = new Browser();
export default browser;