import React,{Component} from 'react';
/*
 * @import "checkbox.css";
 * checked:是否选中状态，true/false,
 * onchange:change事件回调，参数是一个函数，返回选中后的值和布尔值
 * <Checkbox checked={true} onchange={this.onSpanCheckboxChange.bind(this)} />
 */
export default class Checkbox extends Component{
    constructor(props){
        super(props);
        this.state = {
            checked:props.checked || false
        };
    }
    onClick(){
        const isChecked = this.state.checked;
        this.setState({checked:!isChecked});
        this.props.onchange(!isChecked);
    }
    render(){
        const __class = this.state.checked ? 'checkBoxSpan active' : 'checkBoxSpan';
        return <span className={__class} onClick={this.onClick.bind(this)}></span>;
    }
}
