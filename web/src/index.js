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
import {isNumber,enterDown,ranDate} from './../public/util';

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
    }
    componentDidMount(){
        //监听回车事件
        enterDown(() => {
            alert('The enter code is written here');
        });
        //随机日期时间
        console.log(ranDate().ymd_hms);
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
                <input type="text" onChange={this.onlyInNumer.bind(this)} placeholder="只能输入数字" />
                <hr />
                <VerifyCodeBtn wait={60} />
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

