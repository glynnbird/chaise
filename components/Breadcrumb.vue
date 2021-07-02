<template>
  <span>
    <NuxtLink to="/">{{ title }}</NuxtLink>
    <span v-for="item in items" :key="item.to">
      {{ separator }}
      <v-icon v-if="item.icon">{{ item.icon }}</v-icon>
      <NuxtLink :to="item.to">{{ item.text }}</NuxtLink>
    </span>
  </span>
</template>
<style>
a.nuxt-link-active {
  color:black;
  text-decoration: none
}
/* exact link will show the primary color for only the exact matching link */
a.nuxt-link-exact-active {
  color: black;
  text-decoration: none
}
</style>
<script>
export default {
  props: [ 'title' ],
  data: function () {
    return {
      separator: ''
    }
  },
  computed: {
    items: function () {
      const retval = []
      let name
      // if we're not logged in, there's only one thing in the breadcrumb
      if (this.$store.state.cache.currentDB) {
        name = encodeURIComponent(this.$store.state.cache.currentDB)
        retval.push({
          to: `/db/${name}`,
          text: name,
          icon: 'mdi-database'
        })
      }
      if (this.$store.state.cache.currentID) {
        const id = encodeURIComponent(this.$store.state.cache.currentID)
        retval.push({ 
          to: `/db/${name}/${id}`,
          text: this.$store.state.cache.currentID,
          icon: 'mdi-file-document'
        })
      }
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