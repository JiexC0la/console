// import Vue from 'vue'

// const component = {
//     template: `
//         <div>
//             <input type="text" v-model="text" />
//             <span v-show="active">see me active</span>
//             <span>{{propOne}}</span>
//         </div>
//     `,
//     data () {
//         return {
//             text: 0
//         }
//     },
//     props: {
//         active: Boolean,
//         propOne: String
//     }
// }

// // 声明一个组件
// // Vue.component('comp', component)

// const myApp = new Vue({
//     data: {
//         txt: 1,
//         html: '<span>123</span>',
//         id: 'main',
//         class: '',
//         isActive: true,
//         firstName: 'jiex',
//         lastName: 'cola',
//         number: 0,
//         fullName: '',
//         obj: {
//             a: 1,
//             b: 2,
//             c: 3
//         },
//         arr: [1, 2, 3]
//     },
//     template: `
//         <div
//             :id="id"
//             :class="{active: isActive}"
//         >
//             <comp-one :active="true" :prop-one="'text1'"></comp-one>
//             <comp-one :active="false" prop-one="text2"></comp-one>
//             <hr />
//             {{txt}}
//             <p v-text="name">1{{name}}</p>
//             <p>{{getName()}}</p>
//             <p v-html="html"></p>
//             <p>{{fullName}}</p>
//             <p>{{number}}</p>
//             <p>
//                 <input
//                     type="text"
//                     v-model="number"
//                 />
//             </p>
//             <p>
//                 FirstName:
//                 <input
//                     type="text"
//                     v-model="firstName"
//                 />
//             </p>
//             <p>
//                 LastName:
//                 <input
//                     type="text"
//                     v-model="lastName"
//                 />
//             </p>
//             <p>
//                 obj.a：
//                 <input
//                     type="text"
//                     v-model="obj.a"
//                 />
//             </p>
//             <ul>
//                 <li v-for="(item, index) in arr">{{item + ' : ' + index}}</li>
//             </ul>
//             <hr />
//             <ol>
//                 <li v-for="(value, key, index) in obj">{{key + ' : ' + value + ' : ' + index}}</li>
//             </ol>
//         </div>
//     `,
//     beforeCreate() {
//         console.log(this, 'beforeCreate') // eslint-disable-line
//     },
//     created() {
//         console.log(this, 'created') // eslint-disable-line
//     },
//     // 以下方法服务端渲染不会调用
//     beforeMount() {
//         console.log(this, 'beforeMount') // eslint-disable-line
//     },
//     mounted() {
//         console.log(this, 'mounted') // eslint-disable-line
//     },
//     beforeUpdate() {
//         console.log(this, 'beforeUpdate') // eslint-disable-line
//     },
//     updated() {
//         console.log(this, 'updated') // eslint-disable-line
//     },
//     beforeDestroy() {
//         console.log(this, 'beforeDestroy') // eslint-disable-line
//     },
//     destroyed() {
//         console.log(this, 'destroyed') // eslint-disable-line
//     },
//     // render (h) {
//     //     console.log('render')
//     //     return h('div', {}, this.txt)
//     // },
//     // renderError (h, err) {
//     //     return h('div', {}, err.stack)
//     // }
//     methods: {
//         handleClick() {
//             alert('clicked')
//         },
//         getName() {
//             console.log('getname') // eslint-disable-line
//             return `${this.firstName} ${this.lastName}`
//         }
//     },
//     computed: {
//         name() {
//             console.log('name') // eslint-disable-line
//             return `${this.firstName} ${this.lastName}`
//         }
//     },
//     watch: {
//         // firstName (newName) {
//         //     this.fullName = newName + ' ' + this.lastName
//         // }
//         firstName: {
//             handler (newName) {
//                 this.fullName = newName + ' ' + this.lastName
//             },
//             // 监听立即执行
//             immediate: true
//         },
//         'obj.a': {
//             handler () {
//                 console.log('obj.a changed') // eslint-disable-line
//             },
//             // deep: true
//         }
//     },
//     components: {
//         CompOne: component
//     }
// })

// myApp.$mount('#root')

// setTimeout(() => {
//     myApp.txt += 1
//     // myApp.$destroy()
// }, 3000)

// import './extend'

import './feature'