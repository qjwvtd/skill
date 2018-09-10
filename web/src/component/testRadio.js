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
                小：<Radio list={this.state.list} callback={this.onRadioChange.bind(this)} />
                <br/>
                中：<Radio list={this.state.list} size={'md'} callback={this.onRadioChange.bind(this)} />
                <br/>
                大：<Radio list={this.state.list} size={'lg'} callback={this.onRadioChange.bind(this)} />
            </div>
        );
    }
}