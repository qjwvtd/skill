/*
 * 2018/7/18
 * administractor
 */
import React,{Component} from 'react';

//includes
export class ArrayIncludes extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h5>Array.includes</h5>
                <img src="./../../img/1.jpg" />
                <hr/>
            </div>
        );
    }
}
//Object.keys/values/entries
export class ObjectKeyValue extends Component{
    constructor(props){
        super(props);
        this.state = {
            keys:null,
            values:null,
            entries:null
        };
    }
    componentWillMount(){
        const company = {'name':'阿里巴巴','CEO':'马云','city':'杭州'};
        this.setState({
            keys:Object.keys(company),
            values:Object.values(company),
            entries:Object.entries(company)
        });
    }
    render(){
        return (
            <div>
                <h5>Object.keys/values</h5>
                <p>{this.state.keys+"+"+this.state.keys.length}</p>
                <p>{this.state.values+"+"+this.state.values.length}</p>
                <p>{this.state.entries+"+"+this.state.entries.length}</p>
            </div>
        );
    }
}