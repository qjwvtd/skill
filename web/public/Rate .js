/**
 * Created by Lenovo on 2018/7/28.
 * 五量点赞评级组件
 * 使用:<Star star={2} onchange={this.onchange.bind(this)} />
 * star:指定实际评分
 * onchange:返回点击后的评分number
 */
import React,{Component} from 'react';
export default class Rate extends Component{
    constructor(props){
        super(props);
        this.state = {
            star:null,
            list:[
                {xh:0,value:'★'},
                {xh:1,value:'★'},
                {xh:2,value:'★'},
                {xh:3,value:'★'},
                {xh:4,value:'★'}
            ]
        };
    }
    setTemplate(){
        const star = this.state.star;
        const template = this.state.list.map((item,index) => {
            const _color = index < star ? 'orange' : '#ccc';
            return (
                <b key={item} style={{color:_color}} onClick={this.mainEvent.bind(this,index+1)}>{item.value}</b>
            );
        });
        return template;
    }
    mainEvent(index){
        this.setState({
            star:index
        },() => {
            this.props.onchange(index);
        });
    }
    componentDidMount(){
        let defaultstar = this.props.star;
        defaultstar = defaultstar && defaultstar <= this.state.list.length ? defaultstar : 0;
        this.setState({
            star:defaultstar
        });
    }
    render(){
        return (<a className="ui-rate-box" style={{}}>{this.setTemplate()}</a>);
    }
}
