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
import {isNumber,ranNumber,randomString,randomColor,round,setUuid} from './../public/util';
//browser
import browser from './../public/browser';
//Star
import Rate from './../public/Rate ';
//AjaxTest
import AjaxTest from './component/testAjax';
//ScrollContent
import ScrollContent from './component/testScrollContent';
//DateTest
import DateTest from './component/testDate';
//pageTest
import PageTest from './component/testPage';
//ModalTest
import ModalTest from './component/testModal';
//CheckBoxTest
import CheckBoxTest from './component/testCheckBox';
//Switch
import TestSwitch from './component/testSwitch';
//StepsTest
import StepsTest from './component/testSteps';
//PaginationTest
import PaginationTest from './component/testPagination';
//SelectTest
import SelectTest from './component/testSelect';
//DatePickerTest
import DatePickerTest from './component/testDatePicker';
//RadioTest
import RadioTest from './component/testRadio';
//InputCountTest
import InputCountTest from './component/testInputNumber';
//NotificationTest
import NotificationTest from './component/testNotification';
//MessageTest
import MessageTest from './component/testMessage';
//ArrayListTest
import ArrayListTest from './component/testArrayList';
//CollapseTest
import CollapseTest from './component/testCollapse';
//LoadingTest
import LoadingTest from './component/testLoading';
//PopoverTest
import PopoverTest from './component/testPopover';

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
        console.log(round(Math.random()*100,2));
        const uuid = setUuid();
        console.log('uuid:' + uuid);
        console.log(browser.navigatorInfo());
        console.log(browser.appInfo());
    }
    onlyInNumer(event){
        //input限制只能输入数字
        //console.log(typeof event.currentTarget.value);
        const flag = isNumber(Number(event.currentTarget.value));
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
                    <ScrollContent />
                </div>
                <div className="play">
                    <h5>随机颜色</h5>
                    <div style={{width:'30px',height:'30px',background:randomColor()}}></div>
                </div>
                <div className="play">
                    <h5>评分</h5>
                    <Rate onchange={(index) => {console.log(index);}} />
                </div>
                <div className="play">
                    <SelectTest />
                </div>
                <div className="play">
                    <AjaxTest />
                </div>
                <div className="play">
                    <TestSwitch />
                </div>
                <div className="play">
                    <ModalTest />
                </div>
                <div className="play">
                    <StepsTest />
                </div>
                <div className="play">
                    <DatePickerTest />
                </div>
                <div className="play">
                    <PaginationTest />
                </div>
                <div className="play">
                    <h5>checkbox</h5>
                    <CheckBoxTest />
                </div>
                <div className="play">
                    <h5>radio</h5>
                    <RadioTest />
                </div>
                <div className="play">
                    <InputCountTest />
                </div>
                <div className="play">
                    <NotificationTest />
                </div>
                <div className="play">
                    <MessageTest />
                </div>
                <div className="play">
                    <ArrayListTest />
                </div>
                <div className="play">
                    <h5>折叠面板</h5>
                    <CollapseTest />
                </div>
                <div className="play">
                    <h5>loading</h5>
                    <LoadingTest />
                </div>
                <div className="play">
                    <h5>气泡提示</h5>
                    <PopoverTest />
                </div>
            </div>
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


