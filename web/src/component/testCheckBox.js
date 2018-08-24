/**
 * 此处是注释
 * <Checkbox checked={true} onChange={this.onChange.bind(this)} />
 **/
import React,{Component} from 'react';
import Checkbox from './../../public/CheckBox';

export default class CheckBoxTest extends Component{
    constructor(props){
        super(props);
    }
    onChange(bool){
        console.log(bool);
    }
    render(){
        return (
            <Checkbox checked={true} onChange={this.onChange.bind(this)} />
        );
    }
}