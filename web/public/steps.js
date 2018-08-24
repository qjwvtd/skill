/**
 * 步骤条(无点击事件)
 * 需要@steps.css
 * <Steps index={3} steps={['第一步','第二步','第三步','第四步','第五步']} />
 * index:当前正在进行的步骤,int
 * steps:步骤，['第一步','第二步','第三步','第四步','第五步'],array
 **/
import React,{Component} from 'react';

export default class Steps extends Component{
    constructor(props){
        super(props);
        this.state = {
            steps:['第一步','第二步','第三步','第四步','第五步']
        };
    }
    render(){
        if(this.props.index > this.state.steps.length){
            return;
        }
        return (
            <div className="stepContainer">
                <div className="steps">
                    <div className="line"></div>
                    <ul className="stepsPoints">
                        {
                            this.state.steps.map((item,index) => {
                                const isText = index+1 < this.props.index ? '√' : index+1;
                                const finishStyle = index+1 < this.props.index ? {background:'#3B86FF',color:'#fff'} : {};
                                return (
                                    <li key={item}><span style={finishStyle}>{isText}</span></li>
                                );
                            })
                        }
                    </ul>
                </div>
                <div className="stepTextList">
                    {
                        this.state.steps.map((item,index) => {
                            const isActive = index+1 == this.props.index ? 'active' :'';
                            return (
                                <span key={index} className={isActive}><b>{item}</b></span>
                            );
                        })
                    }
                </div>
            </div>
        );
    }
}
