/**
 * 气泡提示组件
 * popover.top('this is some popover text');
 **/
//随机字符串,用于插件随机ID
function randomString(len) {
    len = len || 32;
    const $chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
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
        this.clear = () => {
            if(this.node != null){
                this.body.removeChild(this.node);
                this.body.style.paddingRight = '';
                this.body.style.overflow = '';
                this.node = null;
            }
        };
    }
    top(text,event){
        if(!text){
            //必须传入text
            return;
        }
        if(this.node != null){
            this.clear();
        }
        const templete = '<div class="ui-popover-box">'+text+'<span class="ui-popover-topIcon"></span></div>',
            e = event || window.event,
            target = e.target || e.srcElement,
            pointX = e.clientX,
            pointy = e.clientY;
        if(!this.node){
            this.body.style.paddingRight = '17px';
            this.body.style.overflow = 'hidden';
            this.node = document.createElement('a');
            this.node.className = "ui-popover";
            this.node.innerHTML = templete;
            this.body.appendChild(this.node);
            const nodeHeight = this.node.clientHeight;
            this.node.style.cssText = 'left:'+(pointX - 90)+'px;top:'+(pointy - nodeHeight - 12)+'px;';
        }
        target.onmouseout = () => {
            this.clear();
        };
    }
    bottom(text,event){
        if(!text){
            //必须传入text
            return;
        }
        if(this.node != null){
            this.clear();
        }
        const templete = '<div class="ui-popover-box ui-popover-content">'+text+'<span class="ui-popover-bottomIcon"></span></div>',
            e = event || window.event,
            target = e.target || e.srcElement,
            pointX = e.clientX,
            pointy = e.clientY;
        if(!this.node){
            this.body.style.paddingRight = '17px';
            this.body.style.overflow = 'hidden';
            this.node = document.createElement('a');
            this.node.className = "ui-popover";
            this.node.innerHTML = templete;
            this.body.appendChild(this.node);
            const nodeHeight = this.node.clientHeight;
            this.node.style.cssText = 'left:'+(pointX - 90)+'px;top:'+(pointy + nodeHeight/2 - 20)+'px;';
        }
        target.onmouseout = () => {
            this.clear();
        };
    }
    left(text,event){
        if(!text){
            //必须传入text
            return;
        }
        if(this.node != null){
            this.clear();
        }
        const templete = '<div class="ui-popover-box ui-popover-content">'+text+'<span class="ui-popover-leftIcon"></span></div>',
            e = event || window.event,
            target = e.target || e.srcElement,
            pointX = e.clientX,
            pointy = e.clientY;
        if(!this.node){
            this.body.style.paddingRight = '17px';
            this.body.style.overflow = 'hidden';
            this.node = document.createElement('a');
            this.node.className = "ui-popover";
            this.node.innerHTML = templete;
            this.body.appendChild(this.node);
            const nodeWidth = this.node.clientWidth;
            const nodeHeight = this.node.clientHeight;
            this.node.style.cssText = 'left:'+(pointX - nodeWidth - 12)+'px;top:'+(pointy - nodeHeight/2)+'px;';
        }
        target.onmouseout = () => {
            this.clear();
        };
    }
    right(text,event){
        if(!text){
            //必须传入text
            return;
        }
        if(this.node != null){
            this.clear();
        }
        const templete = '<div class="ui-popover-box ui-popover-content">'+text+'<span class="ui-popover-rightIcon"></span></div>',
            e = event || window.event,
            target = e.target || e.srcElement,
            pointX = e.clientX,
            pointy = e.clientY;
        if(!this.node){
            this.body.style.paddingRight = '17px';
            this.body.style.overflow = 'hidden';
            this.node = document.createElement('a');
            this.node.className = "ui-popover";
            this.node.innerHTML = templete;
            this.body.appendChild(this.node);
            const nodeHeight = this.node.clientHeight;
            this.node.style.cssText = 'left:'+(pointX + 24)+'px;top:'+(pointy - nodeHeight/2)+'px;';
        }
        target.onmouseout = () => {
            this.clear();
        };
    }
}
const popover = new Popover();
export default popover;

