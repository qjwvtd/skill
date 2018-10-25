/*
 * 2018/7/18
 * administractor
 */
import React,{Component} from 'react';

//Math.max
export class MathArrayMax extends Component{
    constructor(props){
        super(props);
        this.state = {
            max:null,
            min:null
        };
    }
    componentWillMount(){
        const arr = [14,12,32,65,23,45,85,10];
        this.setState({
            max:Math.max(...arr),
            min:Math.min(...arr)
        });
    }
    render(){
        return (
            <div>
                <h5>max/min</h5>
                <p>[14,12,32,65,23,45,85,10]</p>
                <p>{this.state.max}</p>
                <p>{this.state.min}</p>
            </div>
        );
    }
}
//ES6MAP
export class Es6Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            result:''
        };
    }
    es6testEvent(){
        let myMap = new Map();
        myMap.set('num',Math.random());
        const num = myMap.get('num');
        this.setState({
            result:num
        });
    }
    render(){
        return (
            <div>
                <h5>ES6 Map</h5>
                <button className="btn btn-primary" onClick={this.es6testEvent.bind(this)}>ES6 Map test</button>
                <p>{this.state.result}</p>
            </div>
        );
    }
}