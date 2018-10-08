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
            checked:props.checked ? props.checked : false
        };
    }
    onClick(){
        const isChecked = this.state.checked;
        switch (isChecked){
        case true:
            this.setState({checked:false});
            this.props.onchange(false);
            break;
        case false:
            this.setState({checked:true});
            this.props.onchange(true);
            break;
        }
    }
    render(){
        const classes = this.state.checked ? 'checkBoxSpan active' : 'checkBoxSpan';
        return <span className={classes} onClick={this.onClick.bind(this)}></span>;
    }
}