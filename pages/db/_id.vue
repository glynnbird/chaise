<template>
  <div>
    <v-toolbar color="grey lighten-3">
      <v-text-field
        v-if="docs.length > 0 || filter"
        prepend-icon="mdi-filter"
        hint="filter document list by start of _id"
        v-model="filter"
        @change="page=1; onChangeFilter()"
        @click:clear="onClear"
        clearable
        single-line>
      </v-text-field>

      <v-spacer></v-spacer>
      <v-btn small @click="sql">SQL</v-btn>
      <v-btn small icon @click="prev" :disabled="page < 2"><v-icon>mdi-chevron-left</v-icon></v-btn>
      <v-btn small outlined disabled>{{ page }}</v-btn>
      <v-btn small icon @click="next" :disabled="docs.length < 20"><v-icon>mdi-chevron-right</v-icon></v-btn>
      &nbsp;
      <v-btn small icon @click="onChangeFilter"><v-icon>mdi-refresh</v-icon></v-btn>
      
    </v-toolbar>
    <br />
    <div v-if="docs.length === 0 && !filter">
      This database currently has no data. <NuxtLink to="/doc_add">Add a document</NuxtLink>
    </div>
    <div v-if="docs.length === 0 && filter">
      No matching documents
    </div>
    <DocTable :docs="massagedDocs" :dbName="dbName" showDoc="true" />
    <Busy :isBusy="busy" />
  </div>
</template>

<script>

import couch from "~/assets/js/couch"

export default {
  data() {
    return {
      dbName: '',
      docs: [],
      filter: '',
      page: 1,
      busy: false
    }
  },
  async asyncData({ store, route }) {
    // get DB data
    const dbName = route.params.id
    store.commit('cache/setCurrentID', null)
    store.commit('cache/setCurrentDB', dbName)
    store.commit('cache/addToRecents', dbName)
    
    // get filter from query string
    const filter = route.query.filter || ''
    const page = route.query.page || 1

    const response = await couch.getDocs(store, dbName, filter, page)

    return {
      dbName,
      filter,
      docs: response.rows,
      page
    }
  },
  methods: {
    onClear: async function () {
      this.filter = ''
      await this.onChangeFilter()
    },
    onChangeFilter: async function () {
      let response
      if (this.filter) {
        this.$router.push({ path: this.$route.path, query: { filter: this.filter, page: this.page } })
      } else {
        this.$router.push({ path: this.$route.path, query: { page: this.page }})
      }
      this.busy = true
      response = await couch.getDocs(this.$store, this.dbName, this.filter, this.page)
      this.busy = false
      this.docs = response.rows
    },
    next: async function () {
      this.page++
      this.onChangeFilter()
    },
    prev: async function () {
      this.page--
      this.onChangeFilter()
    },
    sql: function () {
      this.$store.commit('cache/setLastSQL', `SELECT * FROM ${this.dbName}`)
      this.$store.commit('cache/setLastSQLResults', null)
      this.$store.commit('cache/setLastSQLDBName', this.dbName)
      this.$router.push('/db_query')
    }
  },
  computed: {
    massagedDocs: function () {
      return this.docs.map((r) => { return Object.assign({ _id: r.id, _rev: r.value.rev }, r.doc) })
    }
  }
}
</script>
