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
//类似于alert(只有一个确认按钮)
export class ModalAlert extends Component{
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
                    <div className="modal-head">{title}<span onClick={this.closeDilog.bind(this,false)}>×</span></div>
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
//类似于confirm(两个按钮)
export class ModalConfirm extends Component{
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
//类似于prompt(弹出一个输入框)
export class ModalPrompt extends Component{
    constructor(props){
        super(props);
        this.state = {};
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
        return (
            <div className={this.props.status ? 'modal active' : 'modal'}>
                <div className="modal-body" ref="modalWindow" style={{width:width}}>
                    <div className="modal-head">{title}<span onClick={this.closeModal.bind(this,false)}>×</span></div>
                    <div className="modal-content">
                        <input type="text" ref="promptModalIn" className="promptModalIn" placeholder="Please enter text" />
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
//无确认按钮、取消按钮的会话框
export class ModalDilog extends Component{
    constructor(props){
        super(props);
    }
    closeModal(bool){
        this.props.close(bool);
    }
    render(){
        const title = this.props.title ? this.props.title : '标题';
        const width = this.props.width ? this.props.width : '600px';
        return (
            <div className={this.props.status ? 'modal active' : 'modal'}>
                <div className="modal-body" ref="modalWindow" style={{width:width}}>
                    <div className="modal-head">{title}<span onClick={this.closeModal.bind(this,false)}>×</span></div>
                    <div className="modal-content">
                        {this.props.message}
                    </div>
                </div>
            </div>
        );
    }
}