import React,{Component} from 'react';
//date
import date from './../../public/myDate';

export default class DateTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <p>随机日期：{date.ranDate().ymd_hms}</p>
                <p>日期格式化：{date.fmtDate(new Date().getTime()).ymd_hms}</p>
                <p>统计某月天数：{'2018-12有'+date.getDays(2018,12)+'天'}</p>
                <p>获取星期几：{'今天:' + date.getWeek()}</p>
            </div>
        );
    }
}