/**
 * 树型控件,基本数据结构及其使用
 * const data = [
     {
         id:1,
         text: '一级1',
         children: [{
             id:11,
             text: '二级1-1',
             children: [{
                 id:111,
                 text: '三级1-1-1'
             }]
         }]
     }
 ]
 * <Tree data={data} index={"id"} label={"text"} onchange={this.showTreeData.bind(this)} />
 * @param data:基本数据,array,
 * @param index:选中时的索引,number/string,
 * @param label:选中时的文本,text,
 * @param onchange:回调，返回选择的数据，array.
 **/
import React,{Component} from 'react';

export default class Tree extends Component{
    constructor(props){
        super(props);
        this.checkedList = [];
    }
    mainCheckbox(event){
        const checkbox = event.currentTarget;
        const checked = checkbox.checked;
        const checkboxList = Array.prototype.slice.call(checkbox.parentNode.parentNode.getElementsByTagName('input'));
        const thisList = this.checkedList;
        //全选/全不选
        checkboxList.map((checkboxItem,index) => {
            checkboxItem.checked = checked;
            const itemValue = JSON.parse(checkboxItem.value);
            //添加数据
            if(checked){
                let indexs = [];
                for(let i=0;i<thisList.length;i++){
                    indexs.push(thisList[i][this.props.index]);
                }
                if(indexs.indexOf(itemValue[this.props.index]) == -1){
                    const checkedItem = {};
                    checkedItem[this.props.index] = itemValue[this.props.index];
                    checkedItem[this.props.label] = itemValue[this.props.label];
                    thisList.push(checkedItem);
                }
            }
            //删除数据
            if(!checked){
                for(let j=0;j<thisList.length;j++){
                    const stateItem = thisList[j];
                    if(itemValue[this.props.index] == stateItem[this.props.index]){
                        thisList.splice(j,1);
                    }
                }
            }
        });
        this.checkedList = thisList;
        this.props.onchange(this.checkedList);
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
                                    <input type="checkbox" onChange={this.mainCheckbox.bind(this)} value={JSON.stringify(item)} />
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