/*
 * 2018/4/27
 * 基于react的分页实现
 * 需要@pagination.css
 * props:[
 *      pageNumber:当前第几页
 *      pageSize:每页条数
 *      total:总页数
 *      callback:点击回调，返回(pageNumber,pageSize)
 * ]
 * <Pagination pageNumber="1" pageSize="10" total="20" callback={testFenYe}/>
 * 或
 * <Pagination pageNumber={1} pageSize={10} total={20} callback={testFenYe}/>
 */
import React,{Component} from 'react';

export default class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage:Number(props.pageNumber),
            pageSize:Number(props.pageSize),
            total:Number(props.total)
        };
    }
    onHanlder(type){
        let current = this.state.currentPage;
        const total = this.props.total;
        if(type == 'home'){
            return 1;
        }
        if(type == 'prev' && current >= 2){
            current--;
            return current;
        }
        if(type == 'next' && current < total){
            current++;
            return current;
        }
        if(type == 'last'){
            return total;
        }
    }
    onMainEvent(type){
        const num = this.onHanlder(type);
        if(num){
            this.setState({
                currentPage:num
            },() => {
                this.props.callback(num,this.state.pageSize);
            });
        }
    }
    //去XX页
    choosePage(){
        const total = this.props.total;
        const reg = /^[1-9]+|[1-9]+[0]+$/;
        const val = Number(this.refs.pInput.value);
        if(reg.test(val) && val <= total && val >= 1){
            this.setState({
                currentPage:val
            },() => {
                this.props.callback(val,this.props.pageSize);
            });
        }
    }
    render(){
        return (
            <div className="ui-pagi">
                <button onClick={this.onMainEvent.bind(this,"home")} title="首页">{'<<'}</button>
                <button onClick={this.onMainEvent.bind(this,"prev")} title="上一页">{'<'}</button>
                <span className="ui-pagi-show">
                    第{this.state.currentPage+ '页/共' +this.props.total}页
                </span>
                <button onClick={this.onMainEvent.bind(this,"next")} title="下一页">{'>'}</button>
                <button onClick={this.onMainEvent.bind(this,"last")} title="最后一页">{'>>'}</button>
                <span className="ui-pagi-toPageNum">
                    跳至<input
                        type="text"
                        ref="pInput"
                        defaultValue={null}
                        className="ui-pagi-goInput"
                    />页，
                    <b onClick={this.choosePage.bind(this)}>GO</b>
                </span>
            </div>
        );
    }
}