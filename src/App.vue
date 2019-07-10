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