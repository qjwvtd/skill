/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import {ModalAlert,ModalConfirm,ModalPrompt,ModalDilog} from './../../public/modal';
export default class ModalTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            alertStatus:false,
            confirmStatus:false,
            promptStatus:false,
            dilogStatus:false
        };
    };
    //alert
    openAlert(){
        const as = this.state.alertStatus;
        switch (as){
        case true:
            this.setState({alertStatus:false});
            break;
        case false:
            this.setState({alertStatus:true});
            break;
        }
    }
    closeAlert(bool){
        this.setState({alertStatus:false});
        console.log(bool);
    }
    //confirm
    openConfirm(){
        const as = this.state.confirmStatus;
        switch (as){
        case true:
            this.setState({confirmStatus:false});
            break;
        case false:
            this.setState({confirmStatus:true});
            break;
        }
    }
    closeConfirm(bool){
        this.setState({confirmStatus:false});
        console.log(bool);
    }
    //Prompt
    openPrompt(){
        const as = this.state.promptStatus;
        switch (as){
        case true:
            this.setState({promptStatus:false});
            break;
        case false:
            this.setState({promptStatus:true});
            break;
        }
    }
    closePrompt(bool,value){
        this.setState({promptStatus:false});
        if(bool){
            alert(value);
        }
    }
    //Dilog
    openDilog(){
        const as = this.state.dilogStatus;
        switch (as){
        case true:
            this.setState({dilogStatus:false});
            break;
        case false:
            this.setState({dilogStatus:true});
            break;
        }
    }
    closeDilog(bool){
        this.setState({dilogStatus:false});
        console.log(bool);
    }
    render() {
        return (
            <div>
                <h5>模态窗口</h5>
                <div>
                    <button type="button" className="btn btn-md btn-promise" onClick={this.openAlert.bind(this)}>Alert modal</button>
                    <button type="button" className="btn btn-md btn-promise" onClick={this.openConfirm.bind(this)}>Confirm modal</button>
                    <button type="button" className="btn btn-md btn-promise" onClick={this.openPrompt.bind(this)}>Prompt modal</button>
                    <button type="button" className="btn btn-md btn-promise" onClick={this.openDilog.bind(this)}>Dilog modal</button>
                </div>
                <ModalAlert title={'alert modal'} width={'360px'} status={this.state.alertStatus} close={this.closeAlert.bind(this)}>
                    <p>this is some context</p>
                </ModalAlert>
                <ModalConfirm title={'confirm modal'} width={'360px'} status={this.state.confirmStatus} close={this.closeConfirm.bind(this)}>
                    <p>this is some context</p>
                </ModalConfirm>
                <ModalPrompt title={'Prompt modal'} width={'360px'} status={this.state.promptStatus} close={this.closePrompt.bind(this)} />
                <ModalDilog
                    title={'Dilog modal'}
                    width={'260px'}
                    status={this.state.dilogStatus}
                    close={this.closeDilog.bind(this)}
                    message={'this is some message'}
                />
            </div>
        );
    }
}