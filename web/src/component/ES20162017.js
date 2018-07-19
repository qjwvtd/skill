/*
 * 2018/7/18
 * administractor
 */
import React,{Component} from 'react';

//includes
export class ArrayIncludes extends Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div>
                <h5>Array.includes</h5>
                <img src="./../../img/1.jpg" />
                <hr/>
            </div>
        );
    }
}
//Object.keys/values/entries
export class ObjectKeyValue extends Component{
    constructor(props){
        super(props);
        this.state = {
            keys:null,
            values:null,
            entries:null
        };
    }
    componentWillMount(){
        const company = {'name':'阿里巴巴','CEO':'马云','city':'杭州'};
        this.setState({
            keys:Object.keys(company),
            values:Object.values(company),
            entries:Object.entries(company)
        });
    }
    render(){
        return (
            <div>
                <h5>Object.keys/values</h5>
                <p>{this.state.keys+"+"+this.state.keys.length}</p>
                <p>{this.state.values+"+"+this.state.values.length}</p>
                <p>{this.state.entries+"+"+this.state.entries.length}</p>
                <hr/>
            </div>
        );
    }
}
//Math.max
export class MathArrayMax extends Component{
    constructor(props){
        super(props);
        this.state = {
            nums:[14,12,32,65,23,45,85,10],
            max:null
        };
    }
    componentWillMount(){
        this.setState({
            max:Math.max(...this.state.nums)
        });
    }
    render(){
        return (
            <div>
                <h5>Math.max</h5>
                <p>[14,12,32,65,23,45,85,10]</p>
                <p>{this.state.max}</p>
                <hr/>
            </div>
        );
    }
}
//拼装字符串
export class StringLink extends Component{
    constructor(props){
        super(props);
        this.state = {
            resultStr:''
        };
    }
    componentDidMount(){
        let w1 = '騽慣', w2 = '耭憶', w3 = '暧情';
        this.setState({
            resultStr:`我想偶可苡${w1}一個人生活，在${w2}裏檫佉ㄚòひ的承諾，${w3}寔個夢邇珴睡過頭`
        });
    }
    render(){
        return (
            <div>
                <h5>拼装字符串</h5>
                <pre>let w1 = '騽慣', w2 = '耭憶', w3 = '暧情';</pre>
                <p>{this.state.resultStr}</p>
                <hr/>
            </div>
        );
    }
}
//Object.assign
export class ObjectAssign extends Component{
    constructor(props){
        super(props);
        this.state = {
            result:null
        };
    }
    componentDidMount(){
        const company = {'name':'TX','ceo':'马云','city':'hangzhou'};
        const company2 = {'name':'TX','ceo':'马化腾','city':'shenzhen'};
        const companys = Object.assign(company,company2);
        this.setState({
            result:companys
        });
    }
    render(){
        return (
            <div>
                <h5>Object.assign</h5>
                <p>{JSON.stringify(this.state.result)}</p>
                <hr/>
            </div>
        );
    }
}
//ES6MAP
export class Es6Map extends Component{
    constructor(props){
        super(props);
        this.state = {
            result:''
        };
    }
    es6testEvent(){
        let myMap = new Map();
        myMap.set('num',Math.random());
        const num = myMap.get('num');
        this.setState({
            result:num
        });
    }
    render(){
        return (
            <div>
                <h5>ES6 Map</h5>
                <button type="button" onClick={this.es6testEvent.bind(this)}>ES6 Map test</button>
                <p>{this.state.result}</p>
                <hr/>
            </div>
        );
    }
}
//ES6SET
export class Es6Set extends Component{
    constructor(props){
        super(props);
        this.state = {
            result:null
        };
    }
    componentDidMount(){
        const arr = ['hello','welcome','hello','antd','react','vue','react'];
        const mySet = new Set(arr);
        let newArr = [];
        for(let i of mySet){
            newArr.push(i);
        }
        this.setState({
            result:newArr
        });
    }
    render(){
        return (
            <div>
                <h5>利用set去重</h5>
                <p>{this.state.result}</p>
                <hr/>
            </div>
        );
    }
}