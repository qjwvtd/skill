/*
 * 基于react V16版本createPortal API的模态窗口
 * 需要modal.css
 * @params title--模态标题,string,默认'标题'
 * @params width--模态内容宽度,string,['...px','...%']默认'600px'
 * @params visible--模态显隐,boolean,默认false
 * @params onChange--模态关闭时的回调,参数是一个函数对象,返回boolean值
 * 例：<Modal width={'400px'} visible={false} onChange={this.closeModal.bind(this)}>
 *          <p>this is some modal content</p>
 *     </Modal>
 * */
import React,{ Component } from 'react';
import {createPortal} from 'react-dom';
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
            title:props.title || '标题',
            width:props.width || '600px'
        };
    }
    closeModal(bool){
        this.props.onChange(bool);
    }
    render(){
        const { children } = this.props;
        this.body.style.paddingRight = this.props.visible ? '17px' : '';
        this.body.style.overflow = this.props.visible ? 'hidden' : '';
        this.node = <div className="ui-modal">
            <div className="ui-modal-body" style={{width:this.state.width}}>
                <ModalHead title={this.state.title} close={this.closeModal.bind(this,false)} />
                <div className="ui-modal-content">
                    { children }
                </div>
                <div className="ui-modal-foot">
                    <span className="ui-modal-btn-no" onClick={this.closeModal.bind(this,false)}>取消</span>
                    <span className="ui-modal-btn-ok" onClick={this.closeModal.bind(this,true)}>确定</span>
                </div>
            </div>
        </div>;
        return this.props.visible && createPortal(this.node,this.body);
    }
}