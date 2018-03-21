<template>
    <div class="xy-tree" @click.stop="openClose"
         ref="tree"
         :data="data"
         :props="defaultProps">
        <div class="tree-parent-node" v-for="item in data" :key="item.id">
            <div class="tree-node parent-node">
                 <span class="node-checkbox">
                    <input type="checkbox"
                           :checked="item.checked"
                           @change="checkChange(item)">
                </span>
                <span>{{item[defaultProps.label]}}</span>
            </div>
            <div class="close">
                <div class="node-item tree-child-node" v-for="c in item.children" :key="c.id">
                    <div class="tree-node child-node">
                        <span class="node-checkbox">
                            <input type="checkbox"
                                   :checked="item.checked ? true : c.checked"
                                   @change="checkChange(c)">
                        </span>
                        <span>{{c[defaultProps.label]}}</span>
                    </div>
                    <div class="close">
                        <div class="tree-node node-item"
                             v-for="p in c.children" :key="p.id">
                            <span class="node-checkbox">
                                <input type="checkbox"
                                       :checked="c.checked ? true : p.checked"
                                       @change="checkChange(p)">
                            </span>
                            <span>{{p[defaultProps.label]}}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
//    import checkedIcon from './components/icons/checked-icon.vue'
//    import plusIcon from './components/icons/plus-icon.vue'
//    import triIcon from './components/icons/tri-icon.vue'
    export default {
        name: 'xy-tree',
        props: ['data', 'defaultProps'],
        data () {
            return {
                selection: []
            }
        },
        mounted () {
            this.renderTree()
            this.checkedData()
        },
        components: {
//            checkedIcon,
//            plusIcon,
//            triIcon
        },
        watch: {
//            treeDatas () {
//                console.log(this.treeDatas)
//
//            },
//            defaultProps () {
//                console.log(this.defaultProps)
//            }
        },
        methods: {
            // checked发生改变时触发
            checkChange (val) {
                let e = window.event.target;
                val.checked = e.checked ? true : false;
                let children = []
                if (val.children) {
                    val.children.forEach(c => {
                        if (c.children) {
                            c.children.forEach(item => {
                                children.push(item)
                            })
                        } else {
                            children.push(c)
                        }
                    })
                }
                children.forEach(item => item.checked = e.checked ? true : false)
                this.checkedData()
//                this.$emit('checkChange', val);
            },
            // 获取所有checked数据
            checkedData () {
                this.selection = [];
                this.data.forEach(td => {
                    if (td.children.length > 0) {
                        td.children.forEach(tdc1 => {
                            if (tdc1.children) {
                                tdc1.children.forEach(item => {
                                    if (item.checked) {
                                        this.selection.push(item)
                                    }
                                })
                            } else {
                                if (tdc1.checked) {
                                    this.selection.push(tdc1)
                                }
                            }
                        })
                    } else {
                        if (td.checked) this.selection.push(td)
                    }
                })
                this.$emit('checkedData', this.selection);
            },
            getSiblings (node) {
                let arr = [];
                for ( ; node; node = node.nextElementSibling ) {
                    if (node.classList.contains('close')) {
                        arr.push(node);
                    }
                }
                return arr
            },
            // 获取节点指定类名的父元素
            getParents (node,cl) {
                for ( ; node; node = node.parentElement ) {
                    if (node.classList.contains(cl)) {
                        return {
                            node: node,
                            inputs: node.getElementsByTagName('input')
                        }
                    }
                }
            },
            // 展开或关闭
            openClose (e) {
                let eventName = e.target.parentElement,
                    hadCls = eventName.classList;

                let cls = [];

                for (let i = 0; i < hadCls.length; i ++) {
                    cls.push(hadCls[i])
                }

                let isCls = cls.includes('tree-parent-node') || cls.includes('tree-child-node');
                if (isCls) {
                    eventName.children[1].classList.toggle('tree-close')
                }
            },
            // 选择或取消选择
            renderTree () {
                let tree = document.querySelector('.xy-tree');
                tree.addEventListener('click', (e) => {
                    let ev       = e.target,
                        inputs = this.getParents(ev,'tree-parent-node').inputs;
                    if (ev.tagName === 'INPUT') {
                        let isParent = this.getParents(ev,'parent-node');
                        if (isParent) {
                            for (let i = 0; i < inputs.length; i ++) {
                                inputs[i].checked = ev.checked ? true : false;
                            }
                        } else {
                            let isItem = this.getParents(ev,'child-node'),
                                pnInputs = this.getParents(ev,'tree-parent-node').inputs,
                                inputs = this.getParents(ev,'tree-child-node').inputs;

                            if (isItem) {
                                if (inputs.length) {
                                    for (let i = 1; i < inputs.length; i ++) {
                                        inputs[i].checked = ev.checked ? true : false;
                                    }
                                }
                            } else {
                                let checkeds = [];
                                for (let i = 1; i < inputs.length; i ++) {
                                    checkeds.push(inputs[i].checked)
                                }
                                inputs[0].checked = checkeds.includes(false) ? false : true;
                            }
                            let checkedVal = [];
                            for (let i = 1; i < pnInputs.length; i ++) {
                                checkedVal.push(pnInputs[i].checked)
                            }
                            pnInputs[0].checked = checkedVal.includes(false) ? false : true;
                        }
                    }
                }, true)
            },
        }
    }
</script>

<style scoped lang="scss">
    .xy-tree{
        .tree-node:hover {
            cursor: pointer;
            background-color: aliceblue;
        }
        .tree-node {
            position: relative;
            .node-checkbox {
                display: inline-block;
                width: 14px;
                height: 14px;
                line-height: 14px;
                /*border: 1px solid #ccc;*/
                margin-right: 3px;
            }
            .checked-icons {
                position: absolute;
                left: 0;
                top: 0;
            }
            .tri-icons {
                position: absolute;
                left: 10px;
                top: 0;
                z-index: 10;
            }
            .node-checkbox input {
                /*opacity: 0;*/
            }
            .node-checkbox input:hover {
                cursor: pointer;
            }
        }
        .tree-child-node,.node-item {
            padding-left: 20px;
            margin-top: 5px;
        }
    }
</style>