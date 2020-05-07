<template>
  <div id="app">
    <div id="cover">
      <Header />
      <Todo />
      <Footer />
    </div>
  </div>
</template>

<script>
import Header from './layout/header.vue'
import Todo from './views/todo/todo.vue'
import Footer from './layout/footer.vue'
export default {
  components: {
    Header,
    Todo,
    Footer
  }
}
</script>

<style lang="stylus" scoped>
#app {
  position: absolute;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;

  #cover {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: #000;
    opacity: 0.6;
  }
}
</style>
