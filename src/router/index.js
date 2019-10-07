import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import Addition from '@/components/Addition'
import Subtraction from '@/components/Subtraction'

Vue.use(Router)

export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/addition',
      name: 'Practise',
      components: {add: Addition}
    },
    {
      path: '/subtraction',
      name: 'Subtraction',
      components: {sub: Subtraction}
    }
  ]
})
