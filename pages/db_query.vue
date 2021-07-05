<template>
  <div>
    <v-text-field
      prepend-icon="mdi-database-search"
      :append-icon="appendIcon"
      hint="query a database using SQL e.g. SELECT * FROM cities WHERE country='GB'"
      v-model="sql"
      @change="onChangeSQL"
      single-line>
    </v-text-field>
    <DocTable :docs="data.docs" :dbName="dbName" v-if="data"  showDoc="true" />
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
      data: null
    }
  },
  asyncData: async function( {store}) {
    console.log('asyncData', store.state.cache.lastSQL)
    const sql = store.state.cache.lastSQL
    const data = store.state.cache.lastSQLResults
    const dbName = store.state.cache.lastSQLDBName
    return { sql, data, dbName }
  },
  methods: {
    onChangeSQL: async function () {
      try {
        // compile SQL to Mango
        this.appendIcon = null
        this.compiled = sqltomango.parse(this.sql)
        this.dbName = this.compiled.table
        delete this.compiled.table
        this.compiled.fields = this.compiled.fields || []
        this.compiled.limit = this.compiled.limit || 20
        if (this.compiled.fields.length > 0 && !this.compiled.fields.includes('_id')) {
          this.compiled.fields.push('_id')
        }

        // run _explain to see if this has an index
        this.explain = await couch.explain(this.$store, this.dbName, this.compiled)
        this.$store.commit('cache/setLastSQL', this.sql)

        // see if we are using a secondary index
        if (this.explain.index.ddoc) {
          this.appendIcon = 'mdi-thumb-up'
        } else {
          this.appendIcon = 'mdi-thumb-down'
        }
      } catch (e) {
        this.$store.commit('alert/insertAlert', {
          alertMessage: 'Could not parse SQL'
        });
      }

      // do the find
      this.data = await couch.find(this.$store, this.dbName, this.compiled)
      this.$store.commit('cache/setLastSQLResults', this.data)
      console.log('this.dbName', this.dbName)
      this.$store.commit('cache/setLastSQLDBName', this.dbName)
    }

  }
}
</script>
