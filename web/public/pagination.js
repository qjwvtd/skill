/*
 * 2018/4/27
 * 基于react的分页实现,两个组件，用法相同[Pagination,PaginationMini]
 * 需要@pagination.css
 * @params total:总页数，(必传),
 * @params onChange:点击回调，返回(pageNumber,pageSize),(必传),
 * @params pageNumber:当前第几页,默认1(可选),
 * @params pageSize:每页条数，默认8(可选)
 * 用法：
 * <Pagination pageNumber="1" pageSize="10" total="20" onChange={testFenYe}/>
 * 或
 * <Pagination pageNumber={1} pageSize={10} total={20} onChange={testFenYe}/>
 * <PaginationMini total={20} onChange={testFenYe} />
 */
import React,{Component} from 'react';

export class Pagination extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage:Number(props.pageNumber) || 1,
            pageSize:Number(props.pageSize) || 8,
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
                this.props.onChange(num,this.state.pageSize);
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
                this.props.onChange(val,this.state.pageSize);
            });
        }
    }
    render(){
        return (
            <div className="ui-pagination">
                <a onClick={this.onMainEvent.bind(this,"home")} title="首页">首页</a>
                <a onClick={this.onMainEvent.bind(this,"prev")} title="上一页">{'<'}</a>
                <span className="ui-pagination-show">
                    第{this.state.currentPage+ '页/共' +this.props.total}页
                </span>
                <a onClick={this.onMainEvent.bind(this,"next")} title="下一页">{'>'}</a>
                <a onClick={this.onMainEvent.bind(this,"last")} title="尾页">尾页</a>
                <span className="ui-pagination-toPageNum" title="跳至指定页">
                    跳至
                    <input
                        type="text"
                        ref="pInput"
                        defaultValue={null}
                        onBlur={this.choosePage.bind(this)} />
                    页
                </span>
            </div>
        );
    }
}
export class PaginationMini extends Component{
    constructor(props){
        super(props);
        this.state = {
            currentPage:1,
            pageSize:Number(props.pageSize) || 8,
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
                this.props.onChange(num,this.state.pageSize);
            });
        }
    }
    //去XX页
    choosePage(event){
        const total = this.props.total;
        const reg = /^[1-9]+|[1-9]+[0]+$/;
        const val = Number(event.currentTarget.value);
        if(reg.test(val) && val <= total && val >= 1){
            this.setState({
                currentPage:val
            },() => {
                this.props.onChange(val,this.state.pageSize);
            });
        }
    }
    render(){
        return (
            <div className="ui-pagination">
                <a onClick={this.onMainEvent.bind(this,"prev")} title="上一页">{'<'}</a>
                <span className="ui-pagination-show">
                    <input
                        type="text"
                        value={this.state.currentPage}
                        onChange={this.choosePage.bind(this)}
                    />&nbsp;/&nbsp;{this.props.total}
                </span>
                <a onClick={this.onMainEvent.bind(this,"next")} title="下一页">{'>'}</a>
            </div>
        );
    }
}