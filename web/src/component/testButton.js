/**
 * 此处是注释
 **/
import React,{Component} from 'react';
export default class ButtonTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <div className="btn-group"><h5>按钮</h5></div>
                <div className="btn-group">
                    <button className="btn btn-primary">Primary</button>
                    <button className="btn btn-secondary">Secondary</button>
                    <button className="btn btn-success">Success</button>
                    <button className="btn btn-danger">Danger</button>
                    <button className="btn btn-warning">Warning</button>
                    <button className="btn btn-info">Info</button>
                    <button className="btn btn-default">Default</button>
                    <button className="btn btn-black">Black</button>
                </div>
                <div className="btn-group">
                    <button className="btn btn-empty-primary">Primary</button>
                    <button className="btn btn-empty-secondary">Secondary</button>
                    <button className="btn btn-empty-success">Success</button>
                    <button className="btn btn-empty-danger">Danger</button>
                    <button className="btn btn-empty-warning">Warning</button>
                    <button className="btn btn-empty-info">Info</button>
                    <button className="btn btn-empty-default">Default</button>
                    <button className="btn btn-empty-black">Black</button>
                </div>
                <div className="btn-group">
                    <button className="btn btn-pie btn-primary">Icon</button>
                    <button className="btn btn-pie btn-secondary">Icon</button>
                    <button className="btn btn-pie btn-success">Icon</button>
                    <button className="btn btn-pie btn-danger">Icon</button>
                    <button className="btn btn-pie btn-warning">Icon</button>
                    <button className="btn btn-pie btn-info">Icon</button>
                    <button className="btn btn-pie btn-default">Icon</button>
                    <button className="btn btn-pie btn-black">Icon</button>
                </div>
                <div className="btn-group">
                    <button className="btn btn-lg btn-primary">Primary</button>
                    <button className="btn btn-md btn-primary">Primary</button>
                    <button className="btn btn-sm btn-primary">Primary</button>
                    <button className="btn btn-xs btn-primary">Primary</button>
                </div>
                <div className="btn-group">
                    <button className="btn btn-xs btn-empty-primary">Primary</button>
                    <button className="btn btn-sm btn-empty-primary">Primary</button>
                    <button className="btn btn-md btn-empty-primary">Primary</button>
                    <button className="btn btn-lg btn-empty-primary">Primary</button>
                </div>
                <div className="btn-group" style={{width:'560px'}}>
                    <button className="btn btn-block btn-primary">Primary</button>
                </div>
                <div className="btn-group" style={{width:'560px'}}>
                    <button className="btn btn-block btn-empty-primary">Primary</button>
                </div>
            </div>
        );
    }
}