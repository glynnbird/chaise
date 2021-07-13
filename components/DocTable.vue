<template>
  <v-data-table
    :headers="headers"
    :items="truncatedDocs"
    :items-per-page="itemsPerPage"
    class="elevation-1"
    hide-default-footer
    disable-sort
    dense
    @click:row="onClickDoc"
  ></v-data-table>
</template>
<script>
import pathmagic from '~/assets/js/pathmagic'
export default {
  props: ['docs', 'dbName', 'showDoc'],
  data: function () {
    return {
      itemsPerPage: 20
    }
  },
  methods: {
    onClickDoc: async function (doc) {
      this.$router.push(pathmagic.doc(this.dbName, doc._id))
    }
  },
  computed: {
    headers: function () {
      // create unique set of object keys
      const uniqueKeys = new Set()
      for(const doc of this.docs) {
        for(const k of Object.keys(doc)) {
          const t = typeof doc[k]
          if (k !== '_rev') {
            if (t !== 'string' || doc[k].length > 0) {
              uniqueKeys.add(k)
            }
          }
        }
      }
      // convert set to array
      return [...uniqueKeys].map((k) => { return { text: k, value: k }})
    },
    truncatedDocs: function () {
      const retval = []
      for(const doc of this.docs) {
        const obj = JSON.parse(JSON.stringify(doc))
        for(const k of Object.keys(obj)) {
          let t = typeof obj[k]
          if (t === 'object') {
            obj[k] = JSON.stringify(obj[k])
            t = 'string'
          }
          if (k !== '_id' && t === 'string' && obj[k].length > 20) {
            obj[k] = obj[k].substr(0, 20) + '...'
          }
        }
        retval.push(obj)
      }
      return retval
    }
  }
}
</script>

