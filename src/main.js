// var say = require('./util'); // 这句代码可以用下面这行代替，webpack默认不支持转码es6,但是import export 这两个语法却单独支持
// import say from './util'
import getData from './util'
// say()

// 引入vue
import Vue from 'vue'
import App from './App.vue'
import router from './router'


// 引入scss/css
import './style/style.scss'

// // 播入组件
// Vue.component('my-com',{
//     template: '<img :src="src">',
//     data () {
//         return {
//             src: require('./img/lyf.jpg')
//         }
//     }
// })

// var app = new Vue({
//     el: '#app',
//     data: {
//         message: 'Hello Vue!'
//     },
//     methods: {
//         async fetchData() {
//             const data = await getData();
//             this.message = data
//         }
//     },
//     created () {
//         this.fetchData()
//     }
// })

new Vue({
    router,
    // store,
    render: h => h(App)
}).$mount('#app');


