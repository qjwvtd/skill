//需要message.css
//Message 使用message.success(text,delay);
class Message{
    constructor(){
        this.body = document.getElementsByTagName('body')[0];
        this.messageContainer = document.createElement('div');
        this.messageContainer.className = 'messageContainer';
        this.__delay = 2500;//默认2.5秒后remove
        this.successTemplate = (successText) => {
            return '<a class="messageBody active"><span class="successIcon">√</span><span>'+successText+'</span></a>';
        };
        this.warningTemplate = (warningText) => {
            return '<a class="messageBody active"><span class="warningIcon">!</span><span>'+warningText+'</span></a>';
        };
        this.errorTemplate = (errorText) => {
            return '<a class="messageBody active"><span class="errorIcon">×</span><span>'+errorText+'</span></a>';
        };
        this.remove = (delay) => {
            setTimeout(() => {
                this.body.removeChild(this.messageContainer);
            },delay);
        };
    }
    success(text,delay){
        this.messageContainer.innerHTML = this.successTemplate(text);
        this.body.appendChild(this.messageContainer);
        this.remove(delay ? delay : this.__delay);
    }
    warning(text,delay){
        this.messageContainer.innerHTML = this.warningTemplate(text);
        this.body.appendChild(this.messageContainer);
        this.remove(delay ? delay : this.__delay);
    }
    error(text,delay){
        this.messageContainer.innerHTML = this.errorTemplate(text);
        this.body.appendChild(this.messageContainer);
        this.remove(delay ? delay : this.__delay);
    }
}
const message = new Message();
export default message;