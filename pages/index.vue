<template>
  <v-container>
    <h1>Chaise</h1>
    <h2>CouchDB Dashboard built with NuxtJS</h2>
    <v-col cols="auto" md="6" sm="12">
      <v-expansion-panels>

        <v-expansion-panel v-for="db in $store.state.cache.dbList" v-bind:key="db" v-on:change="onChangeDB(db)">
          <v-expansion-panel-header>
            <span>
            <v-avatar>
              <v-icon>mdi-database</v-icon>
            </v-avatar>
            &nbsp;
            {{ db }}
            </span>
          </v-expansion-panel-header>
          <v-expansion-panel-content>
            <v-list v-if="showMeta">
              <v-list-item>Size: {{ size }}</v-list-item>
              <v-list-item>Docs: {{ docs }}</v-list-item>
              <v-list-item>Deleted Docs: {{ deletedDocs }}</v-list-item>
              <v-list-item>Partitioned: {{ partitioned }}</v-list-item>
            </v-list>
            <v-btn color="success" nuxt :to="'/db/' + encodeURIComponent(db)">Go</v-btn>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>
    </v-col>
  </v-container>
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
    const response = await couch.loadDbs(store)
    store.commit('cache/setDbList', response)
    console.log('response', response)
  },
  methods: {
    onChangeDB: async function (db) {
      this.showMeta = false
      console.log('onchange', db)
      const info = await couch.getDBInfo(this.$store, db)
      this.$store.commit('cache/setLastDBInfo', info)
      this.size = info.sizes.external
      this.docs = info.doc_count
      this.deletedDocs = info.doc_del_count
      this.partitioned = !!info.props.partitioned
      this.showMeta = true
    }
  }
}
</script>

