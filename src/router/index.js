import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import home from '@/components/home'
import introduction from '@/components/introduction'
import languages from '@/components/languages'
import careers from '@/components/careers'
import portfolios from '@/components/portfolios'
import contact from '@/components/contact'

Vue.use(Router)
Vue.use(BootstrapVue)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/introduction',
      name: 'introduction',
      component: introduction
    },
    {
      path: '/languages',
      name: 'languages',
      component: languages
    },
    {
      path: '/careers',
      name: 'careers',
      component: careers
    },
    {
      path: '/portfolios',
      name: 'portfolios',
      component: portfolios
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
