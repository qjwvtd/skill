/**
 * 基于react的一款日期插件,返回'年/月/日'格式的年月日，'时:分:秒'格式的时分秒
 * 兼容性方面，各大浏览器广泛支持'年/月/日'格式，只有chrome直接支持'年-月-日'
 * 三个组件：{DatePicker,DateTimePicker,TimePicker}
 * 通用属性：
 * width:{'50%'/'280px'}，百分比或具体的px值,默认280px
 * height:{'40px'}，目前只接收px值,默认32px
 * placeholder:默认'请选择日期'
 * onchange:回调函数，返回一个object,所选日期详情，必须完整
 * 一般用法:<DatePicker width={'280px'} height={'50px'} callback={this.getDate.bind(this)} />
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
//根据年月获取每月天数
function getMonthDays(year,month){
    const __date = new Date(year, month, 0);
    return __date.getDate();
}
//随机字符串,用于插件随机ID
function randomString(len) {
    len = len || 32;
    /****默认去掉了容易混淆的字符oOLl,9gq,Vv,Uu,I1****/
    const $chars = 'ABCDEFGHJKMNPQRSTWXYZ123456789';
    const maxPos = $chars.length;
    let str = '';
    for (let i = 0; i < len; i++) {
        str += $chars.charAt(Math.floor(Math.random() * maxPos));
    }
    return str;
}
//年月切换
class SwitchYearMonthDay extends Component {
    constructor(props) {
        super(props);
    }

    //选择年
    reSelectYear(str,e) {
        e.stopPropagation();
        const propYear = Number(this.props.date.year);
        const year = str === 'prev' ? propYear - 1 : propYear + 1;
        this.props.callback(year, '01', '01');
    }

    //选择月
    reSelectMonth(str,e) {
        e.stopPropagation();
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
                <span onClick={(e) => this.reSelectYear('prev',e)} title="上一年">{'◀◀'}</span>
                <span onClick={(e) => this.reSelectMonth('prev',e)} title="上一月">{'◀'}</span>
                <b>{this.props.date.year + '年' + setLen(this.props.date.month) + '月' + setLen(this.props.date.day) + '日'}</b>
                <span onClick={(e) => this.reSelectMonth('next',e)} title="下一月">{'▶'}</span>
                <span onClick={(e) => this.reSelectYear('next',e)} title="下一年">{'▶▶'}</span>
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
    selectDay(item,e) {
        e.stopPropagation();
        this.props.callback(item);
    }
    render() {
        const dataList = this.props.list;
        const inDent = this.props.indent * 14.2857 + '%';
        const day = this.props.currentDay;
        return (
            <ul>
                {
                    dataList.length > 0 ? dataList.map((item, index) => {
                        const isActive = day === item.day ? 'active' : 'noActive';
                        const span = <span
                            className={isActive}
                            onClick={(e) => this.selectDay(item,e)}>{item.day}</span>;
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
        this.hours = [];
        this.standard = [];
        this.state = {
            hour: '00',
            minute: '00',
            second: '00'
        };
    }
    componentWillMount(){
        for(let i=0;i<60;i++){
            if(i < 24){this.hours.push({name:'时',value:setLen(i)});}
            if(i < 60){this.standard.push({name:'分/秒',value:setLen(i)});}
        }
    }
    //设备时间
    setTimes(option,item,e){
        e.stopPropagation();
        const times = {};
        times.hour = option == 'hour' ? item.value : this.state.hour;
        times.minute = option == 'minute' ? item.value : this.state.minute;
        times.second = option == 'second' ? item.value : this.state.second;
        this.setState({
            hour:times.hour,
            minute:times.minute,
            second:times.second
        },() => {
            this.props.callback(this.state.hour,this.state.minute,this.state.second);
        });
    }

    render() {
        const hh = this.hours.map((t,i) => {
            return (<p key={t.name+'-'+i} onClick={(e) => this.setTimes('hour',t,e)}>{t.value}</p>);
        });
        const mm = this.standard.map((t,i) => {
            return (<p key={t.name+'-'+i} onClick={(e) => this.setTimes('minute',t,e)}>{t.value}</p>);
        });
        const ss = this.standard.map((t,i) => {
            return (<p key={t.name+'-'+i} onClick={(e) => this.setTimes('second',t,e)}>{t.value}</p>);
        });
        return (
            <div>
                <div className="ui-datePicker-times-top">
                    <span>时</span><span>分</span><span>秒</span>
                </div>
                <ul className="ui-datePicker-times-list">
                    <li>{hh}</li><li>{mm}</li><li>{ss}</li>
                </ul>
            </div>
        );
    }
}
//（year/month/day）
export class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.datePickerBoxId = randomString(6);
        this.defaultDate = new Date();
        this.weeks = ["日", "一", "二", "三", "四", "五", "六"];
        this.icon = '▦';
        this.state = {
            isActive:false,//控制插件显隐
            year: setLen(this.defaultDate.getFullYear()),
            month: setLen(this.defaultDate.getMonth() + 1),
            day: setLen(this.defaultDate.getDate()),
            week: '',
            dayArray: [],
            indent: null,//天数格子缩进量
            selectedDate: null
        };
    }

    //日期盒子显隐
    controlEvent(e) {
        e.stopPropagation();
        const status = this.state.isActive;
        this.setState({
            isActive: status ? false : true
        });
    }
    //根据时间戳获取星期几
    getWeek(dateStr) {
        const weekIndex = dateStr.getDay();
        const week = this.weeks[weekIndex];
        return {weekName: '星期' + week, index: weekIndex};
    }

    //统计天数格子
    initDateBox() {
        //每月1号下标,初始化日期盒子缩进量
        const weekInfo = this.getWeek(new Date(this.state.year + '/' + this.state.month + '/' + '01'));
        const index = weekInfo.index;
        const weekName = weekInfo.weekName;
        //当前月天数
        const days = getMonthDays(this.state.year, this.state.month);
        const arr = [];
        for (let i = 0; i < days; i++) {
            let item = {};
            let itemDay = i + 1;
            let __week = this.getWeek(new Date(this.state.year + '/' + this.state.month + '/' + itemDay));
            item.year = this.state.year;
            item.month = setLen(this.state.month);
            item.day = setLen(itemDay);
            item.week = __week.weekName;
            arr.push(item);
        }

        this.setState({
            dayArray: arr,
            week: weekName,
            indent: index
        });
    }

    //组件回调返回值
    setCallBackValue() {
        const returnValue = {
            year: this.state.year,
            month: this.state.month,
            day: this.state.day,
            week: this.state.week
        };
        this.props.onchange(returnValue);
    }

    //年月切换
    getSwitchYearMonthDay(year, month, day) {
        this.setState({
            year: year,
            month: setLen(month),
            day: day,
            selectedDate: year +'/'+ setLen(month) +'/'+ day
        }, () => {
            this.initDateBox();
            this.setCallBackValue();
        });
    }

    //选择X天
    onSelectDay(item) {
        this.setState({
            year: item.year,
            month: setLen(item.month),
            day: setLen(item.day),
            selectedDate: item.year +'/'+ setLen(item.month) +'/'+ setLen(item.day),
            week: item.week
        }, () => {
            this.setCallBackValue();
        });
    }
    //确定
    submitSelected(){
        this.setState({
            isActive: false
        },() => {
            this.setCallBackValue();
        });
    }
    //清除所有日期时间
    clearDateTime(){
        this.setState({
            year: '1970',
            month: '01',
            day: '01',
            selectedDate: '1970/01/01'
        },() => {
            this.initDateBox();
            this.setCallBackValue();
        });
    }
    //现在
    selectNow(){
        const now = new Date();
        this.setState({
            year: setLen(now.getFullYear()),
            month: setLen(now.getMonth() + 1),
            day: setLen(now.getDate()),
            selectedDate: setLen(now.getFullYear())+'/'+setLen(now.getMonth() + 1)+'/'+setLen(now.getDate())
        },() => {
            this.setCallBackValue();
        });
    }

    componentDidMount() {
        this.initDateBox();//初始化
        this.setCallBackValue();
    }
    render() {
        const isActiveBox = this.state.isActive ? 'ui-datePicker-box active' : 'ui-datePicker-box';
        const w = this.props.width ? this.props.width : '100%';
        const h = this.props.height ? this.props.height : '34px';
        const num = Number(h.replace(/px/, ''));
        const placeholder = this.props.placeholder ? this.props.placeholder : '请选择日期';
        return (
            <div className="ui-datePicker" style={{width:w,height:h}}>
                <div className="ui-datePicker-input" onClick={(e) => this.controlEvent(e)}>
                    <input
                        type="text"
                        disabled={true}
                        placeholder={placeholder}
                        value={this.state.selectedDate}
                        ref="dateTimeInput"
                    />
                    <span className="ui-datePicker-icon" style={{lineHeight:(num - 2)+'px',color:this.state.isActive ? '#1890ff' :'#ccc'}}>
                        {this.icon}
                    </span>
                </div>
                <div id={this.datePickerBoxId} className={isActiveBox} style={{top:num+'px'}} unSelectable="on">
                    <div className="ui-datePicker-body">
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
                    </div>
                    <div className="ui-datePicker-options">
                        <span>
                            <a onClick={this.selectNow.bind(this)}>现在</a>
                            <a onClick={this.clearDateTime.bind(this)}>清空</a>
                            <button onClick={this.submitSelected.bind(this)}>确定</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
//（year/month/day hour:minute:second）
export class DateTimePicker extends Component {
    constructor(props) {
        super(props);
        this.datePickerBoxId = randomString(6);
        this.defaultDate = new Date();
        this.weeks = ["日", "一", "二", "三", "四", "五", "六"];
        this.icon = '▦';
        this.state = {
            isActive:false,//控制插件显隐
            isDateBox:true,//默认显示日期盒子
            isTimeBox:false,//默认隐藏时间盒子
            year: setLen(this.defaultDate.getFullYear()),
            month: setLen(this.defaultDate.getMonth() + 1),
            day: setLen(this.defaultDate.getDate()),
            hour: '00',
            minute: '00',
            second: '00',
            week: '',
            dayArray: [],
            indent: null,//天数格子缩进量
            selectedDate: null
        };
    }

    //日期盒子显隐
    controlEvent(e) {
        e.stopPropagation();
        const status = this.state.isActive;
        this.setState({
            isActive: status ? false : true,
            isDateBox:true,
            isTimeBox:false
        });
    }

    //根据时间戳获取星期几
    getWeek(dateStr) {
        const weekIndex = dateStr.getDay();
        const week = this.weeks[weekIndex];
        return {weekName: '星期' + week, index: weekIndex};
    }

    //统计天数格子
    initDateBox() {
        //每月1号下标,初始化日期盒子缩进量
        const weekInfo = this.getWeek(new Date(this.state.year + '/' + this.state.month + '/' + '01'));
        const index = weekInfo.index;
        const weekName = weekInfo.weekName;
        //当前月天数
        const days = getMonthDays(this.state.year, this.state.month);
        const arr = [];
        for (let i = 0; i < days; i++) {
            let item = {};
            let itemDay = i + 1;
            let __week = this.getWeek(new Date(this.state.year + '/' + this.state.month + '/' + itemDay));
            item.year = this.state.year;
            item.month = setLen(this.state.month);
            item.day = setLen(itemDay);
            item.week = __week.weekName;
            arr.push(item);
        }

        this.setState({
            dayArray: arr,
            week: weekName,
            indent: index
        });
    }

    //组件回调返回值
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
        this.props.onchange(returnValue);
    }

    //年月切换
    getSwitchYearMonthDay(year, month, day) {
        const ymd = year + '/' + setLen(month) + '/' + day;
        const hms = '00:00:00';
        this.setState({
            year: year,
            month: setLen(month),
            day: day,
            hour: '00',
            minute: '00',
            second: '00',
            selectedDate: ymd + ' ' + hms
        }, () => {
            this.initDateBox();
            this.setCallBackValue();
        });
    }

    //选择X天
    onSelectDay(item) {
        const ymd = item.year + '/' + setLen(item.month) + '/' + setLen(item.day);
        const hms = '00:00:00';
        this.setState({
            year: item.year,
            month: setLen(item.month),
            day: setLen(item.day),
            hour: '00',
            minute: '00',
            second: '00',
            selectedDate: ymd + ' ' + hms,
            week: item.week
        }, () => {
            this.setCallBackValue();
        });
    }
    //确定
    submitSelected(){
        this.setState({
            isActive: false
        },() => {
            this.setCallBackValue();
        });
    }
    //清除所有日期时间
    clearDateTime(){
        this.setState({
            year: '1970',
            month: '01',
            day: '01',
            hour: '00',
            minute: '00',
            second: '00',
            selectedDate: '1970/01/01'+' '+'00:00:00'
        },() => {
            this.initDateBox();
            this.setCallBackValue();
        });
    }
    //时分秒盒子
    openTimeBox(a,b){
        this.setState({
            isDateBox:a ? false : true,
            isTimeBox:b ? false : true
        });
    }
    //现在
    selectNow(){
        const now = new Date();
        const ymd = setLen(now.getFullYear()) + '/' + setLen(now.getMonth() + 1) + '/' + setLen(now.getDate());
        const hms = setLen(now.getHours())+':'+setLen(now.getMinutes())+':'+setLen(now.getSeconds());
        this.setState({
            year: setLen(now.getFullYear()),
            month: setLen(now.getMonth() + 1),
            day: setLen(now.getDate()),
            hour: setLen(now.getHours()),
            minute: setLen(now.getMinutes()),
            second: setLen(now.getSeconds()),
            selectedDate: ymd+' '+hms,
            isDateBox:true,
            isTimeBox:false
        },() => {
            this.setCallBackValue();
        });
    }
    //选择时分秒回调
    setHourMinuteSecond(h,m,s){
        const ymd = this.state.year + '/' + this.state.month + '/' + this.state.day;
        const hms = h+':'+m+':'+s;
        this.setState({
            hour:h,
            minute:m,
            second:s,
            selectedDate: ymd+' '+hms
        },() => {
            this.setCallBackValue();
        });
    }

    componentDidMount() {
        this.initDateBox();//初始化
        this.setCallBackValue();
    }
    render() {
        const isActiveBox = this.state.isActive ? 'ui-datePicker-box active' : 'ui-datePicker-box';
        const w = this.props.width ? this.props.width : '100%';
        const h = this.props.height ? this.props.height : '34px';
        const num = Number(h.replace(/px/, ''));
        const placeholder = this.props.placeholder ? this.props.placeholder : '请选择日期';
        const isDates = this.state.isDateBox;
        const isTimes = this.state.isTimeBox;
        return (
            <div className="ui-datePicker" style={{width:w,height:h}}>
                <div className="ui-datePicker-input" onClick={(e) => this.controlEvent(e)}>
                    <input
                        type="text"
                        disabled={true}
                        placeholder={placeholder}
                        value={this.state.selectedDate}
                        ref="dateTimeInput"
                    />
                    <span className="ui-datePicker-icon" style={{lineHeight:(num - 2)+'px',color:this.state.isActive ? '#1890ff' :'#ccc'}}>
                        {this.icon}
                    </span>
                </div>
                <div id={this.datePickerBoxId} className={isActiveBox} style={{top:num+'px'}} unSelectable="on">
                    <div className="ui-datePicker-body" style={{display:isDates ? 'block' : 'none'}}>
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
                    </div>
                    <div className="ui-datePicker-times" style={{display:isTimes ? 'block' : 'none'}}>
                        <TimesBox callback={this.setHourMinuteSecond.bind(this)} />
                    </div>
                    <div className="ui-datePicker-options">
                        <span>
                            <a onClick={this.openTimeBox.bind(this,this.state.isDateBox,this.state.isTimeBox)}>{this.state.isDateBox ? '选择时间' : '选择日期'}</a>
                        </span>
                        <span>
                            <a onClick={this.selectNow.bind(this)}>现在</a>
                            <a onClick={this.clearDateTime.bind(this)}>清空</a>
                            <button onClick={this.submitSelected.bind(this)}>确定</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}
//（hour:minute:second）
export class TimePicker extends Component {
    constructor(props) {
        super(props);
        this.datePickerBoxId = randomString(6);
        this.defaultDate = new Date();
        this.weeks = ["日", "一", "二", "三", "四", "五", "六"];
        this.icon = '▦';
        this.state = {
            isActive:false,//控制日期盒子显隐
            hour: '00',
            minute: '00',
            second: '00',
            selectedDate: null
        };
    }

    //日期盒子显隐
    controlEvent(e) {
        e.stopPropagation();
        const status = this.state.isActive;
        this.setState({
            isActive: status ? false : true
        });
    }
    //组件回调返回值
    setCallBackValue() {
        const returnValue = {
            hour: this.state.hour,
            minute: this.state.minute,
            second: this.state.second
        };
        this.props.onchange(returnValue);
    }
    //确定
    submitSelected(){
        this.setState({
            isActive: false
        },() => {
            this.setCallBackValue();
        });
    }
    //清除所有日期时间
    clearDateTime(){
        this.setState({
            hour: '00',
            minute: '00',
            second: '00',
            selectedDate: '00:00:00'
        },() => {
            this.setCallBackValue();
        });
    }
    //现在
    selectNow(){
        const now = new Date();
        this.setState({
            hour: setLen(now.getHours()),
            minute: setLen(now.getMinutes()),
            second: setLen(now.getSeconds()),
            selectedDate: setLen(now.getHours())+':'+setLen(now.getMinutes())+':'+setLen(now.getSeconds())
        },() => {
            this.setCallBackValue();
        });
    }
    //选择时分秒回调
    setHourMinuteSecond(h,m,s){
        this.setState({
            hour:h,
            minute:m,
            second:s,
            selectedDate: h+':'+m+':'+s
        },() => {
            this.setCallBackValue();
        });
    }

    componentDidMount() {
        this.setCallBackValue();
    }
    render() {
        const isActiveBox = this.state.isActive ? 'ui-datePicker-box active' : 'ui-datePicker-box';
        const w = this.props.width ? this.props.width : '100%';
        const h = this.props.height ? this.props.height : '34px';
        const num = Number(h.replace(/px/, ''));
        const placeholder = this.props.placeholder ? this.props.placeholder : '请选择日期';
        return (
            <div className="ui-datePicker" style={{width:w,height:h}}>
                <div className="ui-datePicker-input" onClick={(e) => this.controlEvent(e)}>
                    <input
                        type="text"
                        disabled={true}
                        placeholder={placeholder}
                        value={this.state.selectedDate}
                        ref="dateTimeInput"
                    />
                    <span className="ui-datePicker-icon" style={{lineHeight:(num - 2)+'px',color:this.state.isActive ? '#1890ff' :'#ccc'}}>
                        {this.icon}
                    </span>
                </div>
                <div id={this.datePickerBoxId} className={isActiveBox} style={{top:num+'px'}} unSelectable="on">

                    <div className="ui-datePicker-times">
                        <TimesBox callback={this.setHourMinuteSecond.bind(this)} />
                    </div>
                    <div className="ui-datePicker-options">
                        <span>
                            <a onClick={this.selectNow.bind(this)}>现在</a>
                            <a onClick={this.clearDateTime.bind(this)}>清空</a>
                            <button onClick={this.submitSelected.bind(this)}>确定</button>
                        </span>
                    </div>
                </div>
            </div>
        );
    }
}

