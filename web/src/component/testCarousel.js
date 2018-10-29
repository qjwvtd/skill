/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Carousel from './../../public/carousel';
export default class CarouselTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgList:[
                "./img/banner-1.png",
                "./img/banner-2.png",
                "./img/banner-3.png",
                "./img/banner-4.png",
                "./img/banner-5.png"
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div style={{overflow:'hidden'}}>
                <h5>走马灯、轮播（自动、非自动）</h5>
                <div style={{width:'400px',height:'240px',float:'left'}}>
                    <Carousel images={this.state.imgList} autoplay={true} />
                </div>
                <div style={{width:'500px',height:'300px',float:'right'}}>
                    <Carousel images={this.state.imgList} />
                </div>
            </div>
        );
    }
}