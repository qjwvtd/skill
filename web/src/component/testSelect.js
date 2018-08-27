/**
 * 此处是注释
 **/
import React,{Component} from 'react';
export default class SelectTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <select name="" id="" style={{width:'200px',height:'30px'}}>
                <option value="">1</option>
                <option value="">2</option>
                <option value="">3</option>
            </select>
        );
    }
}