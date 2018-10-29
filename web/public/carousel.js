/**
 * Carousel 走马灯组件
 * @params images:图片url集合,array
 * @params autoplay:是否自动切换，boolean,默认false
 * @params delay:自动切换延迟(毫秒),number，默认2500
 * <div style={{width:'500px',height:'300px'}}>
 *    <Carousel images={this.state.imgList} autoplay={true} />
 * </div>
 * 备注：组件一定要有父元素，且父元素一定要有宽度和高度
 **/
import React,{Component} from 'react';
export default class Carousel extends Component {
    constructor(props) {
        super(props);
        this.orientation = 'left';//滚动方向
        this.state = {
            width:null,//盒子宽度
            left:0,//滚动区域left值
            index:0,//当前图片index
            delay:props.delay || 2500
        };
    }
    //初始化盒子宽度数据
    init(startCarousel){
        const pannelWidth = this.refs.pannel.clientWidth;
        this.setState({
            width:pannelWidth
        },() => {
            startCarousel();
        });
    }
    interval(){
        let ml = Number(this.state.left);
        let xh = this.state.index;
        const width = this.state.width;
        if(xh == 0){
            this.orientation = 'left';
        }
        if(xh == this.props.images.length - 1){
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
    mainEvent(index){
        const ml = this.state.width * index;
        const orientation = this.orientation;
        this.setState({
            index:index,
            left:orientation == 'left' ? '-'+ml : ml
        });
    }
    end(){
        clearInterval(this.timer);
    }
    start(){
        if(this.props.autoplay){
            this.timer = setInterval(() => {
                this.interval();
            },this.state.delay);
        }
    }
    componentDidMount() {
        this.init(() => {
            this.start();
        });
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
                            return (
                                <img
                                    key={item}
                                    src={item}
                                    style={{width:this.state.width+'px'}}
                                    onMouseOver={this.end.bind(this)}
                                    onMouseOut={this.start.bind(this)}
                                />
                            );
                        }) : ''
                    }
                </div>
                <div className="ui-carousel-ctrl">
                    {
                        images.length > 0 ? images.map((item,index) => {
                            const isActive = this.state.index == index ? 'active' : '';
                            return (
                                <span
                                    key={item}
                                    className={isActive}
                                    onMouseOver={this.end.bind(this)}
                                    onMouseOut={this.start.bind(this)}
                                    onClick={this.mainEvent.bind(this,index)}
                                >
                                </span>
                            );
                        }) : ''
                    }
                </div>
            </div>
        );
    }
}