<template>
  <main class="website-main">
    <transition
      name="slide"
      mode="in-out">
      <router-view />
    </transition>
  </main>
</template>

<script>
export default {
  data () {
    return {
      changingPage: false
    }
  },
  methods: {
    handlePageChange (to, from, next) {
      if (document.getElementsByClassName('website-page')[0])
        document.getElementsByClassName('website-page')[0].className += ' changing'

      next()
    }
  },
  created () {
    this.$router.beforeEach(this.handlePageChange)
  }
}
</script>


<style lang="scss" scoped>
.website-main {
  position: relative;
  width: 100vw;
  height: 100vh;

  .carousel-view {
    display: flex;
    flex-direction: column;
    align-items: center;
  }
}
</style>
