/**
 * 此处是注释
 **/
import React,{Component} from 'react';
export default class CssNavTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        document.getElementById('default').click();
    }

    render() {
        return (
            <div>
                <h5>纯CSS切换导航</h5>
                <div className="box" style={{width:'320px', height:'100px', overflow:'hidden'}}>
                    <div id="one" style={{width:'100%', height:'100%', background:'#6c757d'}}></div>
                    <div id="two" style={{width:'100%', height:'100%', background:'#1089ff'}}></div>
                    <div id="three" style={{width:'100%', height:'100%', background:'#17a2b8'}}></div>
                    <div id="four" style={{width:'100%', height:'100%', background:'#28a745'}}></div>
                </div>
                <div className="anchor">
                    <a href="#one">1</a>
                    <a id="default" href="#two">2</a>
                    <a href="#three">3</a>
                    <a href="#four">4</a>
                </div>
            </div>
        );
    }
}