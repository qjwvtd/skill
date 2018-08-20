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
//DateTest
import DateTest from './component/testDate';
//pageTest
import PageTest from './component/testPage';
//es6/7
import {MathArrayMax,Es6Map} from './component/ES678';

class App extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(isNumber(-2));
    }
    onlyInNumer(event){
        //input限制只能输入数字
        //console.log(typeof event.currentTarget.value);
        const flag = isNumber(event.currentTarget.value);
        if(!flag){
            event.currentTarget.value = null;
        }
    }
    render(){
        return (
            <div>
                <div className="play">
                    <PageTest />
                </div>
                <div className="play">
                    <input type="text" onChange={this.onlyInNumer.bind(this)} placeholder="只能输入数字" />
                </div>
                <div className="play">
                    <DateTest />
                </div>
                <div className="play">
                    <VerifyCodeBtn wait={60} />
                </div>
                <div className="play">
                    <p>随机字符串:{randomString(5)}</p>
                </div>
                <div className="play">
                    <MathArrayMax />
                </div>
                <div className="play">
                    <Es6Map />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

