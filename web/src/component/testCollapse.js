/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Collapse from './../../public/collapse';
export default class CollapseTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <Collapse title="this is title">
                <div style={{height:'300px'}}>this is content</div>
            </Collapse>
        );
    }
}