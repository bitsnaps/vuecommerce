<template>

  <v-app-bar app color="primary" dark>

    <div class="d-flex align-center">

      <v-img
        alt="Vuetify Logo"
        class="shrink mr-2"
        contain
        src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
        transition="scale-transition"
        width="40"
      />

    </div>

    <v-spacer></v-spacer>

    <v-btn
    color="white"
    text
    rounded
    to="/">
    All Products
    </v-btn>

    <v-btn
    color="white"
    text
    rounded
    to="/smartphones">
    Smartphones
    </v-btn>

    <v-btn
    color="white"
    text
    rounded
    to="/notebooks">
    Notebooks
    </v-btn>
<v-spacer></v-spacer>

<slot></slot>

    <v-btn @click="toggleTheme" text rounded>
      Toggle Theme
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  data: () => ({

  }),
  methods: {
    toggleTheme() {
      this.$vuetify.theme.themes.dark.anchor = '#41B883'
      this.$vuetify.theme.dark = !this.$vuetify.theme.dark
    }
  }
};
</script>

<style scoped>
</style>
