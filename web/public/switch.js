/**
 *
 * 需要@switch.css
 * 属性：[width:int(默认50)]
 * <Switch width={60} active={false} onChange={this.switchOnChange.bind(this)} />
 **/

import React,{Component} from 'react';
export default class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultWidth: 50,
            switchStyle: {},
            sliderStyle: {}
        };
    }

    componentDidMount() {
        const __width = this.props.width ? this.props.width : this.state.defaultWidth;
        const __height = +(__width / 2);
        this.setState({
            switchStyle: {width: __width + 'px', height: __height + 'px', borderRadius: (__height / 2) + 'px'},
            sliderStyle: {width: (__height - 4) + 'px'}
        });
    }

    onSwitchStart() {
        const sw = this.refs.switch;
        const swClassName = sw.className;
        switch (swClassName) {
        case 'ui-switch active':
            sw.className = 'ui-switch';
            this.props.onChange(false);
            break;
        case 'ui-switch':
            sw.className = 'ui-switch active';
            this.props.onChange(true);
            break;
        }
    }

    render() {
        const isActiveClass = this.props.active ? 'ui-switch active' : 'ui-switch';
        return (
            <a className={isActiveClass}
                ref="switch"
                style={this.state.switchStyle}
                onClick={this.onSwitchStart.bind(this)}
            >
                <span className="ui-switch-slider" style={this.state.sliderStyle}></span>
            </a>
        );
    }
}