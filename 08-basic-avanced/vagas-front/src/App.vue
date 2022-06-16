<template>        
  <TopoCompoent />
  <ConteudoComponent/>    
</template>

<script>
//import HelloWorld from './components/HelloWorld.vue'
import ConteudoComponent from '@/components/layouts/ConteudoComponent.vue'
import TopoCompoent from '@/components/layouts/TopoCompoent.vue'


export default {
  name: 'App',
  components: {
  //  HelloWorld,
    ConteudoComponent,
    TopoCompoent
  }
}
</script>

<style>

</style>
