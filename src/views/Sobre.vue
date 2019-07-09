<template>
  <website-page :background="background" :dark-scheme="true" :background-opacity="0.3">
    <div class="container pb-5 pb-sm-0">
      <div class="row">
        <div class="col-md-8 offset-md-2">
          <div class="grid-row grid-align-mid grid-mt-h mb-5 mb-xl-0">
            <h1>
              Sua ideia.<br class="d-block d-xl-none" />
              Nosso código.
            </h1>
          </div>
          <div class="grid-row grid-align-top">
            <h2>Desenvolvemos seu projeto com uma stack de tecnologia totalmente personalizada para atender suas necessidades.</h2>
          </div>
        </div>
      </div>
      <div class="row grid-row grid-size-0 grid-mt-h">
        <!-- Serviço -->
        <div class="col-md-4 servico">
          <div class="grid-row grid-align-mid grid-size-2 servico-img">
            <img src="../assets/icon-responsivo.svg" alt="Desenvolvimento Web Responsivo" />
          </div>
          <div class="grid-row grid-align-mid">
            <h3>Desenvolvimento Web Responsivo</h3>
          </div>
          <div class="grid-row grid-align-top">
            <div>
              <p>Desenvolvemos o seu projeto web de forma que ele seja exibido em qualquer tela ou dispositivo, da melhor forma possível.</p>
              <p>Também desenvolvemos sites integrados à lojas virtuais, permitindo que você venda de dentro do seu próprio site.</p>
            </div>
          </div>
        </div>
        
        <!-- Serviço -->
        <div class="col-md-4 servico">
          <div class="grid-row grid-align-mid grid-size-2 servico-img">
            <img src="../assets/icon-otimizacao.svg" alt="Desenvolvimento Web Responsivo" />
          </div>
          <div class="grid-row grid-align-mid">
            <h3>Otimização de Websites</h3>
          </div>
          <div class="grid-row grid-align-top">
            <div>
              <p>Analisamos e buscamos formas de otimizar seu site já existente, com objetivo de melhorar seu posicionamento nos sites de busca e fazê-lo carregar mais rápido, consumindo menos recursos dos usuários.</p>
            </div>
          </div>
        </div>
        
        <!-- Serviço -->
        <div class="col-md-4 servico">
          <div class="grid-row grid-align-mid grid-size-2 servico-img">
            <img src="../assets/icon-desenvolvimento.svg" alt="Desenvolvimento Web Responsivo" />
          </div>
          <div class="grid-row grid-align-mid">
            <h3>Desenvolvimento de Aplicações</h3>
          </div>
          <div class="grid-row grid-align-top">
            <div>
              <p>Desenvolvemos aplicações web sob medida, personalizadas para atingir os seus objetivos e melhor servir os seus clientes.</p>
            </div>
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

<style lang="scss" scoped>
.servico {
  text-align: center;

  p {
    margin-bottom: 2em;
  }

  .servico-img {
    img {
      width: 100%;
      height: 120px;

      object-fit: contain;
      object-position: center;
    }
  }
}
</style>
