/**
 * progress,进度条组件
 * 直线进度条ProgressNormal:
 * @params progress真实进度，number
 * @params width,宽度，number/百分比值
 * @params size,高度大小，number
 * <ProgressNormal progress={(Math.random()*100).toFixed(0)} width={360} size={30} />
 **/
import React,{Component} from 'react';
//直线进度条
export class ProgressNormal extends Component {
    constructor(props) {
        super(props);
        this.state = {
            progress:0,//百分比，number，默认0
            width:props.width + 'px' || '100%',//默认100%
            size:props.size && props.size > 20 ? props.size : 20//默认最小20px
        };
    }
    componentDidMount() {
        setTimeout(() => {
            this.setState({
                progress:this.props.progress
            });
        },0);
    }

    render() {
        const __progress = this.state.progress;
        const __width = this.state.width;
        const __height = this.state.size;
        const bsize = __height*2+'px '+__height+'px';
        return (
            <div className="ui-progress-normal" style={{width:__width,height:__height+'px'}}>
                <span style={{width:__progress+'%',lineHeight:__height+'px',backgroundSize:bsize}}>{__progress+'%'}</span>
            </div>
        );
    }
}
//圆形进度条
export class ProgressCircle extends Component {
    constructor(props) {
        super(props);
        this.progress = this.props.progress ? this.props.progress : 0;//百分比，number，默认0
        this.size = this.props.size ? this.props.size : 120;//默认120px大小
        this.theme = this.props.theme ? this.props.theme : '#1089ff';//默认#1089ff
    }
    componentDidMount() {
        const c1 = this.refs.c1;
        const c2 = this.refs.c2;
        this.initProgressCircle(c1,c2,this.progress);
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