/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Modal from './../../public/modal';
export default class ModalTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            status:false
        };
    };
    openModal(){
        const as = this.state.status;
        switch (as){
        case true:
            this.setState({status:false});
            break;
        case false:
            this.setState({status:true});
            break;
        }
    }
    closeModal(bool){
        this.setState({status:false});
        console.log(bool);
    }
    render() {
        return (
            <div>
                <h5>模态窗口</h5>
                <div>
                    <button type="button" className="btn btn-md btn-promise" onClick={this.openModal.bind(this)}>open modal</button>
                </div>
                <Modal title={'modal title'} width={'400px'} status={this.state.status} close={this.closeModal.bind(this)}>
                    <p>this is some context</p>
                    <p>this is some context</p>
                    <p>this is some context</p>
                    <p>this is some context</p>
                    <p>this is some context</p>
                    <p>this is some context</p>
                </Modal>
            </div>
        );
    }
}