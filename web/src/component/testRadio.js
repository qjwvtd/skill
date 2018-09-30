/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Radio from './../../public/radio';
export default class RadioTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {key:0,value:'男'},
                {key:1,value:'女'}
            ]
        };
    }
    onRadioChange(object){
        console.log(object);
    }
    render() {
        return (
            <div>
                <Radio data={this.state.list} onchange={this.onRadioChange.bind(this)} />
            </div>
        );
    }
}