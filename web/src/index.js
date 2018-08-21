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
import {isNumber,ranNumber,randomString,randomColor} from './../public/util';
//Star
import Star from './../public/star';
//ScrollContent
import ScrollContent from './component/testScrollContent';
//DateTest
import DateTest from './component/testDate';
//pageTest
import PageTest from './component/testPage';
//es6/7
import {MathArrayMax,Es6Map} from './component/ES678';

//css
import './../css/index.css';

class App extends Component{
    constructor(props){
        super(props);
    }
    componentDidMount(){
        console.log(isNumber('3.0'));
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
                    <p>{'随机数：' + ranNumber(100,1000)}</p>
                </div>
                <div className="play">
                    <p>{'随机字符串:' + randomString(5)}</p>
                </div>
                <div className="play">
                    <MathArrayMax />
                </div>
                <div className="play">
                    <Es6Map />
                </div>
                <div className="play">
                    <h5>手动滚动(无滚动条)</h5>
                    <ScrollContent />
                </div>
                <div className="play">
                    <h5 style={{color:randomColor()}}>随机颜色</h5>
                </div>
                <div className="play">
                    <Star size={3} />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


