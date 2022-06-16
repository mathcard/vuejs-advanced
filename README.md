# vuejs-advanced

### Instância de VUE e double mustache
Elemento hmtl manipulado por uma instancia do VUE.

### Data
São variaveis reativas

### Methods
Metodos são funções que serão atribuidas ao instancia do VUE.

### Computed
São metodos que retornam valores formandos dinamicamente, reduzir aplicação de lógicas dentro dos templates (html).

### Watch
Sempre que houver uma mudança em um atributo observado, um metodo será automaticamente disparado, é possivel buscar o dados atualizado e/ou dados antigo.

### DOM
Representação estruturada do documento html e definição de formas de como acessar estrtuturas.

### VIRTUAL DOM
Representação virtual do DOM, mantido em memória JS e sincronizada com o DOM real.

### VUE CLI
npm i -g @vue/cli

vue create project-default
vue create project-default (select custom features)

Definindo porta
npm run serve -- --port 3001


### Style
Scoped e Module os estilos ficam apenas no component.
scoped - fica restrito no component
Module, também restrito ao conteudo, porém não é executado os estilos no html.

### LifeCycle Hooks
- beforeCreate:
- created:
- beforeMount:
- mounted:
- beforeUpdate:
- updated:
- beforeUnmount:
- unmounted:
- errorCaptured:
- renderTracked: 
- renderTriggered:
- activated:
- deactivated:

Ciclo de Vida da aplicação no component APP e ciclo de vida para cada component

 methods: {

  },
  beforeCreate() {
    console.log('Antes de criar')
  },
  created() {
    console.log('Criado')
  },
  beforeMount() {
    console.log('Antes de montar')
  },
  mounted() {
    console.log('Montado')
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
  errorCaptured() {
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
  }

