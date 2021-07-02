<template>
  <v-app>
    <NavDrawer ref="drawer" />
    <v-app-bar app dense>
      <v-app-bar-nav-icon @click.stop="onClickNavbarReveal"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <Breadcrumb :title="title" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
    <v-main>
      <v-container fluid>
        <Nuxt />
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data () {
    return {
      title: 'Chaise'
    }
  },
  methods: {
    onClickNavbarReveal: function () {
      this.$refs.drawer.show = !this.$refs.drawer.show
      console.log(this.$refs.drawer.show)
    }
  }
}
</script>