/**
 * 两种checkbox用法相同
 * <Checkbox checked={true} onChange={this.onChange.bind(this)} />
 * <CheckBoxSpan checked={true} onChange={this.onSpanCheckboxChange.bind(this)} />
 **/
import React,{Component} from 'react';
import Checkbox from './../../public/checkbox';

export default class CheckBoxTest extends Component{
    constructor(props){
        super(props);
    }
    onCheckboxChange(checked){
        console.log(checked);
    }
    render(){
        return (
            <div>
                --span-版checkbox--(兼容IE)<br/>
                <Checkbox checked={false} onchange={this.onCheckboxChange.bind(this)} /><label>item1</label>
                <Checkbox checked={true} onchange={this.onCheckboxChange.bind(this)} /><label>item2</label>
                <Checkbox checked={false} onchange={this.onCheckboxChange.bind(this)} /><label>item3</label>
            </div>
        );
    }
}