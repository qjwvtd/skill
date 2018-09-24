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


//类似于alert(只有一个确认按钮)
export class ModalAlert extends Component{
    constructor(props){
        super(props);
        this.body = window.document.body;
    }
    closeModal(bool){
        this.props.close(bool);
    }
    render(){
        const { children } = this.props;
        const title = this.props.title ? this.props.title : '标题';
        const width = this.props.width ? this.props.width : '600px';
        const isActiveClassBody = this.props.status ? 'ui-modal-body active' : 'ui-modal-body';
        const isActiveWidth = this.props.status ? width : '0';
        this.node = <div className={this.props.status ? 'ui-modal active' : 'ui-modal'}>
            <div className={isActiveClassBody} style={{width:isActiveWidth}}>
                <ModalHead title={title} close={this.closeModal.bind(this)} />
                <div className="ui-modal-content">
                    { children }
                </div>
                <div className="ui-modal-foot">
                    <span className="btnOK" onClick={this.closeModal.bind(this,true)}>确定</span>
                </div>
            </div>
        </div>;
        return this.props.status ? createPortal(this.node,this.body) : null;
    }
}
//类似于confirm(两个按钮)
export class ModalConfirm extends Component{
    constructor(props){
        super(props);
        this.body = window.document.body;
    }
    closeModal(bool){
        this.props.close(bool);
    }
    render(){
        const { children } = this.props;
        const title = this.props.title ? this.props.title : '标题';
        const width = this.props.width ? this.props.width : '600px';
        const isActiveClassBody = this.props.status ? 'ui-modal-body active' : 'ui-modal-body';
        const isActiveWidth = this.props.status ? width : '0';
        this.node = <div className={this.props.status ? 'ui-modal active' : 'ui-modal'}>
            <div className={isActiveClassBody} style={{width:isActiveWidth}}>
                <ModalHead title={title} close={this.closeModal.bind(this)} />
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
//类似于prompt(弹出一个输入框)
export class ModalPrompt extends Component{
    constructor(props){
        super(props);
        this.body = window.document.body;
    }
    closeModal(bool){
        const value = this.refs.promptModalIn.value;
        if(bool && value.length > 0){
            this.props.close(bool,value);
        }else{
            this.props.close();
        }

    }
    render(){
        const title = this.props.title ? this.props.title : '标题';
        const width = this.props.width ? this.props.width : '600px';
        const isActiveClassBody = this.props.status ? 'ui-modal-body active' : 'ui-modal-body';
        const isActiveWidth = this.props.status ? width : '0';
        this.node = <div className={this.props.status ? 'ui-modal active' : 'ui-modal'}>
            <div className={isActiveClassBody} style={{width:isActiveWidth}}>
                <ModalHead title={title} close={this.closeModal.bind(this)} />
                <div className="ui-modal-content">
                    <input type="text" ref="promptModalIn" className="promptModalIn" placeholder="Please enter text" />
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
//无确认按钮、取消按钮的会话框
export class ModalDilog extends Component{
    constructor(props){
        super(props);
        this.body = window.document.body;
    }
    closeModal(bool){
        this.props.close(bool);
    }
    render(){
        const title = this.props.title ? this.props.title : '标题';
        const width = this.props.width ? this.props.width : '600px';
        const isActiveClassBody = this.props.status ? 'ui-modal-body active' : 'ui-modal-body';
        const isActiveWidth = this.props.status ? width : '0';
        this.node = <div className={this.props.status ? 'ui-modal active' : 'ui-modal'}>
            <div className={isActiveClassBody} style={{width:isActiveWidth}}>
                <ModalHead title={title} close={this.closeModal.bind(this)} />
                <div className="ui-modal-content">
                    {this.props.message}
                </div>
            </div>
        </div>;
        return this.props.status ? createPortal(this.node,this.body) : null;
    }
}