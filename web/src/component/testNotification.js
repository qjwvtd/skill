/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import notification from './../../public/notification';
export default class NotificationTest extends Component {
    constructor(props) {
        super(props);
    }

    onOpenRender(){
        notification.open('不传delay,需要手动关闭!');
    }
    onOpenAuto(){
        notification.open('传delay,3秒后自动关闭!',3000);
    }
    render() {
        return (
            <div>
                <h5>通知(notification)</h5>
                <button className="btn btn-primary" onClick={this.onOpenRender.bind(this)}>需要手动关闭</button>
                <button className="btn btn-primary" onClick={this.onOpenAuto.bind(this)}>会自动关闭</button>
            </div>
        );
    }
}