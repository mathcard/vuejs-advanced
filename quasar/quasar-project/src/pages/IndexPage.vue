<template>
  <q-page padding>
    <q-table
      title="Treats"
      :rows="posts"
      :columns="columns"
      row-key="name"
    >
      <template v-slot:top>
        <span class="text-h5">Artigos</span>
        <q-space/>
        <q-btn color="primary" label="Novo" @click="addRow" :to="{name: 'formPost'}" />
      </template>
      <template v-slot:body-cell-actions="props">
        <q-td :props="props" class="q-gutter-sm">
          <q-btn icon="edit" color="info" dense size="sm"
            @click="handleEditPost(props.row.id)" />

          <q-btn icon="delete" color="negative" dense size="sm"
            @click="handleDeletePost(props.row.id)" />
        </q-td>
      </template>
    </q-table>
  </q-page>
</template>

<script>
import { defineComponent, onMounted, ref } from 'vue'
import postsService from 'src/services/posts'
import { useQuasar } from 'quasar'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'IndexPage',
  setup () {
    const $q = useQuasar()
    const router = useRouter()
    const posts = ref([])
    const { list, remove } = postsService()
    const columns = [
      { name: 'id', field: 'id', label: 'Id', sortable: true },
      { name: 'title', field: 'title', label: 'Título', sortable: true, align: 'center' },
      { name: 'author', field: 'author', label: 'Autor', sortable: true, align: 'center' },
      { name: 'actions', field: 'actions', label: 'Ações', align: 'right' }
    ]

    onMounted(() => {
      getPosts()
    })

    const getPosts = async () => {
      try {
        const data = await list()
        posts.value = data
      } catch (err) {
        console.log(err)
      }
    }

    const handleEditPost = async (id) => {
      router.push({ name: 'formPost', params: { id } })
    }

    const handleDeletePost = async (id) => {
      try {
        $q.dialog({
          title: 'Remover',
          message: 'Deseja remover esse port?',
          cancel: true,
          persistent: true
        }).onOk(async () => {
          console.log(id)
          await remove(id)
          $q.notify({ message: 'Apagado com sucesso!', icon: 'check', color: 'positive' })
          await getPosts()
        })
      } catch (err) {
        $q.notify({ message: 'Erro ao apagar post', icon: 'times', color: 'negative' })
        console.log(err)
      }
    }

    return {
      posts,
      columns,
      handleDeletePost,
      handleEditPost
    }
  }
})
</script>
