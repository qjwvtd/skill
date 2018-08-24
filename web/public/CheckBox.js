import React,{Component} from 'react';
//需要checkbox.css
//<Checkbox checked="checked" onChange={this.onChange.bind(this)} />
export default class Checkbox extends Component{
    constructor(props){
        super(props);
    }
    onClick(event){
        const checkbox = event.currentTarget;
        this.props.onChange(checkbox.checked);
    }
    render(){
        const isChecked = this.props.checked;
        if(isChecked){
            return <input type="checkbox" defaultChecked onClick={this.onClick.bind(this)} />;
        }else{
            return <input type="checkbox" onClick={this.onClick.bind(this)} />;
        }
    }
}