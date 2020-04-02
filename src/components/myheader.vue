<template>
  <div>
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>

      <b-collapse id="nav-collapse" is-nav class="justify-content-center">
        <b-navbar-nav>
          <router-link class="nav-link px-4 px-3 router-link-active" to="/">Home</router-link>
          <router-link class="nav-link px-4 px-3" to="/introduction">Introduction</router-link>
          <router-link class="nav-link px-4 px-3" to="/skills">Technical Skills</router-link>
          <router-link class="nav-link px-4 px-3" to="/careers">Business Careers</router-link>
          <router-link class="nav-link px-4 px-3" to="/works">Works</router-link>
          <router-link class="nav-link px-4 px-3" to="/contact">Contact</router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style scoped>
nav {
  height: 56px;
  margin-bottom: 50px;
}
#nav-collapse {
  background-color: #343a40 !important;
}
.nav-link {
  height: 56px;
  padding: 15px;
  font-weight: bold;
  -webkit-transition: all 0.5s ease;
  -moz-transition: all 0.5s ease;
  -o-transition: all 0.5s ease;
  transition: all  0.5s ease;
}
.nav-link:hover {
  background-color: rgba(65,184,131,.5);
}
</style>
