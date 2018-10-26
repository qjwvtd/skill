/*
* 需要message.css
* 接口：
* message.success(text),
* message.info(text),
* message.warning(text),
* message.error(text),
* #######华丽的分界线#######
* @params text,消息内容，必传
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

const message = {
    body: document.body,
    __delay: 3000,//默认3秒后remove
    success(text){
        if(!text){return;}
        let delay = this.__delay;//默认延迟3秒关闭
        const successTemplate = '<a class="ui-message-body ui-message-success">' +
            '<span class="ui-message-success-icon">√</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        const container = document.createElement('div');
        container.className = 'ui-message-box active';
        container.innerHTML = successTemplate;
        this.body.appendChild(container);
        container.onclick = () => {
            delay = 0;
            this.remove(container);
        };
        setTimeout(() => {
            if(delay != 0){
                this.remove(container);
            }
        },this.__delay);
    },
    info(text){
        if(!text){return;}
        let delay = this.__delay;//默认延迟3秒关闭
        const infoTemplate = '<a class="ui-message-body ui-message-info">' +
            '<span class="ui-message-info-icon">i</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        const container = document.createElement('div');
        container.className = 'ui-message-box active';
        container.innerHTML = infoTemplate;
        this.body.appendChild(container);
        container.onclick = () => {
            delay = 0;
            this.remove(container);
        };
        setTimeout(() => {
            if(delay != 0){
                this.remove(container);
            }
        },this.__delay);
    },
    warning(text){
        if(!text){return;}
        let delay = this.__delay;//默认延迟3秒关闭
        const warningTemplate = '<a class="ui-message-body ui-message-warning">' +
            '<span class="ui-message-warning-icon">!</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        const container = document.createElement('div');
        container.className = 'ui-message-box active';
        container.innerHTML = warningTemplate;
        this.body.appendChild(container);
        container.onclick = () => {
            delay = 0;
            this.remove(container);
        };
        setTimeout(() => {
            if(delay != 0){
                this.remove(container);
            }
        },this.__delay);
    },
    error(text){
        if(!text){return;}
        let delay = this.__delay;//默认延迟3秒关闭
        const errorTemplate = '<a class="ui-message-body ui-message-error">' +
            '<span class="ui-message-error-icon">×</span>' +
            '<span>'+text+'</span>' +
            '</a>';
        const container = document.createElement('div');
        container.className = 'ui-message-box active';
        container.innerHTML = errorTemplate;
        this.body.appendChild(container);
        container.onclick = () => {
            delay = 0;
            this.remove(container);
        };
        setTimeout(() => {
            if(delay != 0){
                this.remove(container);
            }
        },this.__delay);
    },
    remove(container){
        container.className = 'ui-message-box';
        setTimeout(() => {
            this.body.removeChild(container);
        },100);
    }
};
export default message;