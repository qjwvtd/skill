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
        notification.render('the notification infomations，需要手动关闭!');
    }
    onOpenAuto(){
        notification.auto('the notification infomations，会自动关闭!',2500);
    }
    render() {
        return (
            <div>
                <h5>通知(notification)</h5>
                <button className="btn btn-promise" onClick={this.onOpenRender.bind(this)}>需要手动关闭</button>
                <button className="btn btn-promise" onClick={this.onOpenAuto.bind(this)}>会自动关闭</button>
            </div>
        );
    }
}