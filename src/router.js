import Vue from 'vue'
import Router from 'vue-router'

import Home from './views/Home.vue'
import Sobre from './views/Sobre.vue'
import Contato from './views/Contato.vue'
import ContatoThankYou from './views/ContatoThankYou.vue'

Vue.use(Router)

const SITE_URL = 'https://subatomic.rocks'

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      meta: {
        title: 'Revolucione sua experiência digital com a Subatomic.',
        metaTags: [
          { name: 'description', content: 'Desenvolvendo o futuro. Pixel por pixel. Somos uma empresa 100% digital, focada em entregar as melhores experiências web aos nossos clientes e seus usuários. Conheça a empresa e descubra uma revolução na sua experiência e presença digital.' },
          { name: 'canonical', content: `${SITE_URL}/` },
          { name: 'theme-color', content: '#212239' }
        ]
      }
    }, {
      path: '/sobre',
      name: 'sobre',
      component: Sobre,
      meta: {
        title: 'Conheça a Subatomic e transforme sua presença digital.',
        metaTags: [
          { name: 'description', content: 'Desenvolvimento Web Responsivo, Otimização de Websites, Desenvolvimento de Aplicações. Estes são apenas alguns exemplos do que fazemos. Conheça mais sobre nossos serviços!' },
          { name: 'canonical', content: `${SITE_URL}/sobre` },
          { name: 'theme-color', content: '#212239' }
        ]
      }
    },
    {
      path: '/contato',
      name: 'contato',
      component: Contato,
      meta: {
        title: 'Traga seu projeto. Nós o tornaremos realidade.',
        metaTags: [
          { name: 'description', content: 'Se interessou em nosso trabalho? Entre em contato e apresente seu projeto! Vamos revolucionar o seu mundo!' },
          { name: 'canonical', content: `${SITE_URL}/contato` },
          { name: 'theme-color', content: '#f0b705' }
        ]
      }
    },
    {
      path: '/contato/thank-you',
      name: 'thank-you',
      component: ContatoThankYou,
      meta: {
        title: 'Aqui se inicia uma história de sucesso.',
        metaTags: [
          { name: 'robots', content: 'noindex' },
          { name: 'theme-color', content: '#f0f0f0' }
        ]
      }
    },
  ]
})

// This callback runs before every route change, including on page load.
// Ref source: https://alligator.io/vuejs/vue-router-modify-head/
router.afterEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // eg. if we have /some/deep/nested/route and /some, /deep, and /nested have titles, nested's will be chosen.
  const nearestWithTitle = to.matched.slice().reverse().find(r => r.meta && r.meta.title)

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)
  const previousNearestWithMeta = from.matched.slice().reverse().find(r => r.meta && r.meta.metaTags)

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle)
    document.title = nearestWithTitle.meta.title

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll('[data-vue-router-controlled]')).map(el => el.parentNode.removeChild(el))

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta)
    return next()

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags.map(tagDef => {
      const tag = document.createElement('meta')

      Object.keys(tagDef).forEach(key => {
        tag.setAttribute(key, tagDef[key])
      })

      // We use this to track which meta tags we create, so we don't interfere with other ones.
      tag.setAttribute('data-vue-router-controlled', '')

      return tag
    })
    // Add the meta tags to the document head.
    .forEach(tag => document.head.appendChild(tag))

  if (next)
    return next()
})

export default router