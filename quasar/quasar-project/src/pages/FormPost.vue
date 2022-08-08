<template>
  <q-page padding>
    <q-form
      @submit="onSubmit"
      @reset="onReset"
      class="row q-col-gutter-sm"
    >
      <q-input
        outlined
        v-model="form.title"
        label="Título"
        class="col-lg-6 col-xs-12"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo Obrigatório!']"
      />

      <q-input
        outlined
        v-model="form.author"
        label="Autor"
        class="col-lg-6 col-xs-12"
        lazy-rules
        :rules="[ val => val && val.length > 0 || 'Campo Obrigatório!']"
      />

      <div class="col-lg-6 col-xs-12">
        <q-editor v-model="form.content" min-height="5rem" />
      </div>

       <div class="col-12 q-gutter-sm">
        <q-btn label="Salvar" color="primary" class="float-right" icon="save" type="submit"/>
        <q-btn
          label="Cancelar"
          color="white"
          class="float-right"
          text-color="primary"
          :to="{ name: 'home' }"
        />
      </div>
    </q-form>
  </q-page>
</template>

<script>
import postsService from 'src/services/posts'
import { defineComponent, ref, onMounted } from 'vue'
import { useQuasar } from 'quasar'
import { useRoute, useRouter } from 'vue-router'

export default defineComponent({
  name: 'FormPost',
  setup () {
    const { post, getById, update } = postsService()
    const $q = useQuasar()
    const route = useRoute()
    const router = useRouter()

    onMounted(async () => {
      if (route.params.id) {
        const response = await getById(route.params.id)
        form.value = response
      }
    })

    const form = ref({
      title: '',
      content: '',
      author: ''
    })

    const onSubmit = async () => {
      try {
        if (route.params.id) {
          await update(form.value)
          $q.notify({ message: 'Post alterado com sucesso!', icon: 'check', color: 'positive' })
          router.push({ name: 'home' })
        } else {
          await post(form.value)
          $q.notify({ message: 'Post salvo com sucesso!', icon: 'check', color: 'positive' })
          router.push({ name: 'home' })
        }
      } catch (err) {
        console.log(err)
      }
    }

    return {
      form,
      route,
      onSubmit
    }
  }
})

</script>
