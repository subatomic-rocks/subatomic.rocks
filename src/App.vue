<template>
  <div id="app">
    <navigation :color="$color" />
    <website-main />
  </div>
</template>

<script>
import events from './events'
import Viewport from './viewport'

export default {
  data () {
    return {
      darkColorScheme: false
    }
  },
  computed: {
    $color () {
      return this.darkColorScheme ? '#ffffff' : '#212239'
    }
  },
  created () {
    events.$on('dark-color-scheme', enabled => { this.darkColorScheme = enabled })

    // Google Tag Manager / Analytics
    const GA_TRACKING_CODE = 'UA-127809460-1'
    let gtm = document.createElement('script')
      gtm.setAttribute('async', true)
      gtm.setAttribute('src', 'https://www.googletagmanager.com/gtag/js?id=UA-127809460-1')
    document.head.appendChild(gtm)

    window.dataLayer = window.dataLayer || []
    function gtag () { window.dataLayer.push(arguments) }
    gtag('js', new Date())
    gtag('config', GA_TRACKING_CODE)

    // GTM after page change
    this.$router.afterEach((to, from) => {
      gtag('config', GA_TRACKING_CODE, { 'page_path': this.$router.currentRoute.path })
    })
    
    // Hooks window resizes to app update
    Viewport.hook(e => { this.$forceUpdate() })
  }
}
</script>

<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap-reboot';
@import '../node_modules/bootstrap/scss/bootstrap-grid';
@import 'scss/styles';
</style>