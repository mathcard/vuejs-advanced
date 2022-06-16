<template>
  <div>
    <HomePage/>
    <PublicarVaga/>
    <p :class="$style['teste1']">{{titulo}}</p>    
    <button @click="atualizarComponent()">Update</button>
  </div>
</template>

<script>
import HomePage from '@/components/views/HomePage.vue'
import PublicarVaga from '@/components/views/PublicarVaga.vue'



export default {
    name: "ConteudoComponent",    
    components: {  
      HomePage,
      PublicarVaga
  },
  data: () => ({
    teste: 'O component foi criado',
    titulo: 'Component Conteudo'
  }),
   methods: {
    atualizarComponent() {
      this.titulo += 'Compoenente Atualizado'
    }
  },
  beforeCreate() {
    console.log('Antes de criar', this.teste)
  },
  created() {
    console.log('Criado', this.teste)
    //Pode acessar os eventos as propriedades reativas
  },
  beforeMount() {
    console.log('Antes de montar')
    // Antes de compilar o template e joga-lo no dom. Por exemplo: Buscar dados na API antes de montar html
  },
  mounted() {
    console.log('Montado')
    // Template montado na dom
  },
  beforeUpdate() {
    console.log('Antes de atualizar')
  },
  updated() {
    console.log('Atualizado')
  },
  beforeUnmount() {
    console.log('Antes de demonstar/destruir')
  },
  unmounted() {
    console.log('Demonstado/destruído')
  },
 /* errorCaptured() {
    console.log('Erro capturado')
  },
  renderTracked() {
    console.log('Re-renderização rastreada')
  },
  renderTriggered() {
    console.log('Re-renderização acionada')
  },
  activated() {
    console.log('Componente é ativado')
  },
  deactivated() {
    console.log('Componente é desativado')
  }*/
}
</script>

<style module>
  .teste1 {
    background-color: red;
  }
</style>