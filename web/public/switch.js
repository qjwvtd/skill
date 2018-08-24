/**
 *
 * 将input元素改造成switch组件
 * @switch.css
 * 属性：[width:int(默认50),height:int(默认25)]
 * <Switch width={60} height={30} active={false} onChange={this.switchOnChange.bind(this)} />
 **/

import React,{Component} from 'react';
export default class Switch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            defaultWidth: 50,
            defaultHeight: 25,
            switchStyle: {},
            sliderStyle: {}
        };
    }

    componentDidMount() {
        const __width = this.props.width ? this.props.width : this.state.defaultWidth;
        const __height = this.props.height ? this.props.height : this.state.defaultHeight;
        this.setState({
            switchStyle: {width: __width + 'px', height: __height + 'px', borderRadius: (__height / 2) + 'px'},
            sliderStyle: {width: __height + 'px'}
        });
    }
    onSwitchStart(){
        const sw = this.refs.switch;
        const swClassName = sw.className;
        switch (swClassName){
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
            <a className={isActiveClass} ref="switch" style={this.state.switchStyle} onClick={this.onSwitchStart.bind(this)}>
                <span className="ui-switch-slider" style={this.state.sliderStyle}></span>
            </a>
        );
    }
}