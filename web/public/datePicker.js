/**
 * 基于react的一款日期插件
 *
 **/
import React,{Component} from 'react';

//为不足两位的月或日补0
function setLen(str){
    const __str = str.toString().length < 2 ? 0 + str.toString() : str;
    return __str;
};
//

//周
class Weeks extends Component{
    constructor(props) {
        super(props);
    }
    render(){
        return (
            <ul>
                {
                    this.props.weeks.map((item,index) => {
                        return <li key={item+'-'+index}>{item}</li>;
                    })
                }
            </ul>
        );
    }
}

export default class DatePicker extends Component {
    constructor(props) {
        super(props);
        this.defaultDate = new Date();
        this.state = {
            weeks:["日","一","二","三","四","五","六"],
            icon:'▦',
            year:this.defaultDate.getFullYear(),
            month:this.defaultDate.getMonth() + 1,
            day:this.defaultDate.getDate(),
            dayArray:[],
            indent:null//天数格子缩进量
        };
    }
    regFormart(event){
        const value = event.currentTarget.value;
        const reg = /^[1-9]\d{3}[-|/](0[1-9]|1[0-2])[-|/](0[1-9]|[1-2][0-9]|3[0-1])\s+(20|21|22|23|[0-1]\d)[:|：][0-5]\d[:|：][0-5]\d$/;
        console.log(reg.test(value) ? '匹配日期格式' : '不匹配日期格式');
    }
    onFocus(event){
        const target = event.currentTarget;
        target.value = this.state.year+'年'+this.state.month+'月'+this.state.day+'日';
    }
    //根据年月日获取星期几
    getWeek(year,month,day){
        const date = new Date(year+'-'+month+'-'+day);
        const week = this.state.weeks[date.getDay()];
        for(let i=0;i<this.state.weeks.length;i++){
            if(week == this.state.weeks[i]){
                return {week:'星期'+week,index:i};
            }
        }
    }
    //根据年、月，获取每月天数
    getCurrentMonthDays(year,month){
        const __date = new Date(year, month, 0);
        return __date.getDate();
    }
    //统计天数格子
    countDateBox(){
        const days = this.getCurrentMonthDays(this.state.year,this.state.month);
        const arr = [];
        for(let i=0;i<days;i++){
            const item = {};
            item.key = i;
            item.year = this.state.year;
            item.month = this.state.month;
            item.day = i + 1;
            arr.push(item);
        }
        this.setState({
            dayArray:arr
        });
        //每月1号下标,初始化日期盒子缩进量
        const index = this.getWeek(this.state.year,this.state.month,1).index;
        console.log(index);
        this.setState({
            indent:14.2857 * index + '%'
        },() => {
            console.log(this.state.indent);
        });
    }
    componentDidMount() {
        this.countDateBox();//初始化天数格子
    }

    render() {
        return (
            <div className="ui-datePicker">
                <div className="ui-datePicker-input">
                    <input type="text" onBlur={this.regFormart.bind(this)} onFocus={this.onFocus.bind(this)} />
                    <span className="ui-datePicker-icon">{this.state.icon}</span>
                </div>
                <div className="ui-datePicker-box">
                    <div className="ui-datePicker-show">
                        <span>{'<<'}</span>
                        <span>{'<'}</span>
                        <b>{this.state.year+'年'+this.state.month+'月'+this.state.day+'日'}</b>
                        <span>{'>'}</span>
                        <span>{'>>'}</span>
                    </div>
                    <div className="ui-datePicker-weeks">
                        <Weeks weeks={this.state.weeks} />
                    </div>
                    <div className="ui-datePicker-days">
                        <ul>
                            {
                                this.state.dayArray.length > 0 ? this.state.dayArray.map((item,index) => {
                                    const isActive = this.state.day === item.day ? 'active' : '';
                                    const isIndent = this.state.indent;
                                    return (
                                        <li key={item.day} style={{marginLeft:index == 0 ? isIndent : '0'}}>
                                            <span className={isActive}>{item.day}</span>
                                        </li>
                                    );
                                }) : 'loading...'
                            }
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}