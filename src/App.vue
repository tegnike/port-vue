<template>
  <div id="app">
    <myheader></myheader>
    <div class="container">
      <router-view/>
    </div>
    <footer/>
  </div>
</template>

<script>
import myheader from './components/myheader'

export default {
  name: 'App',
  components: {
    myheader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav-collapse {
  z-index: 1000;
}
footer {
  margin-top: 100px;
}
h1 {
  font-weight: bold;
  width: 50%;
  margin: auto auto 1.5rem;
  padding-bottom: 15px;
  border-bottom: 1px solid #41b883;
}
a {
  color: #41b883;
}
a:hover {
  text-decoration: none;
  color: green;
}

@media screen and (max-width:400px) {
  html {
    font-size: 0.9rem;
  }
}
</style>
