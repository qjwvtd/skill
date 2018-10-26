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
            <div>
                <h5>走马灯、轮播</h5>
                <Carousel images={this.state.imgList} />
            </div>
        );
    }
}