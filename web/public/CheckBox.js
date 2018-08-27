import React,{Component} from 'react';
//需要checkbox.css
//<Checkbox checked="checked" onChange={this.onChange.bind(this)} />
export class Checkbox extends Component{
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
export class CheckBoxSpan extends Component{
    constructor(props){
        super(props);
    }
    onClick(){
        const target = this.refs.checkBoxSpan;
        const classNames = target.className;
        switch (classNames){
        case 'checkBoxSpan active':
            target.className = 'checkBoxSpan';
            this.props.onChange(false);
            break;
        case 'checkBoxSpan':
            target.className = 'checkBoxSpan active';
            this.props.onChange(true);
            break;
        }
        this.props.onChange(true);
    }
    render(){
        const classes = this.props.checked ? 'checkBoxSpan active' : 'checkBoxSpan';
        return <span className={classes} ref="checkBoxSpan" onClick={this.onClick.bind(this)}></span>;
    }
}