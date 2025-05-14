<script setup>
const props = defineProps({
  name: String,
  disabled: {
    type: Boolean,
    default: false,
  },
})
</script>

<template>
  <button :disabled="props.disabled">{{ props.name }}</button>
</template>

<style scoped></style>
