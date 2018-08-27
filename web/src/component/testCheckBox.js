/**
 * 两种checkbox用法相同
 * <Checkbox checked={true} onChange={this.onChange.bind(this)} />
 * <CheckBoxSpan checked={true} onChange={this.onSpanCheckboxChange.bind(this)} />
 **/
import React,{Component} from 'react';
import {Checkbox,CheckBoxSpan} from './../../public/checkbox';

export default class CheckBoxTest extends Component{
    constructor(props){
        super(props);
    }
    onInputCheckboxChange(bool){
        console.log(bool);
    }
    onSpanCheckboxChange(data,bool){
        console.log(data);
        console.log(bool);
    }
    render(){
        return (
            <div>
                <div>
                    --input版checkbox--(不兼容IE)<br/>
                    <Checkbox checked={true} onChange={this.onInputCheckboxChange.bind(this)} />
                </div>
                ----------------------------------------------
                <div>
                    --span-版checkbox--(兼容IE)<br/>
                    <CheckBoxSpan checked={true} onChange={this.onSpanCheckboxChange.bind(this,{parames:'123'})} />
                </div>
            </div>
        );
    }
}