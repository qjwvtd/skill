/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Switch from './../../public/switch';
export default class TestSwitch extends Component {
    constructor(props) {
        super(props);
    }
    switchOnChange(bool){
        console.log(bool);
    }
    render() {
        return (
            <Switch width={50} active={false} onChange={this.switchOnChange.bind(this)} />
        );
    }
}