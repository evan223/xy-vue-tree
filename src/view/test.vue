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
                            },
                        ]
                    },
                    {
                        id: 6,
                        name: '一级 2',
                        children: [
//                            {
//                                id: 7,
//                                name: '一级2-1',
//                            }
                        ]
                    },
                    {
                        id: 10,
                        name: '一级 3',
                        children: [
                            {
                                id: 11,
                                name: '二级 3-1',
                                children: [
                                    {
                                        id: 12,
                                        name: '三级 3-1-1',
                                    },
                                    {
                                        id: 13,
                                        name: '三级 3-1-2',
                                    }
                                ]
                            },
                            {
                                id: 14,
                                name: '二级 3-2',
                                children: [
                                    {
                                        id: 15,
                                        name: '二级 13-2-1',
                                        checked: false,
                                    }
                                ]
                            },
                        ]
                    },
                    {
                        id: 16,
                        name: '一级 4',
                        checked: false,
                        children: [
                            {
                                id: 17,
                                name: '一级4-1',
                            },
                            {
                                id: 18,
                                name: '一级4-2',
                            }
                        ]
                    },
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