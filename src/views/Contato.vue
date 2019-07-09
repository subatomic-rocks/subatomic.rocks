<template>
  <website-page :background="background" :dark-scheme="false" background-position="center top">
    <div class="container">
      <div class="row">
        <div class="col-md-6 offset-md-3 col-xl-8 offset-xl-2">
          <div class="grid-row grid-align-mid grid-mt-h mb-5 mb-xl-0">
            <h1>
              Não precisa de papel.<br class="d-block d-xl-none" />
              Somos digitais.
            </h1>
          </div>
          <div class="grid-row grid-align-top mb-5 mb-xl-0">
            <h2>
              Para entrar em contato conosco basta preencher um formulário.<br class="d-none d-xl-block">
              Simples assim.
            </h2>
          </div>
          <div class="grid-row grid-align-top">
            <form :class="{ processing: isProcessing }" action="/api/contact" method="post" @submit="sendMessage">
              <spinner fill="#212239" :active="isProcessing" />
              <div class="row">
                <div class="col-12">
                  <div class="form-input">
                    <i class="far fa-id-card"></i>
                    <input required type="text" v-model="form.name" name="name" placeholder="Seu Nome" />
                  </div>
                  <div class="form-input">
                    <i class="far fa-envelope"></i>
                    <input required type="email" v-model="form.email" name="email"  placeholder="contato@subatomic.rocks" />
                  </div>
                  <div class="form-input">
                    <i class="fab fa-whatsapp"></i>
                    <input required type="tel" v-model="form.phone" name="phone" placeholder="+55 (19) 98335-9825" />
                  </div>
                  <div class="form-input">
                    <i class="far fa-edit"></i>
                    <textarea required v-model="form.message" name="message" placeholder="Sua Mensagem"></textarea>
                  </div>
                  <button type="submit" class="form-button">
                    Enviar
                  </button>
                </div>
              </div>
            </form>
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
      background: require('../assets/contato-bg.jpg'),
      isProcessing: false,
      form: {},
    }
  },
  methods: {
    sendMessage (e) {
      e.preventDefault()

      this.isProcessing = true
      axios.post('/api/contact', {
        name: this.form.name,
        email: this.form.email,
        phone: this.form.phone,
        message: this.form.message,
      }).then(response => {
        this.$router.go('/contact/thank-you')
      })

      return false
    }
  }
}
</script>

<style lang="scss" scoped>
form {
  position: relative;
  display: block;
  width: 100%;

  &.processing > .row {
    opacity: 0.35;
  }
}
</style>
