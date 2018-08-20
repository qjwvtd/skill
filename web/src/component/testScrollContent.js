import React,{Component} from 'react';
import ScrollDiv from './../../public/scrollDiv';

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
            <ScrollDiv height={'200px'}>
                <div>{this.state.content}</div>
            </ScrollDiv>
        );
    }
}