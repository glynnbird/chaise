<template>
  <v-list>
    <v-list-item v-for="db in $store.state.cache.dbList" v-bind:key="db" @click="onClickDB(db)">
      <v-list-item-avatar>
        <v-icon>mdi-database</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          {{ db }}
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon color="grey lighten-1">mdi-arrow-right</v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>

<script>

import couch from "~/assets/js/couch"

export default {
  data: function () {
    return {
      json: "",
      showMeta: false,
      docs: 0,
      deletedDocs: 0,
      size: 0,
      partitioned: false
    }
  },
  async asyncData ({ store }) {
    store.commit('cache/setCurrentDB', null)
    const response = await couch.loadDbs(store)
    store.commit('cache/setDbList', response)
    console.log('response', response)
  },
  methods: {
    onClickDB: async function (db) {
      this.$router.push(`/db/${encodeURIComponent(db)}`)
    }
  }
}
</script>

