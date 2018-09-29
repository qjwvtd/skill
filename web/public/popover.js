/**
 * 气泡提示组件
 **/

class Popover{
    constructor(){
        this.body = window.document.body;
        this.node = null;
        this.nodeId = 'ui-popover-' + randomString(4);
        this.remove = () => {
            this.body.removeChild(this.node);
        };
        this.delay = () => {
            setTimeout();
        };
    }
    top(text,event){
        if(this.node != null){
            this.remove();
        }
        //必须传入text
        const e = event || window.event;
        const target = e.target || e.srcElement;
        const pointX = e.clientX;
        const pointy = e.clientY;
        //console.log(pointX,pointy,text);
        const templete = '<div class="ui-popover-box">' +
                '<div class="ui-popover-content">'+text+'</div>'+
                '<div class="ui-popover-icon"><span></span></div>'+
            '</div>';
        this.node = document.createElement('div');
        this.node.id = this.nodeId;
        this.node.className = "ui-popover";
        this.node.innerHTML = templete;
        this.body.appendChild(this.node);
        //console.log(this.node.clientHeight);
        const nodeHeight = this.node.clientHeight;
        this.node.style.cssText = 'left:'+(pointX - 90)+'px;top:'+(pointy - nodeHeight - 12)+'px;';
        //console.log(pointX,pointy,text,this.node.clientWidth,target.clientHeight);
    }
}
const popover = new Popover();
export default popover;

//随机字符串,用于插件随机ID
function randomString(len) {
    len = len || 32;
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz2345678';
    const maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}