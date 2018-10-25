/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Modal from './../../public/modal';
export default class ModalTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            visible:false
        };
    };
    openModal(){
        const as = this.state.visible;
        switch (as){
        case true:
            this.setState({visible:false});
            break;
        case false:
            this.setState({visible:true});
            break;
        }
    }
    closeModal(bool){
        this.setState({visible:false});
        console.log(bool);
    }
    render() {
        return (
            <div>
                <h5>模态窗口</h5>
                <div>
                    <button type="button" className="btn btn-md btn-primary" onClick={this.openModal.bind(this)}>open modal</button>
                </div>
                <Modal width={'400px'} visible={this.state.visible} onChange={this.closeModal.bind(this)}>
                    <p>this is some context</p>
                    <p>this is some context</p>
                    <p style={{height:'800px',lineHeight:'300px'}}>this is some context</p>
                    <p>this is some context</p>
                    <p>this is some context</p>
                    <p>this is some context</p>
                </Modal>
            </div>
        );
    }
}