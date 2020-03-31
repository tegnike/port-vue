<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
      <div class="container">
        <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
          <ul class="navbar-nav">
            <li class="nav-item">
              <router-link class="nav-link px-4 px-3 router-link-active" to="/">Home</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4 px-3" to="/introduction">Introduction</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4 px-3" to="/languages">Languages</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4 px-3" to="/careers">Business Careers</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4 px-3" to="/portfolios">Portfolios</router-link>
            </li>
            <li class="nav-item">
              <router-link class="nav-link px-4 px-3" to="/contact">Contact</router-link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
</template>

<style scoped>
nav {
  height: 56px;
  margin-bottom: 50px;
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
