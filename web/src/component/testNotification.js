/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import notification from './../../public/notification';
export default class NotificationTest extends Component {
    constructor(props) {
        super(props);
    }

    onOpenNotification(){
        notification.render();
    }
    render() {
        return (
            <div>
                <h5>通知(notification)</h5>
                <button className="btn btn-promise" onClick={this.onOpenNotification.bind(this)}>notification</button>
            </div>
        );
    }
}