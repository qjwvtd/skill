/**
 * Radio单选组件
 **/
import React,{Component} from 'react';
export default class Radio extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        console.log(this.props.data);
    }

    render() {
        return (
            <a className="ui-radio-box">
                <div><span></span></div>
                <label></label>
            </a>
        );
    }
}