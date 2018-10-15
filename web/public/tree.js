/**
 * 树型控件
 **/
import React,{Component} from 'react';

export default class Tree extends Component{
    constructor(props){
        super(props);
        this.state = {
            checkedList:[]
        };
    }
    mainCheckbox(item,event){
        const checkbox = event.currentTarget;
        const checked = checkbox.checked;
        const checkboxList = Array.prototype.slice.call(checkbox.parentNode.parentNode.getElementsByTagName('input'));
        //全选
        checkboxList.map((checkboxItem,index) => {
            checkboxItem.checked = checked;
        });
        //添加数据
        const thisList = this.state.checkedList;
        if(checked){
            checkboxList.map((checkboxItem,index) => {
                const checkedItem = {};
                checkedItem[this.props.index] = JSON.parse(checkboxItem.value)[this.props.index];
                checkedItem[this.props.label] = JSON.parse(checkboxItem.value)[this.props.label];
                thisList.push(checkedItem);
            });
            this.setState({
                checkedList:thisList
            });
            console.log(JSON.stringify(this.state.checkedList));
        }
    }
    mainEvent(item,event){
        const target = event.currentTarget;
        const parentUl = document.getElementById(item.id);
        if(!parentUl){
            return;
        }
        target.className = target.className == 'ui-tree-icon' ? 'ui-tree-icon active' : 'ui-tree-icon';
        parentUl.className = parentUl.className == 'ui-tree' ? 'ui-tree active' : 'ui-tree';
    }
    renderParentNode(data,label,parentId){
        return (
            <ul className="ui-tree" id={parentId}>
                {
                    data && data.length > 0 ? data.map((item,index) => {
                        const children = item.children;
                        const childrenId = item[this.props.index];
                        return (
                            <li className="ui-tree-item" key={index+Math.random()}>
                                <div>
                                    {children && children.length > 0 ? <span className="ui-tree-icon" onClick={this.mainEvent.bind(this,item)}>▶</span> : null}
                                    <input type="checkbox" onChange={this.mainCheckbox.bind(this,item)} value={JSON.stringify(item)} />
                                    <span className="ui-tree-text">{item[label]}</span>
                                </div>
                                {children && children.length > 0 ? this.renderParentNode(children,label,childrenId) : null}
                            </li>
                        );
                    }) : <li className="ui-tree-item">{null}</li>
                }
            </ul>
        );
    }
    render(){
        const data = this.props.data;
        const label = this.props.label;
        return this.renderParentNode(data,label,null);
    }
}