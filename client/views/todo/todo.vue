
<template>
  <section class="real-app">
    <input
      type="text"
      class="add-input"
      autofocus="autofocus"
      placeholder="接下来做什么"
      @keyup.enter="addTodo"
    >
    <Item
      v-for="todo in todosFilter"
      :key="todo.id"
      :todo="todo"
      @del="delTodo"
    />
    <Tabs
      :todos="todos"
      :filter="filter"
      @toggle="toggleFilter"
      @clearAll="clearAllCompletedTodo"
    />
  </section>
</template>

<script>
import Item from './item.vue'
import Tabs from './tabs.vue'
let id = 0
export default {
  components: {
    Item,
    Tabs
  },
  data () {
    return {
      todos: [],
      filter: 'all'
    }
  },
  computed: {
    todosFilter () {
      if (this.filter === 'completed') {
        return this.todos.filter(item => item.completed === true)
      } else {
        return this.todos
      }
    }
  },
  methods: {
    addTodo (e) {
      if (e.target.value !== '') {
        this.todos.unshift(
          {
            id: id++,
            content: e.target.value.trim(),
            completed: false
          }
        )
        e.target.value = ''
      } else {
        alert('请输入内容！')
      }
    },
    delTodo (id) {
      this.todos.splice(this.todos.findIndex(item => item.id === id), 1)
    },
    toggleFilter (state) {
      this.filter = state
    },
    clearAllCompletedTodo () {
      this.todos = this.todos.filter(item => item.completed === false)
    }
  }
}
</script>

<style lang="stylus" scoped>
.real-app {
  width: 600px;
  margin: 0 auto;
  box-shadow: 0 0 5px #666;
}

.add-input {
  position: relative;
  margin: 0;
  width: 100%;
  font-size: 24px;
  font-family: inherit;
  font-weight: inherit;
  line-height: 1.4em;
  border: none;
  outline: none;
  color: inherit;
  box-sizing: border-box;
  font-smoothing: antialiased;
  padding: 16px 16px 16px 36px;
  border: none;
  box-shadow: inset 0 -2px 1px rgba(0, 0, 0, 0.03);
}
</style>
