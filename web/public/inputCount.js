/**
 * 输入计数器，常用于电子商务因应用，选择购买个数数
 * onchange接受一个函数返回一个number
 * <InputCount onchange={this.getInputNumb.bind(this)} />
 **/
import React,{Component} from 'react';
export default class InputCount extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentValue:1
        };
    }
    onchange(e){
        const targetVal = e.currentTarget.value;
        const reg = /^\d*$/;
        this.setState({
            currentValue:reg.test(targetVal) ? targetVal : 1
        },() => {
            this.props.onchange(this.state.currentValue);
        });
    }
    onClick(str){
        let currentVal = this.state.currentValue;
        if(currentVal > 1){
            currentVal = str == '-' ? currentVal-1 : currentVal+1;
        }
        if(currentVal == 1){
            currentVal = str == '-' ? 1 : currentVal+1;
        }
        this.setState({
            currentValue:currentVal
        },() => {
            this.props.onchange(this.state.currentValue);
        });
    }
    render() {
        return (
            <a className="ui-inputCount-box">
                <span onClick={this.onClick.bind(this,'-')}></span>
                <span className="ui-inputCount-box-input">
                    <input type="text" value={this.state.currentValue} onChange={this.onchange.bind(this)} />
                </span>
                <span onClick={this.onClick.bind(this,'+')}></span>
            </a>
        );
    }
}