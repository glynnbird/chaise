<template>
  <v-app>
    <NavDrawer ref="drawer" />
    <AppBar @revealNavDrawer="onClickNavDrawerReveal" />
    <v-main>
      <Alert />
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  methods: {
    onClickNavDrawerReveal: function () {
      this.$refs.drawer.show = !this.$refs.drawer.show
    }
  }
}
</script>