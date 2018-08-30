/**
 * 日期插件测试
 **/
import React,{Component} from 'react';
import DatePicker from './../../public/datePicker';
export default class DatePickerTest extends Component {
    constructor(props) {
        super(props);
    }

    getDate(dateInfo) {
        console.log(JSON.stringify(dateInfo));
    }

    render() {
        return (
            <div>
                <h5>基于React的一款日期插件</h5>
                <div>
                    <DatePicker callback={this.getDate.bind(this)} />
                </div>
                <br />
                <div>
                    <DatePicker width={'100%'} height={'44px'} model={'YMDHMS'} callback={this.getDate.bind(this)} />
                </div>
                <br />
                <div>
                    <DatePicker width={'400px'} height={'48px'} model={'HMS'} callback={this.getDate.bind(this)} />
                </div>
            </div>
        );
    }
}