import React,{Component} from 'react';
import Ajax from './../../public/ajax';
export default class TestAjax extends Component {
    constructor(props) {
        super(props);
        this.state = {
            getData:'',
            postData:''
        };
    }
    componentDidMount() {
        const ajax = new Ajax();
        ajax.get({
            url:'http://192.168.10.89:8080/knowledge/document/all',
            success:(res) => {
                this.setState({
                    getData:res
                });
            },
            error:(error) => {
                console.log(error);
            }
        });
        ajax.post({
            url:'http://192.168.10.89:8080/knowledge/document/123',
            success:(res) => {
                this.setState({
                    postData:res
                });
            },
            error:(error) => {
                console.log(error);
            }
        });
    }
    render() {
        return (
            <div>
                <h3>test ajax</h3>
                <p>{this.state.getData}</p>
                <p>{this.state.postData}</p>
            </div>
        );
    }
}