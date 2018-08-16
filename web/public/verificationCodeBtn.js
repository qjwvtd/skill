/**
 * wait:验证码btn秒数
 * 样式可定制
 * <VerificationCodeBtn wait={60} />
 **/
import React,{Component} from 'react';
export default class VerificationCodeBtn extends Component {
    constructor(props) {
        super(props);
        this.state = {
            btnText: '获取验证码',
            wait: this.props.wait
        };
    }
    btnClick(){
        this.setTime();
    }
    setTime() {
        const btn = this.refs.vcbtn;
        let t;
        if(this.state.wait > 0){
            btn.setAttribute("disabled", true);
            const __wait = this.state.wait - 1;
            this.setState({
                btnText: "(" + __wait + "s)后重新发送",
                wait:__wait
            });
            t = setTimeout(() => {
                this.setTime(btn);
            }, 1000);
        }
        if(this.state.wait == 0){
            btn.removeAttribute("disabled");
            this.setState({
                btnText: "获取验证码",
                wait: this.props.wait
            });
            clearTimeout(t);
        }
    }
    componentDidMount() {

    }

    render() {
        return (
            <button
                type="button"
                ref="vcbtn"
                onClick={this.setTime.bind(this)}
            >
                {this.state.btnText}
            </button>
        );
    }
}