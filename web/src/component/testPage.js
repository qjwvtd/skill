import React,{Component} from 'react';
//page
import page from './../../public/page';
export default class PageTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            x:'',
            y:''
        };
    }

    componentDidMount() {
        //监听回车事件
        page.pageEnterDown(() => {
            this.refs.enterTest.innerHTML = '回车键按下啦！';
        });
        //鼠标移动
        document.onmousemove = (ev) => {
            const points = page.mousePoints(ev);
            this.setState({
                x:points.x,
                y:points.y
            });
        };
    }

    render() {
        return (
            <div>
                <h5 ref="enterTest">请按回车</h5>
                <div>
                    {'width:'+page.pageWidth()},{'height:'+page.pageHeight()}
                </div>
                <div>
                    <p>坐标：{'x:' + this.state.x+','+'y:' + this.state.y}</p>
                </div>
            </div>
        );
    }
}