/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import {Pagination,PaginationMini} from './../../public/pagination';
export default class PaginationTest extends Component {
    constructor(props) {
        super(props);
    }
    onPagination(pageNum,pageSize){
        console.log(pageNum);
        console.log(pageSize);
    }
    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Pagination pageNumber={1} pageSize={10} total={20} onChange={this.onPagination.bind(this)} />
                <Pagination  total={30} onChange={this.onPagination.bind(this)} />
                <PaginationMini pageNumber={1} pageSize={10} total={15} onChange={this.onPagination.bind(this)} />
            </div>
        );
    }
}