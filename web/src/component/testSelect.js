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
            <div style={{width:'200px',height:'30px',border:'1px solid red'}}>
                <select name="" id="" style={{width:'200px',height:'30px',opacity:'0'}}>
                    <option value="">1</option>
                    <option value="">2</option>
                    <option value="">3</option>
                </select>
            </div>
        );
    }
}