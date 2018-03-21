##### 一个简单的vue-tree组件，持续优化中...
#### 事件
- @checkChange 节点状态发生改变时回调，返回当前节点data
- @checkedData 获取所有选中状态节点data

#### 属性
- data 展示数据
- defaultProps 配置项，详细请往下看

##### defaultProps
- label 指定节点标签为某个属性值

#### example
```
<template>
    <div>
        <tree :data="treeDatas"
              :defaultProps="defaultProps"
              @checkChange="checkChange"
              @checkedData="checkedData"></tree>
    </div>
</template>

<script>
    import tree from '../components/tree.vue'
    export default {
        name: 'test',
        data () {
            return {
                defaultProps: {
                    label: 'name',
                },
                treeDatas: [
                    {
                        id: 0,
                        name: '一级 1',
                        children: [
                            {
                                id: 1,
                                name: '二级 1-1',
                                checked: false,
                                children: [
                                    {
                                        id: 2,
                                        name: '三级 1-1-1',
                                    },
                                    {
                                        id: 3,
                                        name: '三级 1-1-2',
                                    }
                                ]
                            },
                            {
                                id: 4,
                                name: '二级 1-2',
                                children: [
                                    {
                                        id: 5,
                                        name: '二级 1-2-1',
                                        checked: true,
                                    }
                                ]
                            }
                        ]
                    },
                    {
                        id: 6,
                        name: '一级 2',
                        children: []
                    }
                ]
            }
        },
        components: {tree},
        mounted () {
        },
        methods: {
            checkChange (val) {
//                console.log(val)
            },
            checkedData (row) {
                console.log(row)
            }
        }
    }
</script>
```