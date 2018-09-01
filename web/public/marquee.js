/**
 * 滚动组件，包括无滚动条的手动滚动和自动滚动
 * 1、手动滚动，无滚动条
 * <ManualMarquee height={'200px'}>
 *     这里是滚动内容
 * </ManualMarquee>
 * 2、自动滚动
 * <AutoMarquee height={'200px'} speed={50}>
 *    这里是滚动内容
 * </AutoMarquee>
 **/
import React,{Component} from 'react';
//无滚动条,手动滚动
export class ManualMarquee extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outStyle:{
                position:'relative',
                overflow:'hidden',
                height:props.height
            },
            innerStyle:{
                position: 'absolute',
                left: 0,
                width:'100%',
                height:props.height,
                overFlowX: 'hidden',
                overFlowY: 'scroll'
            }
        };
    }
    render() {
        const {children} = this.props;
        return (
            <div className="msoc-scroll" style={this.state.outStyle}>
                <div className="msic-scroll" style={this.state.innerStyle}>
                    {children}
                </div>
            </div>
        );
    }
}
//无滚动条,自动滚动
export class AutoMarquee extends Component{
    constructor(props) {
        super(props);
        this.style = {
            overflow:'hidden',
            height:props.height,
            width:'100%'
        };//容器样式
        this.count = 0;//滚动开始位置
        this.speed = props.speed ? props.speed : 50;//滚动速度
    }
    componentWillUnmount(){
        clearInterval(this.setinterval);
    }
    componentDidMount(){
        const mp = this.refs.mp;
        const ms = this.refs.ms;
        const md = this.refs.md;
        let MyMar;
        this.setinterval = setInterval(() => {
            this.marquee(mp,ms,md);
        }, this.speed);
        mp.onmouseover = () => {
            clearInterval(this.setinterval);
        };
        mp.onmouseout = () => {
            this.setinterval = setInterval(() => {
                this.marquee(mp,ms,md);
            }, this.speed);
        };
    }
    marquee(mp,ms,md){
        const showHeight = (ms.clientHeight * 2) - mp.clientHeight;
        if (md.offsetTop - mp.scrollTop <= 0){
            this.count -= ms.offsetHeight;
        }else {
            this.count = this.count+1;
        }
        if(this.count == showHeight){
            this.count = 0;
        }
        mp.scrollTop = this.count;
    }
    render(){
        const {children} = this.props;
        return (
            <div ref="mp" style={this.style}>
                <div ref="ms">{children}</div>
                <div ref="md">{children}</div>
            </div>
        );
    }
}