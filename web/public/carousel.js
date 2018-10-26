/**
 * Carousel 走马灯组件
 **/
import React,{Component} from 'react';
export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.orientation = 'left';//滚动方向
        this.state = {
            width:null,//盒子宽度
            left:0,//滚动区域left值
            index:0//当前图片index
        };
    }
    init(){
        const pannelWidth = this.refs.pannel.clientWidth;
        this.setState({
            width:pannelWidth
        });
    }
    interval(){
        let ml = Number(this.state.left);
        let xh = this.state.index;
        const width = this.state.width;
        const len = this.props.images.length;
        if(xh == 0){
            this.orientation = 'left';
        }
        if(xh == +(len - 1)){
            this.orientation = 'right';
        }
        if(this.orientation == 'left'){
            xh++;
            ml -= width;
        }
        if(this.orientation == 'right'){
            xh--;
            ml += width;
        }
        this.setState({
            index:xh,
            left:ml
        });
    }
    componentDidMount() {
        this.init();
        this.timer = setInterval(() => {
            this.interval();
        },2500);
    }

    render() {
        const images = this.props.images;
        const _boxWidth = this.state.width*images.length+'px';
        const _marginLeft = this.state.left+'px';
        return (
            <div className="ui-carousel" ref="pannel">
                <div className="ui-carousel-box" style={{width:_boxWidth,marginLeft:_marginLeft}}>
                    {
                        images.length > 0 ? images.map((item,index) => {
                            return (<img key={item} src={item} style={{width:this.state.width+'px'}} />);
                        }) : ''
                    }
                </div>
                <div className="ui-carousel-ctrl">12345</div>
            </div>
        );
    }
}