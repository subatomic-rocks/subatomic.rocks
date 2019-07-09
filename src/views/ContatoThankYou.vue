<template>
  <website-page :background="background" :dark-scheme="false" background-position="center top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xl-8 offset-xl-2">
          <div class="grid-row grid-align-mid grid-mt-h mb-5 mb-xl-0">
            <h1>
              Aqui começa uma<br class="d-block d-xl-none" />
              história de sucesso.
            </h1>
          </div>
          <div class="grid-row grid-align-top mb-5 mb-xl-0">
            <h2>
              Nós recebemos a sua mensagem! :)<br>
              Entraremos em contato o mais breve possível.<br>
              Enquanto isso, acompanhe nossas redes sociais:
            </h2>
          </div>
        </div>
      </div>
    </div>
  </website-page>
</template>

<script>
import axios from 'axios'

export default {
  name: 'contato',
  data () {
    return {
      background: require('../assets/thank-you-bg.jpg')
    }
  }
}
</script>
