/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import popover from './../../public/popover';
export default class PopoverTest extends Component {
    constructor(props) {
        super(props);
    }
    openPopoverTop(){
        popover.top('this is some top text,this is some top textthis is some top textthis is some top text');
    }
    openPopoverBottom(){
        popover.bottom('this is some bottom text,this is some bottom text,this is some bottom text');
    }
    openPopoverLeft(){
        popover.left('this is some left text');
    }
    openPopoverRight(){
        popover.right('this is some bottom text,this is some bottom text,this is some bottom text,this is some bottom text,');
    }
    render() {
        return (
            <div>
                <button className="btn btn-promise" onClick={this.openPopoverTop.bind(this)}>popover top</button>
                <button className="btn btn-promise" onClick={this.openPopoverBottom.bind(this)}>popover bottom</button>
                <button className="btn btn-promise" onClick={this.openPopoverLeft.bind(this)}>popover left</button>
                <button className="btn btn-promise" onClick={this.openPopoverRight.bind(this)}>popover right</button>
            </div>
        );
    }
}