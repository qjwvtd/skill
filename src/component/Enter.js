/*
 * 2018/7/18
 * administractor
 * 回车事件
 */
import React,{Component} from 'react';

export default class Enter extends Component{
    constructor(props){
        super(props);
        this.state = {
            mm:60,
            display:true
        };
    }
    componentDidMount(){
        document.onkeydown = (e) => {
            let code = e.charCode || e.keyCode;
            if(code == 13){
                //这里写回车的代码
                alert('Enter`s code is here');
            }
        };
        setInterval(() => {
            if(this.state.mm > 0){
                this.setState({
                    mm:this.state.mm -1
                });
            }
            if(this.state.mm == 0){
                this.setState({
                    display:false
                });
                document.onkeydown = false;
            }
        },1000);
    }
    render(){
        return (
            <div style={{display:this.state.display == true ? 'block' : 'none'}}>
                <h5>回车事件</h5>
                <button type="button">回车事件({this.state.mm}秒后关闭)</button>
                <hr/>
            </div>
        );
    }
}
