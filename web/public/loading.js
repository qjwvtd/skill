import React,{Component} from 'react';
//需要loading.css
//import后，直接使用 const data = true ? XXX : <Loading />;

export default class Loading extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <a className="loading">
                <span className="loadingl">l</span>
                <span className="loadingo">o</span>
                <span className="loadinga">a</span>
                <span className="loadingd">d</span>
                <span className="loadingi">i</span>
                <span className="loadingn">n</span>
                <span className="loadingg">g</span>
                <span className="loadingp1">.</span>
                <span className="loadingp2">.</span>
                <span className="loadingp3">.</span>
            </a>
        );
    }
}