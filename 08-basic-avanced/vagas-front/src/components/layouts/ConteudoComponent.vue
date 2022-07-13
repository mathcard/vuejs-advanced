<template>
   <div>
    <h1>{{titulo}}</h1>
    <button @click="atualizarComponente()">Atualizar</button>
    <button @click="conteudo = 'home-page'">Home</button>
    <button @click="conteudo = 'publicar-vaga'">Publicar Vaga</button>
    <!-- renderizar de modo dinâmico os componentes home e publicar-vaga -->
    <!--<home></home>-->
    <!--<publicar-vaga></publicar-vaga>-->
    <keep-alive>
      <component :is="conteudo" />
    </keep-alive>
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
    titulo: 'Component Conteudo',
    conteudo: 'home'
  }),
   methods: {
    atualizarComponent() {
      this.titulo += '*'
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