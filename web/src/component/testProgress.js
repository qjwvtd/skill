/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import {ProgressCircle,ProgressNormal} from './../../public/progress';
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
                <ProgressNormal progress={(Math.random()*100).toFixed(0)} width={360} />
                <ProgressCircle progress={(Math.random()*100).toFixed(0)} size={100} theme={'#1089ff'} />
            </div>
        );
    }
}