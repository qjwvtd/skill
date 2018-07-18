/*
 * 2018/7/18
 * administractor
 * 回车事件
 */
import React,{Component} from 'react';

export default class Enter extends Component{
    constructor(props){
        super(props);
        this.openEnterEvent = this.openEnterEvent.bind(this);
    }
    componentDidMount(){
        document.onkeydown = false;
    }
    openEnterEvent(){
        document.onkeydown = (e) => {
            var code = e.charCode || e.keyCode;
            if(code == 13){
                //这里写回车的代码
                alert('这里写回车的代码');
            }
        };
    }
    render(){
        return (
            <button type="button" onClick={this.openEnterEvent}>点击开启回车事件</button>
        );
    }
}
