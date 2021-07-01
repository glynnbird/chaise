<template>
  <div>
    <v-list>
      <v-list-item v-for="doc in docs" v-bind:key="doc.id">

        <v-list-item-content>
          <v-list-item-title>
            {{ doc.id}} rev {{ doc.value.rev | truncateRev }}
          </v-list-item-title>
          <v-list-item-subtitle>
            {{ doc.doc | stripDoc }}
          </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </div>
</template>

<script>

import couch from "~/assets/js/couch"

export default {
  data() {
    return {
      dbName: '',
      info: null,
      docs: []
    }
  },
  async asyncData({ store, route }) {
    // get DB data
    const dbName = route.params.id
    let info = null
    if (store.state.cache.lastDBInfo && store.state.cache.lastDBInfo.db_name === dbName) {
      info = store.state.cache.lastDBInfo
    }
    if (!info) {
      info = await couch.getDBInfo(store, dbName)
    }
    store.commit('cache/setLastDBInfo', info)
    store.commit('cache/addToRecents', info)

    // get docs
    const response = await couch.getDocs(store, dbName, null, null)

    return {
      dbName,
      info,
      docs: response.rows
    }
  }
}
</script>
