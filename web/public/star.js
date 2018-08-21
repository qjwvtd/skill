/**
 * Created by Lenovo on 2018/7/28.
 * 五量点赞评级组件，属性size:表示星星个数
 * 使用:<Star size={3} />
 */
import React,{Component} from 'react';
export default class Star extends Component{
    constructor(props){
        super(props);
        this.state = {
            star:'★',
            unstar:'☆',
            defaultLen:5//默认五颗星
        };
    }
    render(){
        const size = this.props.size;
        if(size > this.state.defaultLen){
            return <i className="error">size is too long!</i>;
        }else{
            let startList = (len) => {
                let list = [];
                for(let i = 0;i<len;i++){
                    if(i < size){
                        list.push(<b key={i} style={{color:'orange'}}>{this.state.star}</b>);
                    }else{
                        list.push(<b key={i} style={{color:'#ccc'}}>{this.state.unstar}</b>);
                    }

                };
                return list;
            };
            return (<a style={{padding:'0 10px 0 0'}}>{startList(this.state.defaultLen)}</a>);
        }
    }
}
