import React,{Component} from 'react';
//需要checkbox.css
//<Checkbox checked="checked" onChange={this.onChange.bind(this)} />
export default class Checkbox extends Component{
    constructor(props){
        super(props);
    }
    onClick(event){
        const checkbox = event.currentTarget;
        const className = checkbox.className;
        switch (className){
            case 'checkbox active':
                checkbox.className = 'checkbox';
                this.props.onChange(false);
                break;
            case 'checkbox':
                checkbox.className = 'checkbox active';
                this.props.onChange(true);
                break;
        }
    }
    render(){
        const isChecked = this.props.checked == 'checked' ? 'checkbox active' : 'checkbox';
        return (
            <span className={isChecked} onClick={this.onClick.bind(this)}>
                {this.props.checked == 'checked' ? '√' : ''}
            </span>
        );
    }
}