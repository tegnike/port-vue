import Vue from 'vue'
import BootstrapVue from 'bootstrap-vue'
import Router from 'vue-router'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import home from '@/components/home'
import introduction from '@/components/introduction'
import skills from '@/components/skills'
import careers from '@/components/careers'
import works from '@/components/works'
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
      path: '/skills',
      name: 'skills',
      component: skills
    },
    {
      path: '/careers',
      name: 'careers',
      component: careers
    },
    {
      path: '/works',
      name: 'works',
      component: works
    },
    {
      path: '/contact',
      name: 'contact',
      component: contact
    }
  ]
})
