<template>
  <div class="website-page" :style="{ color: $color, backgroundColor: backgroundColor }">
    <div class="website-page-inner">
      <div class="website-page-background" :style="$styles"></div>
      <slot />
    </div>
  </div>
</template>

<script>
import events from '../events';

export default {
  props: {
    background: { type: String },
    backgroundMode: { type: String },
    backgroundPosition: { type: String },
    backgroundOpacity: { type: Number, default: 1 },
    backgroundOffset: { type: String, default: '0px' },
    backgroundColor: { type: String, default: '#000' },
    darkScheme: { type: Boolean },
  },
  computed: {
    $color () {
      return this.darkScheme ? '#ffffff' : '#212239'
    },
    $styles () {
      let styles = {}

      if (this.background) {
        styles.backgroundImage = `url(${this.background})`

        if (this.backgroundOffset) styles.top = this.backgroundOffset
        if (this.backgroundMode) styles.backgroundSize = this.backgroundMode
        if (this.backgroundPosition) styles.backgroundPosition = this.backgroundPosition
        if (this.backgroundOpacity) styles.opacity = this.backgroundOpacity
      }

      return styles
    }
  },
  mounted () {
    events.$emit('dark-color-scheme', this.darkScheme)
  }
}
</script>