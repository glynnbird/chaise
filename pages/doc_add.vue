<template>
  <v-card>
    <v-card-title>Add document</v-card-title>
    <v-card-text>
      <v-alert v-if="!dbName">
        Sorry bad link. <NuxtLink to="/">Go Home</NuxtLink>.
      </v-alert>
      <v-jsoneditor v-if="dbName" v-model="doc" :options="options" :plus="false" height="600px"></v-jsoneditor>
    </v-card-text>
    <v-card-actions>
      <v-btn v-if="dbName" color="success" :disabled="saveDisabled" @click="onSave">Save</v-btn>
    </v-card-actions>
  </v-card>
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
import kuuid from "kuuid"

export default {
  data: function () {
    return {
      valid: true,
      dbName: null,
      doc: null,
      options: {
        mode: 'code',
        onChangeText: this.onChangeText,
        mainMenuBar: false
      }
    }
  },
  asyncData: async function ({ store, route }) {
    const dbName = store.state.cache.currentDB
    return {
      dbName,
      doc: {
        _id: kuuid.id()
      }
    }
  },
  computed: {
    saveDisabled: function () {
      if (this.doc._rev) {
        return true
      }
      if (!this.valid) {
        return true
      }
      return false
    }
  },
  methods: {
    onChangeText: function (txt) {
      try {
        JSON.parse(txt)
        this.valid=true
      } catch {
        this.valid = false
      }
    },
    onSave: async function () {
      const response = await couch.putDoc(this.$store, this.dbName, this.doc)
      if (response && response.ok) {
        this.$store.commit('alert/insertAlert', {
          alertType: 'success',
          alertMessage: 'Successfully added document'
        });
        this.$router.push(`/db/${this.dbName}/${encodeURIComponent(this.doc._id)}`)
      } else {
        this.$store.commit('alert/insertAlert', {
          alertMessage: 'Failed to add document'
        });
      }
    }
  }
}
</script>
