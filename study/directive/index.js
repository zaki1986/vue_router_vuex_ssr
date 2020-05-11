import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    text: 0,
    active: false
  },
  template: `
    <div v-text="text">123</div>
  `
})
