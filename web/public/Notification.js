/**
 * Notification组件
 **/
import React,{Component} from 'react';

//随机字符串
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

class Notification{
    constructor(){
        this.body = document.body;
        this.container = null;
        this.boxId = randomString(6);
    }
    auto(text,delay){
        const container = document.getElementById(this.boxId);
        if(container){
            const template = '<div class="ui-notification-body">' +
                '<p class="ui-notification-centent">'+text+'</p>' +
                '</div>';
            this.container.innerHTML = template;
            setTimeout(() => {
                this.close();
            },delay);
        }
        if(!container){
            const fgt = document.createDocumentFragment();
            this.container = document.createElement('div');
            this.container.id = this.boxId;
            const isActiveClass = text ? 'ui-notification-box active' : 'ui-notification-box';
            this.container.className = isActiveClass;
            delay = delay ? delay : 3000;
            const template = '<div class="ui-notification-body">' +
                '<p class="ui-notification-centent">'+text+'</p>' +
                '</div>';
            this.container.innerHTML = template;
            fgt.appendChild(this.container);
            this.body.appendChild(fgt);
            setTimeout(() => {
                this.close();
            },delay);
        }
    }
    render(text){
        const container = document.getElementById(this.boxId);
        if(container){
            const template = '<div class="ui-notification-body">' +
                '<span class="ui-notification-close">×</span>' +
                '<p class="ui-notification-centent">'+text+'</p>' +
                '</div>';
            this.container.innerHTML = template;
            this.container.onclick = () => {
                this.close();
            };
        }
        if(!container){
            const fgt = document.createDocumentFragment();
            this.container = document.createElement('div');
            this.container.id = this.boxId;
            const isActiveClass = text ? 'ui-notification-box active' : 'ui-notification-box';
            this.container.className = isActiveClass;
            const template = '<div class="ui-notification-body">' +
                '<span class="ui-notification-close">×</span>' +
                '<p class="ui-notification-centent">'+text+'</p>' +
                '</div>';
            this.container.innerHTML = template;
            fgt.appendChild(this.container);
            this.body.appendChild(fgt);
            this.container.onclick = () => {
                this.close();
            };
        }
    }
    close(){
        if(this.container != null){
            this.body.removeChild(this.container);
            this.container = null;
        }
    }
}
const notification = new Notification();
export default notification;