/**
 * 折叠面板组件
 * <Collapse title="this is title">
 *     <p>this is content</p>
 </Collapse>
 **/
import React,{Component} from 'react';

export default class Collapse extends Component{
    constructor(props){
        super(props);
        this.state = {
            isActive:false
        };
    }
    mainEvent(){
        const isActive = this.state.isActive;
        switch (isActive){
        case true:
            this.setState({
                isActive:false
            });
            break;
        case false:
            this.setState({
                isActive:true
            });
            break;
        }
    }
    render(){
        const {children} = this.props;
        return (
            <div className={this.state.isActive ? "ui-collapse active" : "ui-collapse"}>
                <p className="ui-collapse-title" onClick={this.mainEvent.bind(this)}>
                    <span>{'>'}</span>&nbsp;{this.props.title}
                </p>
                <div className="ui-collapse-content">
                    {children}
                </div>
            </div>
        );
    }
}