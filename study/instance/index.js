import Vue from 'vue'

const app = new Vue({
  // el: '#root',
  data: {
    text: 0
  },
  template: '<div>{{text}}</div>'
})

app.$mount('#root')

setInterval(() => {
  app.text += 1
}, 1000)

// console.log(app.$data) // 实例的数据
// console.log(app.$el) // 实例的挂载目标
// console.log(app.$props) // 实例的传递数据
// console.log(app.$options) // 实例的设定项

// app.$options.render = (h) => {
//   return h('div', {}, 'new render function')
// } // 修改实例的内容

// console.log(app.$root === app) // 实例所有相关内容
// console.log(app.$children) // 实例的子组件
// console.log(app.$slots) // 实例的插槽
// console.log(app.$scopedSlots) // 实例的独有插槽
// console.log(app.$refs) // 定位指定项
// console.log(app.$isServer) // 判断是不是服务端
