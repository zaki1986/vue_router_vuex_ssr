import Vue from 'vue'

new Vue({
  el: '#root',
  data: {
    firstName: 'Tom',
    lastName: 'Jerry',
    number: 0,
    fullName: '',
    obj: {
      age: 20
    }
  },
  computed: { // 尽量不要在computed里修改值,可以生成新值
    name: {
      get () {
        console.log('uadate computed')
        return `${this.firstName} ${this.lastName}`
      },
      set (name) {
        const names = name.split(' ')
        this.firstName = names[0]
        this.lastName = names[1]
      }
    }
  },
  watch: { // 尽量不要在watch里修改值,可以生成新值
    // firstName (newName, oldName) {
    //   this.fullName = newName + ' ' + this.lastName
    // },
    // lastName (newName, oldName) {
    //   this.fullName = this.firstName + ' ' + newName
    // }
    firstName: {
      handler (newName, oldName) {
        this.fullName = newName + ' ' + this.lastName
      },
      immediate: true // 加载后就会先执行一次
    },
    lastName: {
      handler (newName, oldName) {
        this.fullName = this.firstName + ' ' + newName
      },
      immediate: true // 加载后就会先执行一次
    },
    // obj: {
    //   handler () {
    //     alert('年龄已更新！')
    //   },
    //   deep: true
    // }
    'obj.age': {
      handler () {
        alert('年龄已更新！')
      }
    } // 直接监听内部
  },
  methods: {
    changeName () {
      console.log('uadate methods')
      return `${this.firstName} ${this.lastName}`
    }
  },
  template: `
    <div>
      <p>Name: {{firstName}} {{lastName}}</p>
      <p>computed-Name: {{this.name}}</p>
      <p>methods-Name: {{changeName()}}</p>
      <p>fullName: {{fullName}}</p>
      <p>number: {{number}}</p>
      <p>obj: {{obj.age}}</p>
      <p><input type="text" v-model="number"></p>
      <p>firstName： <input type="text" v-model="firstName"></p>
      <p>lastName <input type="text" v-model="lastName"></p>
      <p>Name <input type="text" v-model="name"></p>
      <p>obj <input type="text" v-model="obj.age"></p>
    </div>
  `
})
