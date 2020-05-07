<template>
  <footer class="main-footer">
    <span>Written by {{ this.author }}</span>
  </footer>
</template>

<script>
export default {
  data () {
    return {
      author: 'Zaki'
    }
  }
}
</script>

<style lang="stylus" scoped>
.main-footer {
  margin-top: 40px;
  text-align: center;
  color: #fff;
  font-size: 16px;
  text-shadow: 0 1px 0 #000000;
}
</style>
