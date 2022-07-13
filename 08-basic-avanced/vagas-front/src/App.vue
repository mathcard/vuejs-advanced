<template>        
  <TopoCompoent />
  <ConteudoComponent/>
</template>

<script>

import ConteudoComponent from '@/components/layouts/ConteudoComponent.vue'
import TopoCompoent from '@/components/layouts/TopoCompoent.vue'

export default {
  name: 'App',
  data: () => ({
    visibilidade: true
  }),
  methods: {
    desmontarComponente() {
      this.visibilidade = false
    }
  },
  components: {
    ConteudoComponent,
    TopoCompoent
  }
}
</script>

<style>

</style>
