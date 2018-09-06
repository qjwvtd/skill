/**
 * Radio组件测试
 **/
import React,{Component} from 'react';
import Radio from './../../public/radio';
export default class RadioTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {key:0,value:'男'},
                {key:1,value:'女'},
                {key:2,value:'未知'}
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h5>单选组件Radio</h5>
                <Radio data={this.state.list} />
            </div>
        );
    }
}