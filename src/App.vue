<script setup>
import MainButton from './components/MainButton.vue'
import OptionsComponent from './components/OptionsComponent.vue'
import CompositionComponent from './components/CompositionComponent.vue'
const name = 'John Doe'
</script>

<template>
  <MainButton></MainButton>
  <h1>{{ name }}</h1>
  <OptionsComponent />
  <CompositionComponent />
</template>

<style scoped></style>
