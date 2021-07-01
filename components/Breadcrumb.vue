<template>
  <v-sheet
    v-if="items.length > 1"
    color="light-gray"
    width="100%"
    height="30">
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
      if (this.$store.state.cache.dbList) {
        retval.push({ to: '/', text: 'Home' })
      }
      if (this.$store.state.cache.currentDB) {
        const name = this.$store.state.cache.currentDB
        retval.push({ to: `/db/${encodeURIComponent(name)}`, text: name })
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