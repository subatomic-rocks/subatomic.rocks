<template>
  <website-page :background="background" :dark-scheme="true" :background-opacity="0.3">
    <div class="container">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="grid-row grid-align-mid grid-mt-h">
            <h1>Sua ideia. Nosso código.</h1>
          </div>
          <div class="grid-row grid-align-top">
            <h2>Desenvolvemos seu projeto com uma stack de tecnologia totalmente personalizada para atender suas necessidades.</h2>
          </div>
        </div>
      </div>
    </div>
  </website-page>
</template>

<script>
export default {
  name: 'sobre',
  data () {
    return {
      background: require('../assets/sobre-bg.jpg')
    }
  }
}
</script>
