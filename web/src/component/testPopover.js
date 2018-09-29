/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import popover from './../../public/popover';
export default class PopoverTest extends Component {
    constructor(props) {
        super(props);
    }
    popoverTop(){
        popover.top('this is popover top textpopover toppopover toppopover toppopover toppopover top');
    }
    render() {
        return (
            <div>
                <button className="btn btn-promise" onClick={this.popoverTop.bind(this)}>popover top</button>

                <button className="btn btn-promise" onClick={this.popoverTop.bind(this)}>popover right</button>

                <button className="btn btn-promise" onClick={this.popoverTop.bind(this)}>popover bottom</button>

                <button className="btn btn-promise" onClick={this.popoverTop.bind(this)}>popover left</button>
            </div>
        );
    }
}