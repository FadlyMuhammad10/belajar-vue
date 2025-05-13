<script setup>
// const disabled = true
const buttAttr = {
  disabled: true,
  class: 'btn',
  type: 'submit',
}
</script>

<template>
  <!-- <button :disabled="disabled">Button</button> -->
  <button v-bind="buttAttr">Button</button>
</template>

<style scoped></style>
