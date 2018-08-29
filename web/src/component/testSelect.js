/**
 * SelectTest
 **/
import React,{Component} from 'react';
import SelectBox from './../../public/selectbox';



export default class SelectTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [
                {key:0,value:'文本0'},
                {key:1,value:'文本1'},
                {key:2,value:'文本2'},
                {key:3,value:'文本3'},
                {key:4,value:'文本4'}
            ]
        };
    }
    onChange(key,value){
        console.log(key,value);
    }
    render() {
        return (
            <div>
                <h5>select box</h5>
                <div className="row">
                    <div className="col-6">
                        <SelectBox
                            width={'80%'}
                            list={this.state.list}
                            callback={this.onChange.bind(this)}
                        />
                    </div>
                    <div className="col-6">
                        <SelectBox
                            width={'320px'}
                            height={'50px'}
                            list={this.state.list}
                            callback={this.onChange.bind(this)}
                        />
                    </div>
                </div>
            </div>
        );
    }
}