/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import InputCount from './../../public/inputCount';

export default class InputCountTest extends Component {
    constructor(props) {
        super(props);
    }

    getInputNumb(numb){
        console.log(numb);
    }
    render() {
        return (
            <InputCount onchange={this.getInputNumb.bind(this)} />
        );
    }
}