<template>
  <div>
     {{dbName}} {{ id }} 

      {{ this.$store.state.cache.currentID }}
woor
      <code>{{doc}}</code>
  </div>
</template>

<script>

import couch from "~/assets/js/couch"

export default {
  data: function () {
    return {
      dbName: null,
      id: null,
      doc: null
    }
  },
  asyncData: async function ({ store, route }) {
    // get DB data
    const dbName = route.params.dbname
    const id = route.params.id
    
    store.commit('cache/setCurrentDB', dbName)
    store.commit('cache/addToRecents', dbName)
    // get docs
    const doc = await couch.getDoc(store, dbName, id)
    store.commit('cache/setCurrentID', id)
    return {
      dbName,
      id,
      doc
    }
  }
}
</script>
