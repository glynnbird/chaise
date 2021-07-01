<template>
  <div>
    <v-list>
      <v-list-item v-for="doc in docs" v-bind:key="doc.id" @click="onClickDoc(doc.id)">
        <v-list-item-avatar>
          <v-icon>mdi-file-document</v-icon>
        </v-list-item-avatar>
        <v-list-item-content>
          <v-list-item-title>
            {{ doc.id}}
          </v-list-item-title>
        </v-list-item-content>
        <v-list-item-action>
          <v-icon>mdi-arrow-right</v-icon>
        </v-list-item-action>
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
      docs: []
    }
  },
  async asyncData({ store, route }) {
    // get DB data
    const dbName = route.params.id
    store.commit('cache/setCurrentID', null)
    store.commit('cache/setCurrentDB', dbName)
    store.commit('cache/addToRecents', dbName)

    // get docs
    const response = await couch.getDocs(store, dbName, null, null)

    return {
      dbName,
      docs: response.rows
    }
  },
  methods: {
    onClickDoc: async function (id) {
      const db = encodeURIComponent(this.dbName)
      id = encodeURIComponent(id)
      this.$router.push(`/db/${db}/${id}`)
    }
  }
}
</script>
