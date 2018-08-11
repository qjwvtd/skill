/*
 * 2018/4/27
 * 基于react的分页实现
 * props:[
 *      pageNumber:当前第几页
 *      pageSize:每页条数
 *      total:总页数
 *      callback:点击回调，返回(pageNumber,pageSize)
 * ]
 * <Pagination pageNumber="1" pageSize="10" total="20" callback={testFenYe}/>
 */
import React,{Component} from 'react';

export default class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {
            inputStyle:{textIndent:0,outline:'none',padding:'0 1px',width:'28px',height:'26px',lineHeight:'26px',border:'1px solid #ccc',borderRadius:'3px',textAlign:'center',fontSize:'12px'},
            btnStyle:{background:'#d9d9d9',border:'none',margin:'5px',cursor:'pointer',outline:'none',color:'rgba(0,0,0,0.65)',borderRadius:'3px',padding:'0 6px',height:'26px',lineHeight:'24px',fontFamily:' "黑体" !important',fontSize:'12px'},
            pagingBtnStyle:{background:'#2ED2F2',border:'1px solid #2ED2F2',margin:'5px 0 5px 5px',cursor:'pointer',outline:'none',color:'#fff',borderRadius:'3px',padding:'0 6px',height:'26px',lineHeight:'24px',fontFamily:' "黑体" !important',fontSize:'12px'}
        };
    }
    //只能输入数字
    onlyWriteNumber(){
        var _val = this.refs.paginationInput.value;
        this.refs.paginationInput.value = _val.replace(/[^\d]/g,'');
        if(_val <= 0 || parseInt(_val) > parseInt(this.props.total)){
            this.refs.paginationInput.value = 1;
        }
    }
    //首页
    onFirst(){
        this.refs.paginationInput.value = 1;
        this.props.callback(1,this.props.pageSize);
    }
    //上一页
    onPrev(){
        var _val = parseInt(this.refs.paginationInput.value);
        if (_val >= 2) {
            _val--;
            this.refs.paginationInput.value = _val;
            this.props.callback(_val,this.props.pageSize);
        }
    }
    //下一页
    onNext(){
        var _val = parseInt(this.refs.paginationInput.value);
        var _total = parseInt(this.props.total);
        if (_val < _total) {
            _val++;
            this.refs.paginationInput.value = _val;
            this.props.callback(_val,this.props.pageSize);
        }
    }
    //尾页
    onLast(){
        this.refs.paginationInput.value = parseInt(this.props.total);
        if(this.props.total && this.props.total > 1 ){
            this.props.callback(parseInt(this.props.total),this.props.pageSize);
        }
    }
    //去X页
    choosePage(){
        let num = parseInt(this.refs.paginationInput.value);
        this.props.callback(num,this.props.pageSize);
    }
    //按钮鼠标移入
    btnMouseIn(event){
        let currentBtn = event.currentTarget;
        currentBtn.style.border = '1px solid #2296f3';
        currentBtn.style.color = '#2296f3';
    }
    //按钮鼠标移出
    btnMouseOut(event){
        let currentBtn = event.currentTarget;
        currentBtn.style.border = '1px solid #d9d9d9';
        currentBtn.style.color = 'rgba(0,0,0,0.65)';
    }
    render(){
        //总页数大于0才显示分页信息
        if(this.props.total > 0){
            return (
                <div style={{textAlign:'center',padding:'10px 0 0 0'}}>
                    <button type="button" style={this.state.pagingBtnStyle} onClick={this.onFirst.bind(this)} onMouseMove={this.btnMouseIn.bind(this)} onMouseOut={this.btnMouseOut.bind(this)}>首页</button>
                    <button type="button" style={this.state.pagingBtnStyle} onClick={this.onPrev.bind(this)} onMouseMove={this.btnMouseIn.bind(this)} onMouseOut={this.btnMouseOut.bind(this)}>上一页</button>
                    <span>第<input type="text" defaultValue={this.props.pageNumber} ref="paginationInput" style={this.state.inputStyle} onBlur={this.onlyWriteNumber.bind(this)} onKeyUp={this.onlyWriteNumber.bind(this)} />页</span>
                    <button type="button" style={this.state.btnStyle} onClick={this.choosePage.bind(this)}>GO</button>
                    <span style={{fontSize:'12px'}}>共{this.props.total}页</span>
                    <button type="button" style={this.state.pagingBtnStyle} onClick={this.onNext.bind(this)} onMouseMove={this.btnMouseIn.bind(this)} onMouseOut={this.btnMouseOut.bind(this)}>下一页</button>
                    <button type="button" style={this.state.pagingBtnStyle} onClick={this.onLast.bind(this)} onMouseMove={this.btnMouseIn.bind(this)} onMouseOut={this.btnMouseOut.bind(this)}>尾页</button>
                </div>
            );
        }else{
            console.log('total < 1，cann`t to pagination');
            return null;
        }
    }
}