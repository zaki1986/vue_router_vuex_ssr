import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    console.log(this.$el, 'beforeCreate') // undefined "beforeCreate"
  },
  created () {
    console.log(this.$el, 'created') // undefined "created"
  },
  beforeMount () {
    console.log(this.$el, 'beforeMount') // <div id="root"></div> "beforeMount"
  },
  mounted () {
    console.log(this.$el, 'mounted') // <div>aaa</div> "mounted"
  },
  beforeUpdate () {
    console.log(this.$el, 'beforeUpdate')
  },
  updated () {
    console.log(this.$el, 'updated')
  },
  activated () {
    console.log(this.$el, 'activated')
  },
  // template: '<div>{{text}}</div>',
  render (h) { // 如果没有定义template，就会执行render中的DOM内容
    // throw new TypeError('render error')
    console.log('this is render') // 出现在beforeMount和mounted之间
    return h('div', {}, this.text)
  },
  renderError (h, err) {
    return h('div', {}, err.stack)
  },
  errorCaptured () {
    // 会向上冒泡，并且正式环境可以使用
  }
})
