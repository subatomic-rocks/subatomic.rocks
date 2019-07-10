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
          <div class="row grid-row grid-size-0 grid-mt-h">
            <div class="col-12">
              <div class="d-flex justify-content-center social-links">
                <div>
                  <a href="https://www.facebook.com/subatomic.rocks/" target="_blank">
                    <i class="fab fa-facebook-square"></i>
                  </a>
                </div>
                <div>
                  <a href="https://www.instagram.com/subatomic.rocks/" target="_blank">
                    <i class="fab fa-instagram"></i>
                  </a>
                </div>
                <div>
                  <a href="https://www.linkedin.com/company/12628757/" target="_blank">
                    <i class="fab fa-linkedin"></i>
                  </a>
                </div>
              </div>
            </div>
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
