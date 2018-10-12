/**
 * 树型控件
 **/
import React,{Component} from 'react';

//生成随机字符串
function randomString(length) {
    let rdmString = "";
    for(let i=0;i<length;i++){
        if(rdmString.length < length){
            rdmString  += Math.random().toString(36).substr(2).toUpperCase();
        }
    }
    return  rdmString.substr(0, length);
}

export default class Tree extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive:false
        };
    }
    mainEvent(item,flag,id,event){
        //const target = event.currentTarget;
        //const perent = target.parentNode;
        console.log(item,flag,id);
        switch (flag) {
        case true:
            this.setState({isActive: false});
            break;
        case false:
            this.setState({isActive: true});
            break;
        }
    }
    renderParentNode(data,name){
        return (
            <ul className="ui-tree">
                {
                    data && data.length > 0 ? data.map((item,index) => {
                        const children = item.children;
                        const isItemClass = this.state.isActive ? 'ui-tree-item active' : 'ui-tree-item';
                        const __ranId = randomString(20);
                        return (
                            <li id={__ranId} className={isItemClass} key={index+Math.random()}>
                                <div onClick={this.mainEvent.bind(this,item,__ranId,this.state.isActive)}>{item[name]}</div>
                                {children && children.length > 0 ? this.renderParentNode(children,name) : null}
                            </li>
                        );
                    }) : <li className="ui-tree-item">{null}</li>
                }
            </ul>
        );
    }
    render(){
        const data = this.props.data;
        const name = this.props.name;
        return this.renderParentNode(data,name);
    }
}