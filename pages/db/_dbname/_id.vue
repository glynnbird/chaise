<template>
  <div>
    <v-jsoneditor v-model="doc" :options="options" :plus="false" height="600px"></v-jsoneditor>
    <br />
    <v-btn color="success" :disabled="saveDisabled">Save</v-btn>
  </div>
</template>

<style>
.jsoneditor {
  border: 1px solid #ccc
}
.jsoneditor-menu {
  border-bottom: 1px solid #ccc;
}
.jsoneditor-menu {
  background-color: #ccc !important
}
</style>

<script>

import couch from "~/assets/js/couch"

export default {
  data: function () {
    return {
      dbName: null,
      id: null,
      doc: null,
      originalJson: '',
      options: {
        mode: 'code'
      }
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
    const originalJson = JSON.stringify(doc)
    store.commit('cache/setCurrentID', id)
    return {
      dbName,
      id,
      doc,
      originalJson
    }
  },
  computed: {
    saveDisabled: function () {
      if (JSON.stringify(this.doc) === this.originalJson) {
        return true
      }
      if (!this.doc._id) {
        return true
      }
      const originalDoc = JSON.parse(this.originalJson)
      if (originalDoc._rev && this.doc._rev !== originalDoc._rev) {
        return true
      }
      if (originalDoc._id && this.doc._id !== originalDoc._id) {
        return true
      }
      return false
    }
  }
}
</script>
