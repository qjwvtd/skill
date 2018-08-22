import React,{Component} from 'react';
import ajax from './../../public/ajax';

export default class AjaxTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            getJsonApi:'http://192.168.13.238:1001/getJsonFile',
            getImgApi:'http://192.168.13.238:1001/getImgFile',
            json:null,
            img:null
        };
    }
    componentDidMount(){
        ajax.get({
            url:this.state.getJsonApi,
            success: (res) => {
                console.log(res);
            }
        });
        ajax.get({
            url:this.state.getImgApi,
            success: (res) => {
                console.log(res);
            }
        });
    }
    render(){
        return (
            <div>
                <div className="imgTestContainer">
                    {this.state.json}
                </div>
                <div className="jsonTestContainer">
                    {this.state.img}
                </div>
            </div>
        );
    }
}
