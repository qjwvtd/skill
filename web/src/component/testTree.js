/**
 * 此处是注释
 **/
import React,{Component} from 'react';
import Tree from './../../public/tree';
export default class TreeTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: [
                {
                    id:1,
                    text: 'one-1',
                    children: [{
                        id:11,
                        text: 'two-1-1',
                        children: [{
                            id:111,
                            text: 'three-1-1-1'
                        }]
                    }]
                },
                {
                    id:2,
                    text: 'one-2',
                    children: [
                        {
                            id:21,
                            text: 'two-2-1',
                            children: [{
                                id:211,
                                text: 'three-2-1-1'
                            }]
                        },
                        {
                            id:22,
                            text: 'two-2-2',
                            children: [{
                                id:221,
                                text: 'three-2-2-1'
                            }]
                        }
                    ]
                },
                {
                    id:3,
                    text: 'one-3',
                    children: [
                        {
                            id:31,
                            text: 'two-3-1',
                            children: [{
                                id:311,
                                text: 'three-3-1-1'
                            }]
                        },
                        {
                            id:32,
                            text: 'two-3-2',
                            children: [{
                                id:321,
                                text: 'three-3-2-1'
                            }]
                        }
                    ]
                }
            ]
        };
    }

    showTreeData(o) {
        console.log(JSON.stringify(o));
    }

    render() {
        return (
            <div>
                <h5>Tree型控件</h5>
                <Tree data={this.state.data} index="id" label="text" onchange={this.showTreeData.bind(this)} />
            </div>
        );
    }
}