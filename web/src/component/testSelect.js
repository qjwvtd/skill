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
                {key:0,value:'text0'},
                {key:1,value:'text1'},
                {key:2,value:'text2'},
                {key:3,value:'text3'},
                {key:4,value:'text4'}
            ]
        };
    }
    onChange(key,value){
        console.log(key,value);
    }
    render() {
        return (
            <div className="row">
                <div className="col-6">
                    <SelectBox
                        width={'80%'}
                        height={'30px'}
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

        );
    }
}