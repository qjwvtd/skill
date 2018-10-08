/**
 * progress,进度条组件[直线进度条ProgressLine,圆形进度条ProgressCircle]
 * 公共属性：
 * theme:颜色值，string,'red'/'#1089ff'/'rgb(x,x,x)'，默认#1089ff
 * percent:百分比，number，默认0
 * 圆形进度条私有属性：
 * size:大小，number，默认160
 * 直线进度条私有属性：
 **/
import React,{Component} from 'react';
//直线进度条
export class ProgressLine extends Component {
    constructor(props) {
        super(props);
        this.state = {
            percent:0,//百分比，number，默认0
            theme:'#1089ff'//颜色值，string,默认#1089ff
        };
    }
    componentDidMount() {
        this.setState({
            percent:this.props.percent ? this.props.percent : this.state.percent,
            theme:this.props.theme ? this.props.theme : this.state.theme
        });
    }

    render() {
        const _theme = this.state.theme;
        const _width = this.state.percent + '%';
        return (
            <div className="ui-progress" style={{width:'100%'}}>
                <div className="ui-progress-line" style={{}}>
                    <div style={{background:_theme,width:_width}}>{_width}</div>
                </div>
            </div>
        );
    }
}
//圆形进度条
export class ProgressCircle extends Component {
    constructor(props) {
        super(props);
        this.percent = this.props.percent ? this.props.percent : 0;//百分比，number，默认0
        this.size = this.props.size ? this.props.size : 160;//默认160px大小
        this.theme = this.props.theme ? this.props.theme : '#1089ff';//默认#1089ff
    }
    componentDidMount() {
        const c1 = this.refs.c1;
        const c2 = this.refs.c2;
        this.initProgressCircle(c1,c2,this.percent);
    }
    //绘制圆
    initProgressCircle(c1,c2,percent){
        const ctx_1 = c1.getContext('2d');
        const ctx_2 = c2.getContext('2d');
        const show = this.refs.cshow;
        ctx_1.lineWidth = 10;
        ctx_1.strokeStyle = "#ccc";//画底部的灰色圆环
        ctx_1.beginPath();
        ctx_1.arc(c1.width / 2, c1.height / 2, c1.width / 2 - ctx_1.lineWidth / 2, 0, Math.PI * 2, false);
        ctx_1.closePath();
        ctx_1.stroke();
        if (percent < 0 || percent > 100) {
            return;
        }
        ctx_2.lineWidth = 10;
        ctx_2.strokeStyle = this.theme;
        let angle = 0;
        let timer;
        let cw = c2.width;
        let ch = c2.height;
        (function draw() {
            timer = requestAnimationFrame(draw);
            ctx_2.clearRect(0, 0, cw, ch);//百分比圆环
            ctx_2.beginPath();
            ctx_2.arc(cw / 2, ch / 2, cw / 2 - ctx_2.lineWidth / 2, 0, angle * Math.PI / 180, false);
            angle++;
            let percentAge = parseInt((angle / 360) * 100);
            if (angle > (percent / 100 * 360)) {
                percentAge = percent;
                window.cancelAnimationFrame(timer);
            };
            ctx_2.stroke();
            ctx_2.closePath();
            ctx_2.save();
            ctx_2.beginPath();
            ctx_2.rotate(90 * Math.PI / 180);
            let text = percentAge + '%';
            show.innerHTML = text;
            ctx_2.closePath();
            ctx_2.restore();
        })();
    }

    render() {
        return (
            <div className="ui-progress" style={{width:this.size+'px',height:this.size+'px'}}>
                <div className="ui-progress-circle" style={{width:'inhert',height:'inhert'}}>
                    <canvas className="ui-progress-circle-item" ref="c1" width={this.size} height={this.size}></canvas>
                    <canvas className="ui-progress-circle-item" ref="c2" width={this.size} height={this.size}></canvas>
                </div>
                <p ref="cshow" className="ui-progress-circle-show" style={{color:this.theme}}></p>
            </div>
        );
    }
}