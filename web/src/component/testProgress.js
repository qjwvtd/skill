/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import {Progress,ProgressCanvas,ProgressNormal} from './../../public/progress';
export default class ProgressTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <h5>进度条</h5>
                <Progress progress={(Math.random()*1).toFixed(5)} size={100} theme={'#1089ff'} />
                <br/>
                <ProgressNormal progress={(Math.random()*100).toFixed(0)} width={360} />
                <br/>
                <ProgressCanvas progress={(Math.random()*100).toFixed(0)} size={100} theme={'#1089ff'} />
            </div>
        );
    }
}