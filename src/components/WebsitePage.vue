<template>
  <div class="website-page" :style="{ backgroundColor: backgroundColor }">
    <div class="website-page-background" :style="$styles"></div>
    <slot />
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
    backgroundOffset: { type: Number, default: 0 },
    backgroundColor: { type: String, default: '#000' },
    darkScheme: { type: Boolean },
  },
  computed: {
    $styles () {
      let styles = {}

      if (this.background) {
        styles.backgroundImage = `url(${this.background})`

        if (this.backgroundOffset) styles.top = this.backgroundOffset
        if (this.backgroundMode) styles.backgroundSize = this.backgroundMode
        if (this.backgroundPosition) styles.backgroundPosition = this.backgroundPosition
        if (this.backgroundOpacity) styles.opacity = this.backgroundOpacity
      }

      console.log(styles)

      return styles
    }
  },
  mounted () {
    setTimeout(() => {
      events.$emit('dark-color-scheme', this.darkScheme)
    }, 1)
  }
}
</script>