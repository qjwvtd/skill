import React,{ Component } from 'react';
import {createPortal} from 'react-dom';
/*
 * 基于react V16版本createPortal API的模态窗口
 * 需要modal.css
 * 属性解释:
 * title--模态标题,string,默认'标题'
 * width--模态内容宽度,string,['...px','...%']默认'600px'
 * status--模态显隐,boolean,默认false
 * close--模态关闭时的回调,返回boolean值
 * */

class ModalHead extends Component{
    constructor(props){
        super(props);
    }
    close(){
        this.props.close(false);
    }
    render(){
        return (
            <div className="ui-modal-head">
                {this.props.title}
                <span onClick={this.close.bind(this)}>×</span>
            </div>
        );
    }
}
export default class Modal extends Component{
    constructor(props){
        super(props);
        this.body = window.document.body;
        this.state = {
            title:props.title ? props.title : '标题',
            width:props.width ? props.width : '600px'
        };
    }
    closeModal(bool){
        this.props.close(bool);
    }
    render(){
        const { children } = this.props;
        this.node = <div className="ui-modal">
            <div className="ui-modal-body" style={{width:this.state.width}}>
                <ModalHead title={this.state.title} close={this.closeModal.bind(this)} />
                <div className="ui-modal-content">
                    { children }
                </div>
                <div className="ui-modal-foot">
                    <span className="btnNO" onClick={this.closeModal.bind(this,false)}>取消</span>
                    <span className="btnOK" onClick={this.closeModal.bind(this,true)}>确定</span>
                </div>
            </div>
        </div>;
        return this.props.status ? createPortal(this.node,this.body) : null;
    }
}