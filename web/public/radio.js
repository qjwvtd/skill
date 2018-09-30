/**
 * radio组件
 * data:[{key:0,value:'男'},{key:1,value:'女'},...]
 * onchange:选择后的回调，返回当前选择的对象object
 * 用法：<Radio list={this.state.list} callback={this.onRadioChange.bind(this)} />
 **/
import React,{Component} from 'react';
export default class Radio extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectIndex:null
        };
    }
    componentDidMount() {
        const list = this.props.data;
        for(let i=0;i<list.length;i++){
            if(!list[i].key || !list[i].value){
                console.log('radio组件参数错误,正确格式为:data:[{key:0,value:男},{key:1,value:女},...]');
            }
        }
    }
    onSelect(item,index){
        this.setState({
            selectIndex:index
        });
        this.props.onchange(item);
    }
    render() {
        const selectIndex = this.state.selectIndex;
        return (
            <a className="ui-radio-group">
                {
                    this.props.data.map((item,index) => {
                        const isActiveClass = selectIndex == index ? "ui-radio-box active" : "ui-radio-box";
                        return (
                            [
                                <span key={item.value} className={isActiveClass} onClick={this.onSelect.bind(this,item,index)}><i></i></span>,
                                <label key={index} onClick={this.onSelect.bind(this,item,index)}>{item.value}</label>
                            ]
                        );
                    })
                }
            </a>
        );
    }
}