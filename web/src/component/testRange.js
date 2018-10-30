/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Range from './../../public/range';
export default class RangeTest extends Component {
    constructor(props) {
        super(props);
    }

    onchange(value) {
        console.log(value);
    }

    render() {
        return (
            <div style={{width:'300px'}}>
                <h5>range滑动条,制作中,update...</h5>
                <Range onChange={this.onchange.bind(this)} defaultValue={50}/>
            </div>
        );
    }
}