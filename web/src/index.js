/*
 * 2018/7/18
 * administractor
 */
//react
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//component
import VerifyCodeBtn from './../public/verificationCodeBtn';
//util function
import {isNumber,ranNumber,randomString} from './../public/util';
//date
import date from './../public/myDate';
//page
import page from './../public/page';

////module
//import {
//    ArrayIncludes,
//    ObjectKeyValue,
//    MathArrayMax,
//    StringLink,
//    ObjectAssign,
//    Es6Map,
//    Es6Set
//} from './component/ES20162017';//ES201620172018

class App extends Component{
    constructor(props){
        super(props);
        this.state = {
            x:'',
            y:''
        };
    }
    componentDidMount(){
        //监听回车事件
        page.pageEnterDown(() => {
            this.refs.enterTest.innerHTML = '回车键按下啦！';
        });
        //鼠标移动
        document.onmousemove = (ev) => {
            const points = page.mousePoints(ev);
            this.setState({
                x:points.x,
                y:points.y
            });
        };
    }
    onlyInNumer(event){
        //限制只能输入数字
        const flag = isNumber(event.currentTarget.value);
        if(!flag){
            event.currentTarget.value = null;
        }
    }
    render(){
        return (
            <div>
                <p ref="enterTest">请按回车</p>
                <hr/>
                <input type="text" onChange={this.onlyInNumer.bind(this)} placeholder="只能输入数字" />
                <hr/>
                <div>
                    日期时间：
                    <p>{date.ranDate().ymd_hms}</p>
                    <p>{date.fmtDate(new Date().getTime()).ymd_hms}</p>
                    <p>{'2018-12有'+date.getDays(2018,12)+'天'}</p>
                    <p>{'今天:' + date.getWeek()}</p>
                </div>
                <hr/>
                <VerifyCodeBtn wait={60} />
                <hr/>
                <div>
                    {'width:'+page.pageWidth()}
                    <hr/>
                    {'height:'+page.pageHeight()}
                </div>
                <hr/>
                <p>随机字符串:{randomString(5)}</p>
                <hr/>
                <div>
                    坐标：
                    <p>{'x:' + this.state.x+','+'y:' + this.state.y}</p>
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

