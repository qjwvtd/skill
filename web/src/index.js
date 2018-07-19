/*
 * 2018/7/18
 * administractor
 */
//react
import React,{Component} from 'react';
import ReactDOM from 'react-dom';
//component
import Enter from './component/Enter';//回车
import {
    ArrayIncludes,
    ObjectKeyValue,
    MathArrayMax,
    StringLink,
    ObjectAssign,
    Es6Map,
    Es6Set
} from './component/ES20162017';//ES201620172018

class App extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            [
                <Enter key="Enter" />,
                <ArrayIncludes key="ArrayIncludes" />,
                <ObjectKeyValue key="ObjectKeyValue" />,
                <MathArrayMax key="MathArrayMax" />,
                <StringLink key="StringLink" />,
                <ObjectAssign key="ObjectAssign" />,
                <Es6Map key="Es6Map" />,
                <Es6Set key="Es6Set" />
            ]
        );
    }
}

ReactDOM.render(
    <App />,
    document.getElementById('root')
);

