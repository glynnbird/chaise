<template>
  <v-list>
    <v-list-item v-for="doc in docs" v-bind:key="doc._id" @click="onClickDoc(doc._id)">
      <v-list-item-avatar>
        <v-icon>mdi-file-document</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title>
          {{ doc._id}}
        </v-list-item-title>
        <v-list-item-subtitle v-if="showDoc">
          {{ doc | stripDoc }}
        </v-list-item-subtitle>
      </v-list-item-content>
      <v-list-item-action>
        <v-icon>mdi-arrow-right</v-icon>
      </v-list-item-action>
    </v-list-item>
  </v-list>
</template>
<script>
import pathmagic from '~/assets/js/pathmagic'
export default {
  props: ['docs', 'dbName', 'showDoc'],
  methods: {
    onClickDoc: async function (id) {
      this.$router.push(pathmagic.doc(this.dbName, id))
    }
  }
}
</script>

