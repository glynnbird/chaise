<template>
  <v-sheet
    v-if="items.length > 1"
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
      let name
      console.log('rebuilding breadcrumb')
      // if we're not logged in, there's only one thing in the breadcrumb
      if (this.$store.state.cache.dbList) {
        retval.push({ to: '/', text: 'Home' })
      }
      if (this.$store.state.cache.currentDB) {
        name = encodeURIComponent(this.$store.state.cache.currentDB)
        retval.push({ to: `/db/${name}`, text: name, exact: true })
      }
      console.log('currentID', this.$store.state.cache.currentID)
      if (this.$store.state.cache.currentID) {
        const id = encodeURIComponent(this.$store.state.cache.currentID)
        retval.push({ to: `/db/${name}/${id}`, text: this.$store.state.cache.currentID, exact: true })
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