/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import {ProgressCircle,ProgressLine} from './../../public/progress';
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
                <ProgressLine percent={56} theme={'#1089ff'} />
                <ProgressCircle percent={48.5} size={160} theme={'red'} />
            </div>
        );
    }
}