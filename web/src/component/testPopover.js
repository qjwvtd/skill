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
    openInputPopover(event){
        let value = event.currentTarget.value;
        popover.top(value.length == 0 ? 'value is null' : 'value is '+value);
    }
    render() {
        return (
            <div>
                <button className="btn btn-primary" onClick={this.openPopoverTop.bind(this)}>popover top</button>
                <button className="btn btn-primary" onClick={this.openPopoverBottom.bind(this)}>popover bottom</button>
                <button className="btn btn-primary" onClick={this.openPopoverLeft.bind(this)}>popover left</button>
                <button className="btn btn-primary" onClick={this.openPopoverRight.bind(this)}>popover right</button>
                <br/>
                <input
                    type="text"
                    style={{width:'160px',height:'32px',lineHeight:'32px',marginTop:'10px'}}
                    onClick={this.openInputPopover.bind(this)}
                />
            </div>
        );
    }
}