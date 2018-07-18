/*
 * 2018/7/18
 * administractor
 */
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//component
import Enter from './component/Enter';


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

