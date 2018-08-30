/**
 * 基于react的一款日期插件
 * 兼容性方面，各大浏览器广泛支持'年/月/日'格式，只有chrome直接支持'年-月-日'
 * 属性：
 * width:{'50%'/'280px'}，百分比或具体的px值,默认280px
 * height:{'40px'}，目前只接收px值,默认32px
 * model：输入框显示模式，['YMD'/'YMDHMS'/'HMS'],即默认显示的值：年月日/年月日时分秒/时分秒,默认YMD
 * callback:回调函数，返回所选日期详情，必须
 * 一般用法:<DatePicker width={'280px'} height={'50px'} model={'YMD'} callback={this.getDate.bind(this)} />
 * 懒人用法：<DatePicker callback={this.getDate.bind(this)} />
 **/
import React,{Component} from 'react';

//为不足两位的月或日补0
function setLen(str) {
    if (!str || str.length == 0 || str == '') {
        return '00';
    }
    const __str = str.toString().length < 2 ? 0 + str.toString() : str.toString();
    return __str;
};
//判断时分秒函数
function arrIncludes(arr, arrItem) {
    for (let i = 0; i < arr.length; i++) {
        if (arr.indexOf(arrItem) == -1) {
            return false;
        }
    }
    return true;
}
//周
class Weeks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul>
                {
                    this.props.weeks.map((item, index) => {
                        return <li key={item+'-'+index}>{item}</li>;
                    })
                }
            </ul>
        );
    }
}
//天数盒子
class DayBox extends Component {
    constructor(props) {
        super(props);
    }

    selectDay(item) {
        this.props.callback(item);
    }

    render() {
        const dataList = this.props.list;
        const inDent = this.props.indent;
        const day = this.props.currentDay;
        return (
            <ul>
                {
                    dataList.length > 0 ? dataList.map((item, index) => {
                        const isActive = day === item.day ? 'active' : 'noActive';
                        const span = <span
                            className={isActive}
                            onClick={this.selectDay.bind(this,item)}>{item.day}</span>;
                        return index == 0
                            ? (<li key={item.day} style={{marginLeft:inDent}}>{span}</li>)
                            : (<li key={item.day}>{span}</li>);
                    }) : 'loading...'
                }
            </ul>
        );
    }
}
//时分秒按钮盒子
class TimesBox extends Component {
    constructor(props) {
        super(props);
        this.hhs = [];
        this.mms = [];
        this.sss = [];
    }

    componentDidMount() {
        for (let i = 0; i < 24; i++) {
            this.hhs.push(setLen(i));
        }
        for (let i = 0; i < 60; i++) {
            this.mms.push(setLen(i));
            this.sss.push(setLen(i));
        }
    }

    //监控时分秒的输入
    listenInput(str, event) {
        const target = event.currentTarget;
        const value = target.value;
        let flag = null;
        switch (str){
        case 'hh':
            flag = arrIncludes(this.hhs, setLen(value));
            target.value = flag ? value : '00';
            break;
        case 'mm':
            flag = arrIncludes(this.mms, setLen(value));
            target.value = flag ? value : '00';
            break;
        case 'ss':
            flag = arrIncludes(this.sss, setLen(value));
            target.value = flag ? value : '00';
            break;
        }
    }

    reset() {
        this.props.reset();
        this.refs.hh.value = '00';
        this.refs.mm.value = '00';
        this.refs.ss.value = '00';
    }

    //设置时分秒
    sethms() {
        const hv = setLen(this.refs.hh.value);
        const mv = setLen(this.refs.mm.value);
        const sv = setLen(this.refs.ss.value);
        this.props.callback(hv, mv, sv);
    }

    render() {
        return (
            <div>
                <span>时间</span>
                <span>
                    <input type="text" ref="hh" placeholder="时" onChange={this.listenInput.bind(this,'hh')}/>:
                </span>
                <span>
                    <input type="text" ref="mm" placeholder="分" onChange={this.listenInput.bind(this,'mm')}/>:
                </span>
                <span>
                    <input type="text" ref="ss" placeholder="秒" onChange={this.listenInput.bind(this,'ss')}/>
                </span>
                <span>
                    <button title="重置" onClick={this.reset.bind(this)}>刷新</button>
                    <button onClick={this.sethms.bind(this)}>确定</button>
                </span>
            </div>
        );
    }
}

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.defaultDate = new Date();
        this.weeks = ["日", "一", "二", "三", "四", "五", "六"];
        this.icon = '▦';
        this.model = props.model ? props.model : 'YMD';
        this.state = {
            isActive: false,//控制日期盒子显隐
            year: setLen(this.defaultDate.getFullYear()),
            month: setLen(this.defaultDate.getMonth() + 1),
            day: setLen(this.defaultDate.getDate()),
            hour: '00',
            minute: '00',
            second: '00',
            week: '',
            dayArray: [],
            indent: null,//天数格子缩进量
            selectedDate: ''
        };
    }

    //日期盒子显隐
    controlEvent() {
        const status = this.state.isActive;
        this.setState({
            isActive: status ? false : true
        });
    }

    //输入框显示模式(YMD,YMDHMS,HMS)
    showModel() {
        let _date;
        switch (this.model) {
        case 'YMD':
            _date = this.state.year + '/' + setLen(this.state.month) + '/' + setLen(this.state.day);
            break;
        case 'YMDHMS':
            _date = this.state.year + '/' + setLen(this.state.month) + '/' + setLen(this.state.day) + ' ' + this.state.hour + ':' + this.state.minute + ':' + this.state.second;
            break;
        case 'HMS':
            _date = this.state.hour + ':' + this.state.minute + ':' + this.state.second;
            break;
        }
        this.setState({
            selectedDate: _date
        });
    }

    //根据时间戳获取星期几
    getWeek(dateStr) {
        const weekIndex = dateStr.getDay();
        const week = this.weeks[weekIndex];
        return {weekName: '星期' + week, index: weekIndex};
    }

    //根据年、月，获取每月天数
    getCurrentMonthDays(year, month) {
        const __date = new Date(year, month, 0);
        return __date.getDate();
    }

    //统计天数格子
    initDateBox() {
        const days = this.getCurrentMonthDays(this.state.year, this.state.month);
        const arr = [];
        for (let i = 0; i < days; i++) {
            const item = {};
            const itemDay = i + 1;
            const __week = this.getWeek(new Date(this.state.year + '/' + this.state.month + '/' + itemDay));
            item.year = this.state.year;
            item.month = setLen(this.state.month);
            item.day = setLen(itemDay);
            item.week = __week.weekName;
            arr.push(item);
        }
        //每月1号下标,初始化日期盒子缩进量
        const weekInfo = this.getWeek(new Date(this.state.year + '/' + this.state.month + '/' + '01'));
        const index = weekInfo.index;
        this.setState({
            dayArray: arr,
            indent: 14.2857 * index + '%'
        });
        this.showModel();
        const returnValue = {
            year:this.state.year,
            month:this.state.month,
            day:this.state.day,
            hour:this.state.hour,
            minute:this.state.minute,
            second:this.state.second,
            week:this.state.week
        };
        this.props.callback(returnValue);
    }

    //选择年
    reSelectYear(str) {
        //上一年
        if (str === 'prevYear') {
            const pYear = Number(this.state.year) - 1;
            this.setState({
                year: pYear,
                month: '01',
                day: '01'
            }, () => {
                this.initDateBox();
            });
        }
        //下一年
        if (str === 'nextYear') {
            const nYear = Number(this.state.year) + 1;
            this.setState({
                year: nYear,
                month: '01',
                day: '01'
            }, () => {
                this.initDateBox();
            });
        }
    }

    //选择月
    reSelectMonth(str) {
        let year = Number(this.state.year);
        let month = Number(this.state.month);
        if (str === 'prevMonth') {
            month = month - 1;
        }
        if (str === 'nextMonth') {
            month = month + 1;
        }
        if (month <= 0) {
            year = year - 1;
            month = 12;
        }
        if (month >= 13) {
            year = year + 1;
            month = 1;
        }
        this.setState({
            year: year,
            month: setLen(month),
            day: '01'
        }, () => {
            this.initDateBox();
        });
    }

    //选择X天
    onSelectDay(item) {
        this.setState({
            isActive:false,
            year: item.year,
            month: setLen(item.month),
            day: setLen(item.day),
            week:item.week
        }, () => {
            this.initDateBox();
        });
    }

    //重置
    onReSet() {
        this.setState({
            year: setLen(this.defaultDate.getFullYear()),
            month: setLen(this.defaultDate.getMonth() + 1),
            day: setLen(this.defaultDate.getDate()),
            hour: '00',
            minute: '00',
            second: '00'
        }, () => {
            this.initDateBox();
        });
    }

    //获取时分秒
    getHMS(h, m, s) {
        this.setState({
            isActive: false,
            hour: h,
            minute: m,
            second: s
        }, () => {
            this.initDateBox();
        });
    }

    componentDidMount() {
        this.initDateBox();//初始化
    }

    render() {
        const isBoxActive = this.state.isActive ? 'ui-datePicker-box active' : 'ui-datePicker-box';
        const w = this.props.width ? this.props.width : '280px';
        const h = this.props.height ? this.props.height : '34px';
        const num = Number(h.replace(/px/, ''));
        return (
            <div className="ui-datePicker" style={{width:w,height:h}}>
                <div className="ui-datePicker-input">
                    <input type="text" value={this.state.selectedDate} onClick={this.controlEvent.bind(this)}/>
                    <span className="ui-datePicker-icon" style={{lineHeight:(num - 2)+'px'}}>{this.icon}</span>
                </div>
                <div className={isBoxActive} style={{top:(num + 1)+'px'}}>
                    <div className="ui-datePicker-show">
                        <span className="ui-datePicker-prevYear" onClick={this.reSelectYear.bind(this,'prevYear')}></span>
                        <span className="ui-datePicker-prevMonth" onClick={this.reSelectMonth.bind(this,'prevMonth')}></span>
                        <b>{this.state.year + '年' + setLen(this.state.month) + '月' + setLen(this.state.day) + '日'}</b>
                        <span className="ui-datePicker-nextMonth" onClick={this.reSelectMonth.bind(this,'nextMonth')}></span>
                        <span className="ui-datePicker-nextYear" onClick={this.reSelectYear.bind(this,'nextYear')}></span>
                    </div>
                    <div className="ui-datePicker-weeks">
                        <Weeks weeks={this.weeks}/>
                    </div>
                    <div className="ui-datePicker-days">
                        <DayBox list={this.state.dayArray} indent={this.state.indent} currentDay={this.state.day} callback={this.onSelectDay.bind(this)}/>
                    </div>
                    <div className="ui-datePicker-times">
                        <TimesBox reset={this.onReSet.bind(this)} callback={this.getHMS.bind(this)}/>
                    </div>
                </div>
            </div>
        );
    }
}