/**
 * react 滑动条组件 Range
 * 未完待续
 **/
import React,{Component} from 'react';
export default class Range extends Component {
    constructor(props) {
        super(props);
    }
    start(e) {
        const rc = this.refs.rangeContainer;
        const real = this.refs.rangeReal;
        const ctrl = this.refs.rangeCtrl;
        const event = e || window.event;
        const clientWidth = rc.clientWidth - ctrl.clientWidth;
        /*用于保存小的div拖拽前的坐标*/
        ctrl.startX = event.clientX - ctrl.offsetLeft;
        /*鼠标的移动事件*/
        rc.onmousemove = (ev) => {
            //const targetEvent = ev || window.event;
            const defaultLeft = ev.clientX - ctrl.startX + "px";
            ctrl.style.left = defaultLeft;
            real.style.width = defaultLeft;
            /*对于大的DIV四个边界的判断*/
            let value = null;
            if (ev.clientX - ctrl.startX <= 0) {
                value = 0;
            }
            if (ev.clientX - ctrl.startX >= clientWidth) {
                value = clientWidth;
            }
            ctrl.style.left = value + "px";
            real.style.width = value + "px";
            console.log(ev.clientX,ctrl.startX);
            //this.props.onChange(value);
        };
        /*鼠标的抬起事件,终止拖动*/
        rc.onmouseup = () => {
            rc.onmousedown = null;
            rc.onmousemove = null;
            rc.onmouseup = null;
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div className="ui-range" ref="rangeContainer">
                <div className="ui-range-box">
                    <div className="ui-range-real" ref="rangeReal"></div>
                    <div className="ui-range-ctrl" ref="rangeCtrl" onMouseDown={this.start.bind(this)}></div>
                </div>
            </div>
        );
    }
}