/**
 * width['50%'/'200px'],不传时默认100%
 * height['50px']，不传时默认32px,现阶段不能传百分比数值
 * callback回调，选中后返回key和value
 * list必须是数组，且必须有key,value字段
 * 使用：
 * <SelectBox
 * width={'100%'}
 * height={'32px'}
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
            selectedVal:'--请选择--'
        };
    }
    openContent(){
        const isActive = this.state.isActive;
        this.setState({isActive:!isActive});
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
        const __width = this.props.width ? this.props.width : '100%';
        const __height = this.props.height ? this.props.height : '34px';
        const __lineHeight = (Number(__height.replace(/px/,'')) - 2)+'px';
        const __iconClass = this.state.isActive ? 'ui-select-icon active' :'ui-select-icon';
        const __contentClass = this.state.isActive ? "ui-select-content active" : "ui-select-content";
        const __icon = this.state.isActive ? '▲' : '▼';
        //计算内容区高度
        const __cHeight = () => {
            const __num = Number(__height.replace(/px/,''));
            if(!this.state.isActive){
                return '0px';
            }
            //最高240
            if((__num * this.props.list.length) > 240){
                return '242px';
            }else{
                return (__num * this.props.list.length + 2)+'px';
            }
        };
        return (
            <div className="ui-select-box" style={{width:__width,height:__height,lineHeight:__lineHeight}}>
                <div className="ui-select-show" onClick={this.openContent.bind(this)}>
                    <a>{this.state.selectedVal}</a>
                    <a className={__iconClass} style={{lineHeight:__lineHeight}}>{__icon}</a>
                </div>
                <div className={__contentClass} style={{top:__height,height:__cHeight()}}>
                    <ul>
                        {
                            this.props.list.length > 0 ? this.props.list.map((item,index) => {
                                return (
                                    <li
                                        key={'options-'+index}
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
