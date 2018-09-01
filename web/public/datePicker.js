/**
 * 基于react的一款日期插件,返回'年/月/日'格式的年月日，'时:分:秒'格式的时分秒
 * 兼容性方面，各大浏览器广泛支持'年/月/日'格式，只有chrome直接支持'年-月-日'
 * 属性：
 * width:{'50%'/'280px'}，百分比或具体的px值,默认280px
 * height:{'40px'}，目前只接收px值,默认32px
 * placeholder:默认'请选择日期'
 * format：日期格式，['ymd'/'YMD'/'ymdhms'/'YMDHMS],年月日/年月日时分秒,默认YMD
 * callback:回调函数，返回一个object,所选日期详情，必须
 * 一般用法:<DatePicker width={'280px'} height={'50px'} format={'YMD'} callback={this.getDate.bind(this)} />
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
//年月切换
class SwitchYearMonthDay extends Component {
    constructor(props) {
        super(props);
    }

    //选择年
    reSelectYear(str) {
        const propYear = Number(this.props.date.year);
        const year = str === 'prev' ? propYear - 1 : propYear + 1;
        this.props.callback(year, '01', '01');
    }

    //选择月
    reSelectMonth(str) {
        let year = Number(this.props.date.year);
        let propMonth = Number(this.props.date.month);
        let month = str === 'prev' ? propMonth - 1 : propMonth + 1;
        if (month <= 0) {
            year = year - 1;
            month = '12';
        }
        if (month >= 13) {
            year = year + 1;
            month = '01';
        }
        this.props.callback(year, setLen(month), '01');
    }

    render() {
        return (
            <div>
                <span className="ui-datePicker-prevYear" onClick={this.reSelectYear.bind(this,'prev')}></span>
                <span className="ui-datePicker-prevMonth" onClick={this.reSelectMonth.bind(this,'prev')}></span>
                <b unselectable="on">{this.props.date.year + '年' + setLen(this.props.date.month) + '月' + setLen(this.props.date.day) + '日'}</b>
                <span className="ui-datePicker-nextMonth" onClick={this.reSelectMonth.bind(this,'next')}></span>
                <span className="ui-datePicker-nextYear" onClick={this.reSelectYear.bind(this,'next')}></span>
            </div>
        );
    }
}
//周
class Weeks extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <ul unselectable="on">
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
        //快速生成一个XX长度的数组
        this.setArray = (len) => {
            const arr = [];
            for (let i = 0; i < len; i++) {
                arr.push(setLen(i));
            }
            return arr;
        };
        this.arrIncludes = (arr, arrItem) => {
            for (let i = 0; i < arr.length; i++) {
                if (arr.indexOf(arrItem) == -1) {
                    return false;
                }
            }
            return true;
        };
        this.hhs = this.setArray(24);
        this.mms = this.setArray(60);
        this.sss = this.setArray(60);
        this.state = {
            hour: props.hms.hour,
            minute: props.hms.minute,
            second: props.hms.second
        };
    }

    //监控时分秒的输入
    listenInput(str, event) {
        const target = event.currentTarget;
        const value = target.value;
        let flag = null;
        switch (str) {
        case 'hh':
            flag = this.arrIncludes(this.hhs, setLen(value));
            target.value = flag ? value : '';
            break;
        case 'mm':
            flag = this.arrIncludes(this.mms, setLen(value));
            target.value = flag ? value : '';
            break;
        case 'ss':
            flag = this.arrIncludes(this.sss, setLen(value));
            target.value = flag ? value : '';
            break;
        }
    }

    onFocus(event) {
        event.currentTarget.value = '';
    }

    //设置当前时间
    setCurrent() {
        const now = new Date();
        this.props.current(now);
        this.refs.hh.value = setLen(now.getHours());
        this.refs.mm.value = setLen(now.getMinutes());
        this.refs.ss.value = setLen(now.getSeconds());
    }

    //清空时分秒
    clearHMS() {
        this.refs.hh.value = '';
        this.refs.mm.value = '';
        this.refs.ss.value = '';
    }

    //设置时分秒
    sethms() {
        const hv = setLen(this.refs.hh.value);
        const mv = setLen(this.refs.mm.value);
        const sv = setLen(this.refs.ss.value);
        this.props.callback(hv, mv, sv);
    }

    //关闭回调
    closeBox() {
        this.props.active(false);
    }

    render() {
        return (
            <div>
                <span>
                    时间
                    <input type="text" ref="hh"
                        defaultValue={this.state.hour}
                        onChange={this.listenInput.bind(this,'hh')} onFocus={this.onFocus.bind(this)}/>:
                    <input type="text" ref="mm"
                        defaultValue={this.state.minute}
                        onChange={this.listenInput.bind(this,'mm')} onFocus={this.onFocus.bind(this)}/>:
                    <input type="text" ref="ss"
                        defaultValue={this.state.second}
                        onChange={this.listenInput.bind(this,'ss')} onFocus={this.onFocus.bind(this)}/>
                </span>
                <span>
                    <button title="清空" onClick={this.clearHMS.bind(this)}>清空</button>
                    <button title="现在" onClick={this.setCurrent.bind(this)}>现在</button>
                    <button onClick={this.sethms.bind(this)}>确定</button>
                    <button onClick={this.closeBox.bind(this)}>关闭</button>
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
        this.format = !props.format || props.format.toUpperCase() != 'YMD' && props.format.toUpperCase() != 'YMDHMS' ? 'YMD' : props.format.toUpperCase();
        this.state = {
            isActive: false,//控制日期盒子显隐
            year: setLen(this.defaultDate.getFullYear()),
            month: setLen(this.defaultDate.getMonth() + 1),
            day: setLen(this.defaultDate.getDate()),
            hour: setLen(this.defaultDate.getHours()),
            minute: setLen(this.defaultDate.getMinutes()),
            second: setLen(this.defaultDate.getSeconds()),
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

    //输入框显示模式(YMD,YMDHMS)
    showformat() {
        let _date;
        switch (this.format) {
        case 'YMD':
            _date = this.state.year + '/' + setLen(this.state.month) + '/' + setLen(this.state.day);
            break;
        case 'YMDHMS':
            _date = this.state.year + '/' + setLen(this.state.month) + '/' + setLen(this.state.day) + ' ' + this.state.hour + ':' + this.state.minute + ':' + this.state.second;
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
        const weekName = weekInfo.weekName;
        this.setState({
            dayArray: arr,
            week: weekName,
            indent: 14.2857 * index + '%'
        });
    }

    //设置回调返回值
    setCallBackValue() {
        const returnValue = {
            year: this.state.year,
            month: this.state.month,
            day: this.state.day,
            hour: this.state.hour,
            minute: this.state.minute,
            second: this.state.second,
            week: this.state.week
        };
        this.props.callback(returnValue);
    }

    //年月切换
    getSwitchYearMonthDay(year, month, day) {
        this.setState({
            year: year,
            month: setLen(month),
            day: day
        }, () => {
            this.showformat();
            this.initDateBox();
            this.setCallBackValue();
        });
    }

    //选择X天
    onSelectDay(item) {
        this.setState({
            isActive: false,
            year: item.year,
            month: setLen(item.month),
            day: setLen(item.day),
            week: item.week
        }, () => {
            this.showformat();
            this.setCallBackValue();
        });
    }

    //当前时间
    onCurrent(date) {
        this.setState({
            year: setLen(date.getFullYear()),
            month: setLen(date.getMonth() + 1),
            day: setLen(date.getDate()),
            hour: setLen(date.getHours()),
            minute: setLen(date.getMinutes()),
            second: setLen(date.getSeconds())
        }, () => {
            this.showformat();
            this.initDateBox();
            this.setCallBackValue();
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
            this.showformat();
            this.initDateBox();
            this.setCallBackValue();
        });
    }

    //关闭日期盒子
    closeDatePickerBox(bool) {
        this.setState({
            isActive: bool
        });
    }

    componentDidMount() {
        this.initDateBox();//初始化
        this.setCallBackValue();
    }

    render() {
        const isBoxActive = this.state.isActive ? 'ui-datePicker-box active' : 'ui-datePicker-box';
        const w = this.props.width ? this.props.width : '280px';
        const h = this.props.height ? this.props.height : '34px';
        const num = Number(h.replace(/px/, ''));
        const placeholder = this.props.placeholder ? this.props.placeholder : '请选择日期';
        return (
            <div className="ui-datePicker" ref="abc" style={{width:w,height:h}}>
                <div className="ui-datePicker-input" onClick={this.controlEvent.bind(this)}>
                    <input type="text" placeholder={placeholder} value={this.state.selectedDate}/>
                    <span className="ui-datePicker-icon" style={{lineHeight:(num - 2)+'px'}}>{this.icon}</span>
                </div>
                <div className={isBoxActive} style={{top:(num + 1)+'px'}}>
                    <div className="ui-datePicker-show">
                        <SwitchYearMonthDay
                            date={this.state}
                            callback={this.getSwitchYearMonthDay.bind(this)}
                        />
                    </div>
                    <div className="ui-datePicker-weeks">
                        <Weeks weeks={this.weeks}/>
                    </div>
                    <div className="ui-datePicker-days">
                        <DayBox
                            list={this.state.dayArray}
                            indent={this.state.indent}
                            currentDay={this.state.day}
                            callback={this.onSelectDay.bind(this)}
                        />
                    </div>
                    <div className="ui-datePicker-times">
                        <TimesBox
                            current={this.onCurrent.bind(this)}
                            active={this.closeDatePickerBox.bind(this)}
                            hms={this.state} callback={this.getHMS.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}