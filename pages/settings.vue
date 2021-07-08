<template>
  <v-container>
    <h1>Chaise</h1>
  
    <h2>Dashboard for Apache CouchDB</h2>
    <div style="text-align: center" v-if="$store.state.session.services.length === 0">
      To get started, enter the details of the CouchDB services that you want to work with.
    </div>

    <Service 
      v-for="service,key in services"
      :key="key"
      :name="service.name"
      :host="service.host"
      :id="service.id"
      :readonly="service.readonly"
      :selected="($store.state.session.currentService && service.id === $store.state.session.currentService.id)"
      @select="chooseService"
      @delete="deleteService" />
    <br />
    <v-btn v-if="!showAddForm" @click="revealAddForm">Add Service</v-btn>
    <v-card v-if="showAddForm">
      <v-card-title>Add service</v-card-title>
      <v-card-text>
        <v-text-field v-model="newServiceName" hint="a friendly name for this CouchDB service e.g. localhost" label="Service Name"></v-text-field>
        <v-text-field v-model="newServiceHost" hint="the URL of your CouchDB service e.g. http://localhost:5984" label="Service Host"></v-text-field>
        <v-text-field v-model="newServiceUsername" hint="the username to log in to your CouchDB service " label="Service Username"></v-text-field>
        <v-text-field v-model="newServicePassword" type="password" hint="the password to log in to your CouchDB service " label="Service Password"></v-text-field>
        <v-checkbox v-model="newServiceReadOnly" label="Read only"></v-checkbox>
        <div>
          Note that the service details are held in local storage in your browser - not in any
          centralised database.
        </div>
        <v-alert type="error" v-if="newServiceError">
          {{ newServiceError }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-btn color="success" @click="onSave" :disabled="onSaveDisabled">Save</v-btn>
      </v-card-actions>
    </v-card>
  </v-container>
</template>
<style type="text/css">
h1 {
  font-size: 78px;
  font-weight: bold;
  text-align: center;
}
h2 {
  font-size: 24px;
  font-weight: normal;
  text-align: center;
  margin-top:10px;
  margin-bottom:20px;
}
.credit {
  font-size: 9px
}
.v-application .display-3 {
  margin-top: -250px;
}
.v-carousel__controls__item {
  display: none
}
.v-carousel__controls {
  display: none
}
</style>
<script>

import localstorage from '~/assets/js/localstorage'
import couch from '~/assets/js/couch'
import kuuid from 'kuuid'

export default {
  data: function () {
    return {
      model: 0,
      items: [ { src: '/martin-pechy-bpg-ngqrPc8-unsplash.jpg' } ],
      content: [ 'Chaise' ],
      services: [],
      showAddForm: false,
      newServiceName: '',
      newServiceHost: '',
      newServiceUsername: '',
      newServicePassword: '',
      newServiceReadOnly: false,
      newServiceError: ''
    };
  },
  asyncData: async function ({ store }) {
    return {
      services: store.state.session.services || []
    }
  },
  methods: {
    revealAddForm: function () {
      this.newServiceName = ''
      this.newServiceHost = 'https://'
      this.newServiceUsername = ''
      this.newServicePassword = ''
      this.newServiceReadOnly = false
      this.showAddForm = true
    },
    onSave: async function () {
      this.newServiceError = ''

      // test the service 
      const r = await couch.getSession(this.newServiceHost, this.newServiceUsername, this.newServicePassword)
      if (!r) {
        this.newServiceError = 'Failed to authenticate - please check credentials and make sure CORS is enabled'
        return
      }

      // save the service in local storage
      const newService = {
        id: kuuid.ids(),
        name: this.newServiceName,
        host: this.newServiceHost,
        username: this.newServiceUsername,
        password: this.newServicePassword,
        readonly: this.newServiceReadOnly
      }
      this.$store.commit('session/addService', newService)
      this.showAddForm = false
      if (this.services.length === 1) {
        this.chooseService(this.services[0].id)
      }
    },
    chooseService: function(id) {
      for(const service of this.services) {
        if (service.id === id) {
          this.$store.commit('session/setCurrentService', service)
          this.$store.commit('cache/reset')
          this.$router.push('/')
          break
        }
      }
    },
    deleteService: function (id) {
      if (id === this.$store.state.session.currentService) {
        this.$store.commit('cache/reset')
        this.$store.commit('session/currentService', null)
      }
      this.$store.commit('session/deleteService', id)
    }
  },
  computed: {
    onSaveDisabled: function() {
      if (!this.newServiceName ||
          !this.newServiceHost ||
          !this.newServiceUsername ||
          !this.newServicePassword) {
            return true
          }
      return false
    }
  }
}
</script>
