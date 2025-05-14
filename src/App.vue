<script setup>
import { reactive, ref } from 'vue'
import MainButton from './components/MainButton.vue'
// import OptionsComponent from './components/OptionsComponent.vue'
// import CompositionComponent from './components/CompositionComponent.vue'
const name = 'John Doe'
const body = '<h1 style="color: red">ini description</h1>'
// const idData = 'data-1'

const count = ref(0)

const user = reactive({
  name: 'John Doe',
  age: 30,
})
</script>

<template>
  <MainButton :name="'Button 1'"></MainButton>
  <MainButton name="Button 2" disabled="true"></MainButton>

  <!-- ini menggunakan interpolation -->
  <h1>{{ name }}</h1>

  <OptionsComponent />
  <CompositionComponent />

  <!-- ini menggunakan v-html/raw  -->
  <div :id="idData" class="description" v-html="body"></div>

  <button @click="count++">count is: {{ count }}</button>

  <div class="">
    <p>name: {{ user.name }}</p>
    <p>age: {{ user.age }}</p>
  </div>
</template>

<style scoped></style>
