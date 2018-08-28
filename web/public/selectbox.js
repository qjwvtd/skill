/**
 * list必须是数组，且必须有key,value字段
 * width['50%'/'50px']
 * height['50px']现阶段只能是px
 * callback回调，选中后返回key和value
 * <SelectBox
 * width={'100%'}
 * height={'30px'}
 * list=[{key:0,value:'name0'},{key:1,value:'name1'},...]
 * callback={this.onChange.bind(this)}
 />
 **/
import React,{Component} from 'react';
export default class SelectBox extends Component{
    constructor(props) {
        super(props);
        this.state = {
            isActive:false,
            selectedKey:null,
            selectedVal:null
        };
    }
    openContent(){
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
    onSelect(item){
        this.setState({
            isActive:false,
            selectedKey:item.key,
            selectedVal:item.value
        });
        this.props.callback(item.key,item.value);
    }
    render() {
        const __width = this.props.width;
        const __height = this.props.height;
        const __iconClass = this.state.isActive ? 'ui-select-icon active' :'ui-select-icon';
        const __contentClass = this.state.isActive ? "ui-select-content active" : "ui-select-content";
        const __icon = this.state.isActive ? '∧' : '∨';
        return (
            <div className="ui-select-box" style={{width:__width,height:__height,lineHeight:__height}}>
                <div className="ui-select-show" onClick={this.openContent.bind(this)}>
                    <a>{this.state.selectedVal}</a>
                    <a className={__iconClass} style={{lineHeight:__height}}>{__icon}</a>
                </div>
                <div className={__contentClass} style={{top:__height}}>
                    <ul>
                        {
                            this.props.list.length > 0 ? this.props.list.map((item,index) => {
                                return (
                                    <li
                                        key={item.value+'-'+index}
                                        onClick={this.onSelect.bind(this,item)}
                                        style={{height:__height,lineHeight:__height}}
                                    >
                                        {item.value}
                                    </li>
                                );
                            }) : 'loading...'
                        }
                    </ul>
                </div>
            </div>
        );
    }
}