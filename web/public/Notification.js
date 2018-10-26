/**
 * Notification组件
 * @params text,string,通知文本，必传，
 * @params delay,number,毫秒,关闭通知延迟，不传则手动关闭，传参则自动关闭
 * notification.open('不传delay,需要手动关闭!');
 * notification.open('传delay,3秒后自动关闭!',3000);
 **/
const notification = {
    body: document.body,
    open(text,delay){
        if(!text){return;}
        const isActiveClass = text ? 'ui-notification-box active' : 'ui-notification-box';
        const autoTemplate = '<div class="ui-notification-body">' +
            '<p class="ui-notification-centent">' + text + '</p>' +
            '</div>';
        const manualTemplate = '<div class="ui-notification-body">' +
            '<span class="ui-notification-close">×</span>' +
            '<p class="ui-notification-centent">' + text + '</p>' +
            '</div>';
        const fgt = document.createDocumentFragment();
        const container = document.createElement('div');
        container.className = isActiveClass;
        container.innerHTML = delay ? autoTemplate : manualTemplate;
        fgt.appendChild(container);
        this.body.appendChild(fgt);
        if(delay){
            setTimeout(() => {
                this.body.removeChild(container);
            }, delay);
        }else{
            container.onclick = () => {
                this.body.removeChild(container);
            };
        }
    }
};
export default notification;