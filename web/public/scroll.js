/**
 * 滚动组件，包括无滚动条的手动滚动和自动滚动
 * 1、手动滚动DIV，无滚动条
 * <ManualScroll height={'200px'}>
 *     这里是滚动内容
 * </ManualScroll>
 * 2、自动滚动
 **/
import React,{Component} from 'react';
//无滚动条,手动滚动
export class ManualScroll extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outStyle:{
                position:'relative',
                overflow:'hidden',
                height:this.props.height
            },
            innerStyle:{
                position: 'absolute',
                left: 0,
                width:'100%',
                height:this.props.height,
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
export class AutoScroll extends Component{
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount(){
        const demo = document.getElementById("demo");
        const demo1 = document.getElementById("demo1");
        const demo2 = document.getElementById("demo2");

        const state = {
            demo2scrollTop:demo2.scrollTop,
            demo2offsetTop:demo2.offsetTop,
            demoScrollTop:demo.scrollTop,
            demo1OffsetHeight:demo1.offsetHeight
        };
        demo2.innerHTML = demo1.innerHTML;
        //垂直滚动函数
        function Marquee() {
            if (demo2.offsetTop - demo.scrollTop <= 0){
                demo.scrollTop -= demo1.offsetHeight;
            }else{
                state.demoScrollTop++;
                demo.scrollTop = state.demoScrollTop;
            }
        }
        //设置定时器0.2秒重复执行一次函数
        const t = setInterval(Marquee, 100);
        demo.onmouseover = function(){
            clearInterval(t);
        };
        demo.onmouseout = function(){
            setInterval(Marquee, 100);
        };
    }
    render(){
        return (
            <div id="demo" style={{overflow:'hidden',height:'200px',width:'280px',border: '1px solid #ccc'}}>
                <div id="demo1">
                    <ul>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>1</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>2</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>3</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>4</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>5</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>6</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>7</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>8</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>9</li>
                        <li style={{lineHeight: '40px','borderBottom':'1px solid #ccc'}}>0</li>
                    </ul>
                </div>
                <div id="demo2" style={{backgroundColor:'#e6e6e6'}}></div>
            </div>
        );
    }
}