//需要message.css
//Message 使用message.success(text,delay);

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
        this.__delay = 3000;//默认2.5秒后remove
        this.container = null;
        //this.container = document.createElement('div');
        //this.container.className = 'ui-message-box';
        //this.__delay = 2500;//默认2.5秒后remove
        //this.successTemplate = (successText) => {
        //    return '<a class="ui-message-body"><span class="successIcon">√</span><span>'+successText+'</span></a>';
        //};
        //this.warningTemplate = (warningText) => {
        //    return '<a class="ui-message-body"><span class="warningIcon">!</span><span>'+warningText+'</span></a>';
        //};
        //this.errorTemplate = (errorText) => {
        //    return '<a class="ui-message-body"><span class="errorIcon">×</span><span>'+errorText+'</span></a>';
        //};
        this.remove = (delay) => {
            setTimeout(() => {
                this.body.removeChild(this.container);
            },delay);
        };
    }
    success(text,delay){
        text = text ? text : 'this is some message text!';
        const isActive = text ? 'ui-message-box active' : 'ui-message-box';
        const container = document.getElementById(this.boxId);
        const temp = '<a class="ui-message-body">' +
            '<span class="ui-message-success-icon">√</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        if(!container){
            this.container = document.createElement('div');
            this.container.id = this.boxId;
            this.container.className = isActive;
            this.container.innerHTML = temp;
            this.body.appendChild(this.container);
            this.remove(delay ? delay : this.__delay);
        }
        return;
    }
    warning(text,delay){
        this.container.innerHTML = this.warningTemplate(text);
        this.body.appendChild(this.container);
        this.remove(delay ? delay : this.__delay);
    }
    error(text,delay){
        this.container.innerHTML = this.errorTemplate(text);
        this.body.appendChild(this.container);
        this.remove(delay ? delay : this.__delay);
    }
}
const message = new Message();
export default message;