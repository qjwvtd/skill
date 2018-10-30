/**
 * 可复制文本的组件
 * <CopyText>这是需要复制的文本</CopyText>
 * 鼠标移入时可选择复制
 **/
import React,{Component} from 'react';
export default class CopyText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            copyText:null
        };
    }

    componentDidMount() {
    }
    copyText(){
        const { children } = this.props;
        const input = this.refs.uiCopyInput;
        input.value = children;
        input.select();
        document.execCommand("copy");
        this.setState({
            copyText:children
        },() => {
            setTimeout(() => {
                this.setState({
                    copyText:null
                });
            },2000);
        });
    }
    render() {
        const { children } = this.props;
        const status = this.state.copyText ? '1' : '0';
        return (
            <div className="ui-copy-wraper">
                {children}
                <input type="text" ref="uiCopyInput"/>
                <button onClick={this.copyText.bind(this)} className="ui-copy-btn">复制</button>
                <span style={{opacity:status}}>已复制到剪贴板</span>
            </div>
        );
    }
}