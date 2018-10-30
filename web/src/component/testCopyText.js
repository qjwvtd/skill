/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import CopyText from './../../public/copyText';
export default class CopyTextTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{width:'480px'}}>
                <h5>可复制文本的组件</h5>
                <CopyText>
                    {(Math.random()*100000).toFixed(0)+'，this is some context'}
                </CopyText>
            </div>
        );
    }
}