<template>
  <div class="home">
    <h1 class="display-4 font-weight-bold">
      Welcome to My Portfolio !!
      <span class="display-5 d-block">
        by <span class="text-success">tegnike</span>
      </span>
    </h1>
    <p>
      はじめまして、tegnikeです。<br>
      このサイトはtegnikeの自己紹介サイトです。
    </p>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 {
  margin-top: 100px;
}
p {
  margin-top: 50px;
}
</style>
