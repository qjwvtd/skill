/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Pagination from './../../public/pagination';
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
            <Pagination pageNumber={1} pageSize={10} total={20} callback={this.onPagination.bind(this)} />
        );
    }
}