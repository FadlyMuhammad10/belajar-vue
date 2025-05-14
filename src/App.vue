<script setup>
import { computed, reactive, ref } from 'vue'

const author = reactive({
  name: 'Jk Rowling',
  books: ['Harry Potter', 'Sorcerer Stone', 'Chamber of Secrets'],
})

const count = ref(0)

const increment = () => {
  count.value++
}

const publishBook = computed(() => {
  console.log('test')
  return author.books.length > 0 ? 'Yes' : 'No'
})
</script>

<template>
  <div class="container">
    <p>{{ publishBook }}</p>

    <button @click="increment">{{ count }}</button>
  </div>
</template>

<style scoped></style>
