<template>
  <div id="app">
    <navigation :color="$color" />
    <website-main :style="{ color: $color }">
      <router-view/>
    </website-main>
  </div>
</template>

<script>
import events from './events'

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
  mounted () {
    events.$on('dark-color-scheme', enabled => { this.darkColorScheme = enabled })
  }
}
</script>


<style lang="scss">
@import '../node_modules/bootstrap/scss/bootstrap-reboot';
@import '../node_modules/bootstrap/scss/bootstrap-grid';
@import 'scss/styles';
</style>