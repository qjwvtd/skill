import React,{Component} from 'react';
import {createPortal} from 'react-dom';
//
//<LoadingMini />;
//<Loading status={true} />
/*
* 需要loading.css
* status:默认true,为false时停止loading
*
*
* */

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

export class LoadingMini extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:props.status ? props.status : false
        };
    }
    render(){
        return (
            <a className="ui-loadingMini">
                <span className="loadingl">l</span>
                <span className="loadingo">o</span>
                <span className="loadinga">a</span>
                <span className="loadingd">d</span>
                <span className="loadingi">i</span>
                <span className="loadingn">n</span>
                <span className="loadingg">g</span>
                <span className="loadingp1">.</span>
                <span className="loadingp2">.</span>
                <span className="loadingp3">.</span>
            </a>
        );
    }
}

export class Loading extends Component{
    constructor(props){
        super(props);
        this.body = window.document.body;
    }
    template(){
        this.node = <div className="ui-loading">
            <div className="ui-loading-box">
                <div className="ui-loading-pie"></div>
                <p>加载中</p>
            </div>
        </div>;
        return this.node;
    }
    render(){
        const template = this.template();
        return this.props.status ? createPortal(template,this.body) : null;
    }
}