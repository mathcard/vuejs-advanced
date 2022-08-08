import userApi from 'src/composables/UseApi'

export default function postsService () {
  const { list, post, update, remove, getById } = userApi('posts')

  return {
    list,
    post,
    update,
    remove,
    getById
  }
}
