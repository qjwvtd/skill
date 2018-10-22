/**
 * 气泡提示组件
 * popover.show('this is some popover text');
 **/
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
class Popover{
    constructor(){
        this.body = window.document.body;
        this.node = null;
        this.nodeId = null;
        this.hide = () => {
            if(this.node != null){
                this.body.removeChild(this.node);
                this.node = null;
            }
        };
    }
    show(text,event){
        if(!text){
            //必须传入text
            return;
        }
        if(this.node != null){
            this.hide();
        }
        this.nodeId = 'ui-popover-' + randomString(4);
        const templete = '<div class="ui-popover-box">' +
            '<div class="ui-popover-content">'+text+'</div>'+
            '<div class="ui-popover-icon"><span></span></div>'+
            '</div>';
        const e = event || window.event;
        const target = e.target || e.srcElement;
        const pointX = e.clientX;
        const pointy = e.clientY;
        this.node = document.createElement('div');
        this.node.id = this.nodeId;
        this.node.className = "ui-popover";
        this.node.innerHTML = templete;
        this.body.appendChild(this.node);
        const nodeHeight = this.node.clientHeight;
        this.node.style.cssText = 'left:'+(pointX - 90)+'px;top:'+(pointy - nodeHeight - 12)+'px;';
        target.onmouseout = () => {
            this.hide();
        };
    }
}
const popover = new Popover();
export default popover;

