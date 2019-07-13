<template>
  <nav class="d-flex align-items-center" :style="{ color: $color }">
    <div class="container">
      <div class="row d-flex text-center align-items-center">
        <div class="col-md-3 nav-logo">
          <router-link to="/">
            <logo :fill="$color" />
          </router-link>
        </div>
        <div class="col-md-9 nav-main" :class="{ active: menuActive }">
          <router-link to="/" class="d-block d-md-none">Home</router-link>
          <router-link to="/sobre">O que fazemos</router-link>
          <router-link to="/contato">Fale Conosco</router-link>
          <social-links class="d-flex justify-content-around d-md-none social-links" />
        </div>
        <div class="d-block d-md-none nav-toggle">
          <button @click="toggleMenu">
            <i class="fa fa-bars"></i>
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['color'],
  created () {
    this.$router.beforeEach((to, from, next) => {
      this.menuActive = false
      next()
    })
  },
  data () {
    return {
      menuActive: false
    }
  },
  methods: {
    toggleMenu () {
      this.menuActive = !this.menuActive
    }
  },
  computed: {
    $color () {
      return this.color || '#000'
    }
  }
}
</script>
