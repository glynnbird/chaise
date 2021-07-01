<template>
  <v-sheet
    elevation="1"
    height="30"
    width="100%"
    class="breadcrumbsheet d-none d-xl-flex d-lg-flex d-md-flex"
    v-if="items.length > 0"
  >
    <v-breadcrumbs :items="items" divider=">" nuxt></v-breadcrumbs>
  </v-sheet>
</template>
<script>
export default {
  computed: {
    items: function () {
      const retval = []
      console.log(this.$store.state.cache)
      // if we're not logged in, there's only one thing in the breadcrumb
      if (!this.$store.state.cache.dbList) {
        retval.push({ to: '/', text: 'Home' })
      }
      if (!this.$store.state.cache.lastDBInfo) {
        const name = this.$store.state.cache.lastDBInfo.db_name
        retval.push({ to: '/' + encodeURIComponent(name), text: name })
      }
      console.log('retval', retval)
      return retval
    },
  },
};
</script>

<style scoped>
.v-breadcrumbs {
  padding-top: 7px;
}
</style>