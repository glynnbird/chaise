<template>
  <div>
    <v-toolbar color="blue lighten-5">
      <v-text-field
        prepend-icon="mdi-database-search"
        :append-icon="appendIcon"
        hint="query a database using SQL e.g. SELECT * FROM cities WHERE country='GB'"
        v-model="sql"
        @change="onResetSQL"
        single-line>
      </v-text-field>
      <v-spacer />
      <v-btn small outlined disabled>{{ page }}</v-btn>
      <v-btn small icon @click="next" :disabled="!data || data.docs.length < 20"><v-icon>mdi-chevron-right</v-icon></v-btn>
      &nbsp;
      <v-btn small icon @click="onChangeSQL"><v-icon>mdi-refresh</v-icon></v-btn>
    </v-toolbar>
    <br />
    <DocTable :docs="data.docs" :dbName="dbName" v-if="data"  showDoc="true" />
    <Busy :isBusy="busy" />
  </div>
</template>
<script>
import couch from "~/assets/js/couch"
import sqltomango from "sqltomango"

export default {
  data: function() {
    return {
      sql: '',
      compiled: null,
      dbName: '',
      explain: null,
      appendIcon: '',
      data: null,
      page: 1,
      nextBookmark: null,
      busy: false
    }
  },
  asyncData: async function( {store}) {
    console.log('asyncData', store.state.cache.lastSQL)
    const sql = store.state.cache.lastSQL
    const data = store.state.cache.lastSQLResults
    const dbName = store.state.cache.lastSQLDBName
    return { sql, data, dbName }
  },

  mounted: async function () {
    console.log('mounted!')
    if (this.data === null) {
      await this.onResetSQL()
    }
  },
  methods: {
    next: async function () {
      this.page++
      this.bookmark = this.nextBookmark
      await this.onChangeSQL()
    },
    onResetSQL: async function () {
      this.page = 1
      this.nextBookmark = null
      this.bookmark = null
      await this.onChangeSQL()
    },
    onChangeSQL: async function () {
      try {
        // compile SQL to Mango
        this.appendIcon = null
        this.compiled = sqltomango.parse(this.sql)
        this.dbName = this.compiled.table
        delete this.compiled.table
        this.compiled.selector = this.compiled.selector || {}
        this.compiled.fields = this.compiled.fields || []
        this.compiled.limit = this.compiled.limit || 20
        if (this.compiled.fields.length > 0 && !this.compiled.fields.includes('_id')) {
          this.compiled.fields.push('_id')
        }
        if (this.bookmark) {
          this.compiled.bookmark = this.bookmark
        }
        this.busy = true
        this.data = null

        // run _explain to see if this has an index
        if (!this.compiled.bookmark) {
          this.explain = await couch.explain(this.$store, this.dbName, this.compiled)
          // see if we are using a secondary index
          if (this.explain.index.ddoc) {
            this.appendIcon = 'mdi-thumb-up'
          } else {
            this.appendIcon = 'mdi-thumb-down'
          }
        }
        this.$store.commit('cache/setLastSQL', this.sql)

        // do the find
        console.log(JSON.stringify(this.compiled))
        this.data = await couch.find(this.$store, this.dbName, this.compiled)
        this.nextBookmark = this.data.bookmark
        this.$store.commit('cache/setLastSQLResults', this.data)
        this.$store.commit('cache/setLastSQLDBName', this.dbName)
        this.busy = false
      } catch (e) {
        this.$store.commit('alert/insertAlert', {
          alertMessage: 'Could not parse SQL'
        });
        this.busy = false
      }
    }

  }
}
</script>
