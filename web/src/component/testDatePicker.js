/**
 * 日期插件测试
 **/
import React,{Component} from 'react';
import {DatePicker,DateTimePicker,TimePicker} from './../../public/datePicker';
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
                <h5>基于React的一款日期时间插件</h5>
                <div>
                    <DatePicker width='280px' onchange={this.getDate.bind(this)} placeholder="yy/mm/dd" />
                    <br />
                    <DateTimePicker width='280px' onchange={this.getDate.bind(this)} placeholder="yy/mm/dd hh:mm:ss" />
                    <br />
                    <TimePicker width='280px' height={'30px'} onchange={this.getDate.bind(this)} placeholder="hh:mm:ss" />
                </div>
                <br />
                <div>
                    <DateTimePicker width={'40%'} height={'44px'} onchange={this.getDate.bind(this)} />
                </div>
            </div>
        );
    }
}