import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Sobre from './views/Sobre.vue'
import Contato from './views/Contato.vue'
import ContatoThankYou from './views/ContatoThankYou.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    }, {
      path: '/sobre',
      name: 'sobre',
      component: Sobre
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato
    },
    {
      path: '/contato/thank-you',
      name: 'thank-you',
      component: ContatoThankYou
    },
  ]
})
