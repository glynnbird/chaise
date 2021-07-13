<template>
  <v-card>
    <v-card-title>Add new database</v-card-title>
    <v-card-subtitle>
       The data base name must begin with a lowercase letter (a-z) and then consist of only 
       lowercase characters (a-z), digits (0-9) and any of the characters _, $, (, ), +, -, and /.
    </v-card-subtitle>
    <v-card-text>
      <v-form ref="form">
        <v-text-field
          v-model="name"
          label="Database name"
          required
        ></v-text-field>

        <v-checkbox
          v-model="partitioned"
          label="Is the database to be partitioned?"
          required
        ></v-checkbox>

        <v-btn
          :disabled="formDisabled"
          color="success"
          class="mr-4"
          @click="onCreateDatbase"
        >
          Create
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
    </v-card-actions>
  </v-card>
</template>

<script>
import couch from '~/assets/js/couch'
import pathmagic from '~/assets/js/pathmagic'

export default {
  data: function () {
    return {
      name: '',
      partitioned: false
    }
  },
  computed: {
    formDisabled: function () {
      if (this.name.match(/^[a-z][a-z0-9_$()+/-]*$/)) {
        return false
      } else {
        return true
      }
    }
  },
  methods: {
    onCreateDatbase: async function () {
      const response = await couch.putDB(this.$store, this.name, { partitioned: this.partitioned })
      if (response && response.ok) {
        this.$store.commit('cache/addDb', this.name)
        this.$store.commit('alert/insertAlert', {
          alertMessage: 'Database added',
          alertType: 'success'
        });
        this.$router.push(pathmagic.db(this.name))
      } else {
        this.$store.commit('alert/insertAlert', {
          alertMessage: 'Failed to add database'
        });
      }
      
    }
  }
}
</script>
