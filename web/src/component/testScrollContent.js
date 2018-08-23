import React,{Component} from 'react';
import {ManualMarquee,AutoMarquee} from './../../public/marquee';

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
                <h5>手动滚动(无滚动条)</h5>
                <ManualMarquee height={'200px'}>
                    <div>{this.state.content}</div>
                </ManualMarquee>
                <h5>自动滚动</h5>
                <AutoMarquee height={'200px'} speed={50}>
                    <ul>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>1</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>2</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>3</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>4</li>
                    </ul>
                </AutoMarquee>
            </div>

        );
    }
}