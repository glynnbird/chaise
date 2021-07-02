<template>
  <v-app>
    <NavDrawer ref="drawer" />
    <v-app-bar app dense>
      <v-app-bar-nav-icon @click.stop="onClickNavbarReveal"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <Breadcrumb :title="title" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- add document icon -->
      <v-btn nuxt to="/doc_add" icon v-if="this.$store.state.cache.currentDB">
        <v-icon>mdi-file-plus</v-icon>
      </v-btn>
      <v-btn nuxt to="/db_add" icon v-if="!this.$store.state.cache.currentDB">
        <v-icon>mdi-database-plus</v-icon>
      </v-btn>  
      <v-btn nuxt to="/db_query" icon>
        <v-icon>mdi-crosshairs-question</v-icon>
      </v-btn>   
      <v-btn icon>
        <v-icon>mdi-cog</v-icon>
      </v-btn>
    </v-app-bar>
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