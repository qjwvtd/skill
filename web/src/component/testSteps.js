/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Steps from './../../public/steps';

export default class StepsTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            list:['第一步','第二步','第三步','第四步','第五步']
        };
    }
    render(){
        return (
            <Steps index={3} steps={this.state.list} />
        );
    }
}