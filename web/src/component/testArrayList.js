/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import ArrayList from './../../public/arrayList';


class Includes extends Component{
    constructor(props) {
        super(props);
        this.state = {
            list:[
                {name:'name1',value:'20'},
                {name:'name2',value:'30'},
                {name:'name3',value:'40'}
            ]
        };
    }
    componentDidMount(){
        console.log('----includes start----');
        const array1 = new ArrayList(['a','b','c',1,2,3]);
        const array2 = new ArrayList(this.state.list);
        const a = array1.includes(1);
        const b = array1.includes(4);
        const c = array2.includes({name:'name1',value:'20'});
        const d = array2.includes({name:'name1',value:'没有'});
        console.log('includes:'+a);
        console.log('includes:'+b);
        console.log('includes:'+c);
        console.log('includes:'+d);
        console.log('----includes end----');
    }
    render(){
        return (
            <div>
                <h5>includes()</h5>
            </div>
        );
    }
}
class GetIndex extends Component{
    constructor(props) {
        super(props);
    }
    componentDidMount(){
        console.log('----get index start----');
        const arr1 = new ArrayList([1,2,3,'d','e','f']);
        const arr2 = new ArrayList([{id:1,name:'name1'},{id:2,name:'name2'}]);
        const exzample1 = arr1.getIndex('d');
        const exzample2 = arr1.getIndex('d');
        console.log(exzample1);//3
        console.log(exzample2);//true
        console.log('----get index end----');
    }
    render(){
        return (
            <div>
                <h5>getIndex()</h5>
            </div>
        );
    }
}


export default class ArrayListTest extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {

    }

    render() {
        return (
            <div>
                <h5>数组的一些方法</h5>
                <Includes />
                <GetIndex />
            </div>
        );
    }
}