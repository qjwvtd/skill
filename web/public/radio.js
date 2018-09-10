/**
 * radio组件
 * list:[{key:0,value:'男'},{key:1,value:'女'},...]
 * size:['sm','md','lg'],默认'sm'
 * callback:选择后的回调，返回当前选择的对象object
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
        console.log(this.props.list);
    }
    onSelect(item,index){
        this.setState({
            selectIndex:index
        });
        this.props.callback(item);
    }
    render() {
        const sizeClass = this.props.size ? this.props.size : 'sm';
        const selectIndex = this.state.selectIndex;
        return (
            <a className="ui-radio-group">
                {
                    this.props.list.map((item,index) => {
                        const isActiveClass = selectIndex == index ? "ui-radio-box active" : "ui-radio-box";
                        return (
                            <span key={item.value} className={isActiveClass}>
                                <b className={sizeClass} onClick={this.onSelect.bind(this,item,index)}></b>
                                <label className={sizeClass}>{item.value}</label>
                            </span>
                        );
                    })
                }
            </a>
        );
    }
}