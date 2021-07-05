<template>
  <div>
    <v-text-field
      v-if="docs.length > 0 || filter"
      prepend-icon="mdi-filter"
      hint="filter document list by start of _id"
      v-model="filter"
      @change="onChangeFilter"
      @click:clear="onClear"
      clearable
      single-line>
    </v-text-field>
    <div v-if="docs.length === 0 && !filter">
      This database currently has no data. <NuxtLink to="/doc_add">Add a document</NuxtLink>
    </div>
    <div v-if="docs.length === 0 && filter">
      No matching documents
    </div>
    <DocTable :docs="massagedDocs" :dbName="dbName" showDoc="true" />
  </div>
</template>

<script>

import couch from "~/assets/js/couch"

export default {
  data() {
    return {
      dbName: '',
      docs: [],
      filter: ''
    }
  },
  async asyncData({ store, route }) {

    console.log('incoming!', route.query)
    // get DB data
    const dbName = route.params.id
    store.commit('cache/setCurrentID', null)
    store.commit('cache/setCurrentDB', dbName)
    store.commit('cache/addToRecents', dbName)
    
    // get filter from query string
    const filter = route.query.filter || ''

    // get docs
    const response = await couch.getDocs(store, dbName, filter, null)

    return {
      dbName,
      docs: response.rows,
      filter
    }
  },
  methods: {
    onClear: async function () {
      this.filter = ''
      await this.onChangeFilter()
    },
    onChangeFilter: async function () {
      let response
      console.log('onChangeFilter', this.filter)
      console.log(this.$route)
      if (this.filter) {
        this.$router.push({ path: this.$route.path, query: {filter: this.filter} })
      } else {
        this.$router.push({ path: this.$route.path, query: {}})
      }
      response = await couch.getDocs(this.$store, this.dbName, this.filter, null)
      this.docs = response.rows
    }
  },
  computed: {
    massagedDocs: function () {
      return this.docs.map((r) => { return Object.assign({ _id: r.id, _rev: r.value.rev }, r.doc) })
    }
  }
}
</script>
