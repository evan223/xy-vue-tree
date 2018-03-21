import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)

import test from '../view/test.vue'

export default new VueRouter({
    routes: [
        {path: '/', name: 'xy-tree', component: test, children:[]}
    ]
})
