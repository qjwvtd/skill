/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import popover from './../../public/popover';
export default class PopoverTest extends Component {
    constructor(props) {
        super(props);
    }
    openPopover(){
        popover.show('this is some popover text');
    }
    render() {
        return (
            <div>
                <button className="btn btn-promise" onClick={this.openPopover.bind(this)}>popover test</button>
            </div>
        );
    }
}