import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    text: 'aaa'
  },
  beforeCreate () {
    console.log(this.text, 'beforeCreate')
  },
  created () {
    console.log(this.text, 'created')
  },
  beforeMount () {
    console.log(this.text, 'beforeMount')
  },
  mounted () {
    console.log(this.text, 'mounted')
  },
  beforeUpdate () {
    console.log(this.text, 'beforeUpdate')
  },
  updated () {
    console.log(this.text, 'updated')
  },
  activated () {
    console.log(this.text, 'activated')
  },
  template: '<div>{{text}}</div>'
})
