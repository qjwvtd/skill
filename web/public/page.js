/**
 * 一些关于DOM、BOM的公用方法
 **/
class Page{
    constructor(){
        this.__doc = document;
        this.__body = this.__doc.body;
        this.__docEl = this.__doc.documentElement;
        this.__docMode = this.__doc.compatMode == "BackCompat" ? this.__body : this.__doc.documentElement;
    }
    //获取页面宽度
    pageWidth(){
        return Math.max(
            this.__docEl.scrollWidth,
            this.__body.scrollWidth,
            this.__docMode.clientWidth
        );
    }
    //获取页面高度
    pageHeight(){
        return Math.max(
            this.__docEl.scrollHeight,
            this.__body.scrollHeight,
            this.__docMode.clientHeight
        );
    }
    //页面回车事件，接受回调参数
    pageEnterDown(callback){
        this.__doc.onkeydown = (event) => {
            let code = event.charCode || event.keyCode;
            if(code == 13){
                //这里是回车后的代码
                callback();
            }
        };
    }
    //鼠标移动时的坐标
    mousePoints(ev){
        let _x,_y;
        ev = ev || window.event;
        if(ev.pageX || ev.pageY){
            _x = ev.pageX;
            _y = ev.pageY;
        }else{
            _x = ev.clientX + document.body.scrollLeft - document.body.clientLeft;
            _y = ev.clientY + document.body.scrollTop - document.body.clientTop;
        }
        return {x:_x,y:_y};
    }
}
const page = new Page();
export default page;
