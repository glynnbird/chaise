<template>
  <v-card>
    <v-card-title>Edit Document</v-card-title>
    <v-card-text>
      <v-jsoneditor v-model="doc" :options="options" :plus="false" height="600px"></v-jsoneditor>
      <!-- leave choir dialog --->
      <ConfirmDialog
        :displayDialog="displayDeleteDialog"
        title="Are you sure?"
        text="Confirm deletion of this document?"
        verb="Delete"
        @confirm="doDelete"
        @cancel="cancelDelete"
      />
    </v-card-text>
    <v-card-actions>
      <v-btn color="success" :disabled="saveDisabled" @click="onSave">Save</v-btn>
      <v-btn color="error" @click="onDelete">Delete</v-btn>
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

export default {
  data: function () {
    return {
      dbName: null,
      id: null,
      doc: null,
      originalJson: '',
      options: {
        mode: 'code'
      },
      displayDeleteDialog: false
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
  },
  methods: {
    onSave: async function () {
      const response = await couch.putDoc(this.$store, this.dbName, this.doc)
      if (response && response.ok) {
        this.doc._rev = response.rev
        this.originalJson = JSON.stringify(this.doc)
        this.$store.commit('alert/insertAlert', {
          alertType: 'success',
          alertMessage: 'Successfully edited document'
        });
      } else {
        this.$store.commit('alert/insertAlert', {
          alertMessage: 'Failed to add document'
        });
      }
    },
    onDelete: async function () {
      this.displayDeleteDialog = true
    },
    doDelete: async function () {
      this.displayDeleteDialog = false;
      const response = await couch.deleteDoc(this.$store, this.dbName, this.doc)
      if (response && response.ok) {
        this.$store.commit('alert/insertAlert', {
          alertType: 'success',
          alertMessage: 'Document deleted'
        });
        this.$router.push(`/db/${encodeURIComponent(this.dbName)}`)
      } else {
        this.$store.commit('alert/insertAlert', {
          alertMessage: 'Failed to delete document'
        });
      }
    },
    cancelDelete: function () {
      this.displayDeleteDialog = false;
    }
  }
}
</script>
