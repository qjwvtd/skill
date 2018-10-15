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
                    text: '一级1',
                    children: [{
                        id:11,
                        text: '二级1-1',
                        children: [{
                            id:111,
                            text: '三级1-1-1'
                        }]
                    }]
                },
                {
                    id:2,
                    text: '一级2',
                    children: [
                        {
                            id:21,
                            text: '二级2-1',
                            children: [{
                                id:211,
                                text: '三级2-1-1'
                            }]
                        },
                        {
                            id:22,
                            text: '二级2-2',
                            children: [{
                                id:221,
                                text: '三级2-2-1'
                            }]
                        }
                    ]
                },
                {
                    id:3,
                    text: '一级3',
                    children: [
                        {
                            id:31,
                            text: '二级3-1',
                            children: [{
                                id:311,
                                text: '三级3-1-1'
                            }]
                        },
                        {
                            id:32,
                            text: '二级3-2',
                            children: [{
                                id:321,
                                text: '三级3-2-1'
                            }]
                        }
                    ]
                }
            ]
        };
    }

    componentDidMount() {
    }

    render() {
        return (
            <div>
                <Tree data={this.state.data} index="id" label="text" />
            </div>
        );
    }
}