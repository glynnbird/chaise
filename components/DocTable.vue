<template>
  <v-data-table
    :headers="headers"
    :items="docs"
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
          if (k !== '_rev' && typeof doc[k] !== 'object') {
            uniqueKeys.add(k)
          }
        }
      }
      // convert set to array
      return [...uniqueKeys].map((k) => { return { text: k, value: k }})
    }
  }
}
</script>

