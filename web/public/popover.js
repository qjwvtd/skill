/**
 * 气泡提示组件
 * popover.top('this is some popover text');
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
    }
    top(text,event){
        if(!text){
            //必须传入text
            return;
        }
        const box = document.getElementsByClassName('ui-popover')[0];
        if(box){
            this.body.removeChild(box);
        }
        this.body.style.paddingRight = '17px';
        this.body.style.overflow = 'hidden';
        const templete = '<div class="ui-popover-box">' +
            '<div class="ui-popover-content">'+text+'</div>'+
            '<div class="ui-popover-icon ui-popover-top"><span></span></div>'+
            '</div>';
        const e = event || window.event;
        const target = e.target || e.srcElement;
        const pointX = e.clientX;
        const pointy = e.clientY;
        const node = document.createElement('a');
        node.className = "ui-popover";
        node.innerHTML = templete;
        this.body.appendChild(node);
        const nodeHeight = node.clientHeight;
        node.style.cssText = 'left:'+(pointX - 90)+'px;top:'+(pointy - nodeHeight - 12)+'px;';
        target.onmouseout = () => {
            this.body.removeChild(node);
            this.body.style.paddingRight = '';
            this.body.style.overflow = '';
        };
    }
    bottom(text,event){
        if(!text){
            //必须传入text
            return;
        }
        const box = document.getElementsByClassName('ui-popover')[0];
        if(box){
            this.body.removeChild(box);
        }
        this.body.style.paddingRight = '17px';
        this.body.style.overflow = 'hidden';
        const templete = '<div class="ui-popover-box">' +
            '<div class="ui-popover-icon ui-popover-bottom"><span></span></div>'+
            '<div class="ui-popover-content">'+text+'</div>'+
            '</div>';
        const e = event || window.event;
        const target = e.target || e.srcElement;
        const pointX = e.clientX;
        const pointy = e.clientY;
        const node = document.createElement('a');
        node.className = "ui-popover";
        node.innerHTML = templete;
        this.body.appendChild(node);
        const nodeHeight = node.clientHeight;
        node.style.cssText = 'left:'+(pointX - 90)+'px;top:'+(pointy + nodeHeight/2)+'px;';
        target.onmouseout = () => {
            this.body.removeChild(node);
            this.body.style.paddingRight = '';
            this.body.style.overflow = '';
        };
    }
    left(text,event){
        if(!text){
            //必须传入text
            return;
        }
        const box = document.getElementsByClassName('ui-popover')[0];
        if(box){
            this.body.removeChild(box);
        }
        this.body.style.paddingRight = '17px';
        this.body.style.overflow = 'hidden';
        const templete = '<div class="ui-popover-box">' +
            '<div class="ui-popover-icon ui-popover-left"><span></span></div>'+
            '<div class="ui-popover-content">'+text+'</div>'+
            '</div>';
        const e = event || window.event;
        const target = e.target || e.srcElement;
        const pointX = e.clientX;
        const pointy = e.clientY;
        const node = document.createElement('a');
        node.className = "ui-popover";
        node.innerHTML = templete;
        this.body.appendChild(node);
        const nodeWidth = node.clientWidth;
        const nodeHeight = node.clientHeight;
        node.style.cssText = 'left:'+(pointX - nodeWidth - 12)+'px;top:'+(pointy - nodeHeight/2)+'px;';
        target.onmouseout = () => {
            this.body.removeChild(node);
            this.body.style.paddingRight = '';
            this.body.style.overflow = '';
        };
    }
    right(text,event){
        if(!text){
            //必须传入text
            return;
        }
        const box = document.getElementsByClassName('ui-popover')[0];
        if(box){
            this.body.removeChild(box);
        }
        this.body.style.paddingRight = '17px';
        this.body.style.overflow = 'hidden';
        const templete = '<div class="ui-popover-box">' +
            '<div class="ui-popover-icon ui-popover-right"><span></span></div>'+
            '<div class="ui-popover-content">'+text+'</div>'+
            '</div>';
        const e = event || window.event;
        const target = e.target || e.srcElement;
        const pointX = e.clientX;
        const pointy = e.clientY;
        const node = document.createElement('a');
        node.className = "ui-popover";
        node.innerHTML = templete;
        this.body.appendChild(node);
        const nodeWidth = node.clientWidth;
        const nodeHeight = node.clientHeight;
        node.style.cssText = 'left:'+(pointX + 24)+'px;top:'+(pointy - nodeHeight/2)+'px;';
        target.onmouseout = () => {
            this.body.removeChild(node);
            this.body.style.paddingRight = '';
            this.body.style.overflow = '';
        };
    }
}
const popover = new Popover();
export default popover;

