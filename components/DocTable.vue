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
export default {
  props: ['docs', 'dbName', 'showDoc'],
  data: function () {
    return {
      itemsPerPage: 20
    }
  },
  methods: {
    onClickDoc: async function (doc) {
      const db = encodeURIComponent(this.dbName)
      const id = encodeURIComponent(doc._id)
      this.$router.push(`/db/${db}/${id}`)
    }
  },
  computed: {
    headers: function () {
      // create unique set of object keys
      const uniqueKeys = new Set()
      for(const doc of this.docs) {
        for(const k of Object.keys(doc)) {
          const t = typeof doc[k]
          if (k !== '_rev' && t !== 'object') {
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
          if (k !== '_id' && typeof obj[k] === 'string' && obj[k].length > 20) {
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

