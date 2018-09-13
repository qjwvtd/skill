/**
 * Notification组件
 **/
import React,{Component} from 'react';

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

class Notification{
    constructor(){
        this.body = document.body;
        this.container = null;
        this.boxId = randomString(6);
    }
    auto(text,delay){
        text = text ? text : 'this is some notification text!';
        const isActiveClass = text ? 'ui-notification-box active' : 'ui-notification-box';
        const container = document.getElementById(this.boxId);
        const template = '<div class="ui-notification-body">' +
            '<p class="ui-notification-centent">'+text+'</p>' +
            '</div>';
        if(!container){
            const fgt = document.createDocumentFragment();
            this.container = document.createElement('div');
            this.container.id = this.boxId;
            this.container.className = isActiveClass;
            delay = delay ? delay : 3000;
            this.container.innerHTML = template;
            fgt.appendChild(this.container);
            this.body.appendChild(fgt);
            setTimeout(() => {
                this.close();
            },delay);
        }
        return;
    }
    render(text){
        text = text ? text : 'this is some notification text!';
        const isActiveClass = text ? 'ui-notification-box active' : 'ui-notification-box';
        const container = document.getElementById(this.boxId);
        const template = '<div class="ui-notification-body">' +
            '<span class="ui-notification-close">×</span>' +
            '<p class="ui-notification-centent">'+text+'</p>' +
            '</div>';
        if(!container){
            const fgt = document.createDocumentFragment();
            this.container = document.createElement('div');
            this.container.id = this.boxId;
            this.container.className = isActiveClass;
            this.container.innerHTML = template;
            fgt.appendChild(this.container);
            this.body.appendChild(fgt);
            this.container.onclick = () => {
                this.close();
            };
        }
        return;
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