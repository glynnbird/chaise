<template>
  <v-app>
    <NavDrawer ref="drawer" />
    <v-app-bar color="blue-grey lighten-4" app dense v-if="$store.state.session.currentService">
      <v-app-bar-nav-icon @click.stop="onClickNavbarReveal"></v-app-bar-nav-icon>

      <v-toolbar-title>
        <Breadcrumb :title="$store.state.session.currentService.name" />
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <!-- add document icon -->
      <v-chip v-if="$store.state.session.currentService.readonly">
        Read only
      </v-chip>
      <v-btn nuxt to="/doc_add" icon v-if="!$store.state.session.currentService.readonly && $store.state.cache.currentDB && !$store.state.cache.currentID">
        <v-icon>mdi-file-plus</v-icon>
      </v-btn>
      <v-btn nuxt to="/db_add" icon v-if="!$store.state.session.currentService.readonly && !$store.state.cache.currentDB">
        <v-icon>mdi-database-plus</v-icon>
      </v-btn>  
      <v-btn nuxt to="/db_query" icon>
        <v-icon>mdi-database-search</v-icon>
      </v-btn>   
      <v-btn nuxt to="/settings" icon>
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
    return { }
  },
  methods: {
    onClickNavbarReveal: function () {
      this.$refs.drawer.show = !this.$refs.drawer.show
    }
  }
}
</script>