/**
 *
 * 将input元素改造成switch组件
 * @switch.css
 * 属性：[width:int(默认50),height:int(默认25),color:string('#xxxxxx',默认'#3B86FF')]
 **/

import React,{Component} from 'react';

//export default class Switch extends Component{
//    constructor(props){
//        super(props);
//    }
//    render(){
//        return (
//            <input type='checkbox' className='switch-component' />
//        );
//    }
//}
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