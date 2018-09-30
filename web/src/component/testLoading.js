/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import {LoadingMini,Loading} from './../../public/loading';

export default class LoadingTest extends Component{
    constructor(props){
        super(props);
        this.state = {
            isLoading:null
        };
    }
    mainEvent(){
        this.setState({
            isLoading:true
        },() => {
            setTimeout(() => {
                this.setState({
                    isLoading:false
                });
            },3000);
        });
    }
    render(){
        return (
            <div>
                <div>
                    <LoadingMini />
                </div>
                ----------------------------------------------
                <div>
                    <button className="btn btn-promise" onClick={this.mainEvent.bind(this)}>start loading</button>
                    <Loading status={this.state.isLoading} />
                </div>
            </div>
        );
    }
}