<template>
  <website-page :background="background" :dark-scheme="false" background-position="center top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xl-8 offset-xl-2">
          <div class="grid-row grid-align-mid grid-mt-h mb-5 mb-xl-0">
            <h1>Não precisa de papel. Somos digitais.</h1>
          </div>
          <div class="grid-row grid-align-top mb-5 mb-xl-0">
            <h2>
              Para entrar em contato conosco basta preencher um formulário.<br class="d-none d-xl-block">
              Simples assim.
            </h2>
          </div>
        </div>
      </div>
    </div>
  </website-page>
</template>

<script>
export default {
  name: 'contato',
  data () {
    return {
      background: require('../assets/contato-bg.jpg')
    }
  }
}
</script>
