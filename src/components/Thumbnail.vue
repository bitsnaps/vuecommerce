<template>
  
  <v-img
    height="auto"
    v-bind:src="image"
    :lazy-src="placeholder"
    onerror="imageLoadError" />

</template>

<script>
export default {
  props: ["image"],
  data() {
    return {
      placeholder: 'https://via.placeholder.com/250'
    }
  },
  methods: {
    imageLoadError (event) {
      event.target.src = this.placeholder
    }
  }
}
</script>

<style scoped>
</style>
