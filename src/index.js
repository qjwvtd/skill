/*
 * 2018/7/18
 * administractor
 */
//react
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//component
import Enter from './component/Enter';//回车

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            [
                <Enter key="Enter" />
            ]
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

