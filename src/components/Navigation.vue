<template>
  <nav class="d-flex align-items-center" :style="{ color: $color }">
    <div class="container">
      <div class="row d-block d-md-flex text-center align-items-center">
        <div class="col-md-3 nav-logo">
          <router-link to="/">
            <logo :fill="$color" />
          </router-link>
        </div>
        <div class="col-md-9 nav-main">
          <router-link to="/sobre">O que fazemos</router-link>
          <router-link to="/contato">Fale Conosco</router-link>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  props: ['color'],
  computed: {
    $color () {
      return this.color || '#000'
    }
  }
}
</script>
