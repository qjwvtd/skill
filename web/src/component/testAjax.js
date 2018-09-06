import React,{Component} from 'react';
import axios from 'axios';

export default class AjaxTest extends Component{
    constructor(props) {
        super(props);
        this.state = {
            getJsonApi:'http://192.168.13.238:1001/getJsonFile',
            getImgApi:'http://192.168.13.238:1001/getImgFile',
            json:null,
            imgUrl:null
        };
    }
    componentDidMount(){
        axios.get(this.state.getJsonApi).then((res) => {
            this.setState({
                json:res.data
            });
        }).catch((error) => {
            console.log(error);
        });
        axios.get(this.state.getImgApi).then((res) => {
            this.setState({
                imgUrl:res.data
            });
        }).catch((error) => {
            console.log(error);
        });
    }
    render(){
        const __JSON = this.state.json;
        return (
            <div>
                <h5>从服务端获取数据，测试跨域</h5>
                <div className="imgTestContainer">
                    <p>name:{__JSON ? __JSON.name : ''}</p>
                    <p>version:{__JSON ? __JSON.version : ''}</p>
                    <p>description:{__JSON ? __JSON.description : ''}</p>
                    <p>repository:{__JSON ? __JSON.repository : ''}</p>
                    <p>author:{__JSON ? __JSON.author : ''}</p>
                    <p>license:{__JSON ? __JSON.license : ''}</p>
                </div>
                <div className="jsonTestContainer">
                    图片:<img src={this.state.imgUrl}/>
                </div>
            </div>
        );
    }
}
