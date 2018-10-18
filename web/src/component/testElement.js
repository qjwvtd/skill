/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import {getElementRect} from './../../public/util';

export default class ElementTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            info:null
        };
    }

    componentDidMount() {
        const dom = document.getElementById('testElement');
        const rect = getElementRect(dom);
        this.setState({
            info:rect
        });
    }

    render() {
        return (
            <div>
                <h5>查看元素的几何尺寸及其所在屏幕的位置(left top right bottom width height)</h5>
                <div id="testElement" style={{width:'20%',height:'100px',background:'#ccc'}}></div>
                {this.state.info ? JSON.stringify(this.state.info) : null}
            </div>
        );
    }
}