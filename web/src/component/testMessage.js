/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import message from './../../public/message';
export default class MessageTest extends Component {
    constructor(props) {
        super(props);
    }

    onSuccess() {
        message.success('this is some success message!');
    }
    onWarning() {
        message.warning('this is some warning message!');
    }
    onError() {
        message.error('this is some error message!');
    }

    render() {
        return (
            <div>
                <h5>消息组件（纯函数实现）</h5>
                <button className="btn btn-promise" onClick={this.onSuccess.bind(this)}>success</button>
                <button className="btn btn-promise" onClick={this.onWarning.bind(this)}>warning</button>
                <button className="btn btn-promise" onClick={this.onError.bind(this)}>error</button>
            </div>
        );
    }
}