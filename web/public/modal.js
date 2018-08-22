/*
 * 2018/5/18
 * administractor
 */
import React,{ Component } from 'react';
/*
 * 需要modal.css
 * 属性解释:
 * title--模态标题,string,默认'标题'
 * width--模态内容宽度,string,['...px','...%']默认'600px'
 * status--模态显隐,boolean,默认false
 * close--模态关闭时的回调,返回boolean值
 * */
export class Modal extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    closeModal(bool){
        this.props.close(bool);
    }
    render(){
        const { children } = this.props;
        const title = this.props.title ? this.props.title : '标题';
        const width = this.props.width ? this.props.width : '600px';
        return (
            <div className={this.props.status ? 'modal active' : 'modal'}>
                <div className="modal-body" ref="modalWindow" style={{width:width}}>
                    <div className="modal-head">{title}<span onClick={this.closeModal.bind(this,false)}>×</span></div>
                    <div className="modal-content">
                        { children }
                    </div>
                    <div className="modal-foot">
                        <span className="btnCancel btnMd" onClick={this.closeModal.bind(this,false)}>取消</span>
                        <span className="btnSucces btnMd" onClick={this.closeModal.bind(this,true)}>确定</span>
                    </div>
                </div>
            </div>
        );
    }
}
//会话，用法同Modal一样
export class Dilog extends Component{
    constructor(props){
        super(props);
        this.state = {};
    }
    closeDilog(bool){
        this.props.close(bool);
    }
    render(){
        const { children } = this.props;
        const title = this.props.title ? this.props.title : '标题';
        const width = this.props.width ? this.props.width : '600px';
        return (
            <div className={this.props.status ? 'modal active' : 'modal'}>
                <div className="modal-body" ref="modalWindow" style={{width:width}}>
                    <div className="modal-head">{this.props.title}<span onClick={this.closeDilog.bind(this,false)}>×</span></div>
                    <div className="modal-content">
                        { children }
                    </div>
                    <div className="modal-foot">
                        <span className="btnSucces btnLg" onClick={this.closeDilog.bind(this,true)}>确定</span>
                    </div>
                </div>
            </div>
        );
    }
}

