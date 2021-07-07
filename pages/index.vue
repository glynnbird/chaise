<template>
  <div>
    <v-toolbar color="blue-grey lighten-5">
      <v-text-field
        prepend-icon="mdi-filter"
        hint="filter database list"
        v-model="filter"
        clearable
        single-line>
      </v-text-field>
    </v-toolbar>
    <v-list>
      <v-list-item v-for="db in filteredDBList" v-bind:key="db" @click="onClickDB(db)">
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
  </div>
</template>

<script>

import couch from "~/assets/js/couch"

export default {
  data: function () {
    return {
      filter: ''
    }
  },
  async asyncData ({ store }) {
    store.commit('cache/setCurrentDB', null)
    store.commit('cache/setCurrentID', null)
    const currentList = store.state.cache.dbList
    if (!currentList || currentList.length === 0) {
      const response = await couch.loadDbs(store)
      store.commit('cache/setDbList', response)
    }
  },
  methods: {
    onClickDB: async function (db) {
      this.$router.push(`/db/${encodeURIComponent(db)}`)
    }
  },
  computed: {
    filteredDBList: function () {
      if (this.filter) {
        return this.$store.state.cache.dbList.filter((item) => item.match(this.filter))
      } else {
        return this.$store.state.cache.dbList
      }
    }
  }
}
</script>

