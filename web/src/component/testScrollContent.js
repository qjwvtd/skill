import React,{Component} from 'react';
import {ManualScroll,AutoScroll} from './../../public/scroll';

//手动滚动
export default class ScrollContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content:''
        };
    }
    componentDidMount(){
        let str = '';
        for(let i=0;i<1000;i++){
            str += '\n' + 'the some context';
        }
        this.setState({
            content:str
        });
    }
    render() {
        return (
            <div>
                <ManualScroll height={'200px'}>
                    <div>{this.state.content}</div>
                </ManualScroll>
                <AutoScroll />
            </div>

        );
    }
}