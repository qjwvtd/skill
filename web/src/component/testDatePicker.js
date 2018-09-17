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
        console.log('回调：'+JSON.stringify(dateInfo));
    }

    render() {
        return (
            <div>
                <h5>基于React的一款日期插件</h5>
                <div>
                    <DatePicker width={'280px'} onchange={this.getDate.bind(this)} placeholder="开始日期" />
                    <br />
                    <DatePicker width={'280px'} type={'full'} onchange={this.getDate.bind(this)} placeholder="结束日期" />
                </div>
                <br />
                <div>
                    <DatePicker width={'40%'} height={'44px'} type={'full'} onchange={this.getDate.bind(this)} />
                </div>
            </div>
        );
    }
}