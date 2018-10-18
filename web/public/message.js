/*
* 需要message.css
* 接口：
* message.success(text,delay),
* message.info(text,delay),
* message.warning(text,delay),
* message.error(text,delay),
* #######华丽的分界线#######
* @params text,消息内容，必传
* @params delay,延迟关闭，默认3秒
* */

//随机字符串,随机ID
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

class Message{
    constructor(){
        this.body = document.body;
        this.boxId = randomString(6);
        this.__delay = 3000;//默认3秒后remove
        this.container = null;
    }
    success(text,delay){
        text = text ? text : 'this is some message text!';
        const container = document.getElementById(this.boxId);
        const successTemplate = '<a class="ui-message-body ui-message-success">' +
            '<span class="ui-message-success-icon">√</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        if(!container){
            this.render(successTemplate);
            this.remove(delay ? delay : this.__delay);
        }
        return;
    }
    info(text,delay){
        text = text ? text : 'this is some message text!';
        const container = document.getElementById(this.boxId);
        const successTemplate = '<a class="ui-message-body ui-message-info">' +
            '<span class="ui-message-info-icon">i</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        if(!container){
            this.render(successTemplate);
            this.remove(delay ? delay : this.__delay);
        }
        return;
    }
    warning(text,delay){
        text = text ? text : 'this is some message text!';
        const container = document.getElementById(this.boxId);
        const warningTemplate = '<a class="ui-message-body ui-message-warning">' +
            '<span class="ui-message-warning-icon">!</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        if(!container){
            this.render(warningTemplate);
            this.remove(delay ? delay : this.__delay);
        }
        return;
    }
    error(text,delay){
        text = text ? text : 'this is some message text!';
        const container = document.getElementById(this.boxId);
        const errorTemplate = '<a class="ui-message-body ui-message-error">' +
            '<span class="ui-message-error-icon">×</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        if(!container){
            this.render(errorTemplate);
            this.remove(delay ? delay : this.__delay);
        }
        return;
    }
    render(temp){
        this.container = document.createElement('div');
        this.container.id = this.boxId;
        this.container.className = 'ui-message-box active';
        this.container.innerHTML = temp;
        this.body.appendChild(this.container);
    }
    remove(delay){
        setTimeout(() => {
            this.container.className = 'ui-message-box';
            setTimeout(() => {
                this.body.removeChild(this.container);
            },500);
        },delay);
    };
}
const message = new Message();
export default message;