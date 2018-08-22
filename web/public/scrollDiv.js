import React,{Component} from 'react';
/**
 * 滚动DIV
 * <ScrollDiv height={'200px'}>
 *     这里是滚动内容
 * </ScrollDiv>
 **/
export default class ScrollDiv extends Component {
    constructor(props) {
        super(props);
        this.state = {
            outStyle:{
                position:'relative',
                overflow:'hidden',
                height:this.props.height
            },
            innerStyle:{
                position: 'absolute',
                left: 0,
                width:'100%',
                height:this.props.height,
                overFlowX: 'hidden',
                overFlowY: 'scroll'
            }
        };
    }
    render() {
        const {children} = this.props;
        return (
            <div className="msoc-scroll" style={this.state.outStyle}>
                <div className="msic-scroll" style={this.state.innerStyle}>
                    {children}
                </div>
            </div>
        );
    }
}