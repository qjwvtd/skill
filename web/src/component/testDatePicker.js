/**
 * 日期插件测试
 **/
import React,{Component} from 'react';
import DatePicker from './../../public/datePicker';
export default class DatePickerTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h5>基于React的一款日期插件</h5>
                <DatePicker />
            </div>
        );
    }
}