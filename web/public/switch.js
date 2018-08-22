/**
 *
 * 将input元素改造成switch组件
 * @switch.css
 * 回调事件未加
 **/

import React,{Component} from 'react';

export default class Switch extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <input type='checkbox' className='switch-component' />
        );
    }
}