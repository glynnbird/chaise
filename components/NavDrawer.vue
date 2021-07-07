<template>
  <v-navigation-drawer v-model="show" app>
    <v-list-item v-if="$store.state.session.currentService">
      <v-list-item-avatar>
        <v-icon>mdi-cloud</v-icon>
      </v-list-item-avatar>
      <v-list-item-content>
        <v-list-item-title class="text-h6">
          {{ $store.state.session.currentService.name }}
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ $store.state.session.currentService.host }}
        </v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list-item @click="onHome">
      <v-list-item-content>
          <v-list-item-title>
            Home
          </v-list-item-title>
      </v-list-item-content>
    </v-list-item>
    
    <v-list-item @click="onSettings">
      <v-list-item-content>
          <v-list-item-title>
            Settings
          </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-list-item @click="onAbout">
      <v-list-item-content>
          <v-list-item-title>
            About
          </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>
    <v-subheader v-if="$store.state.cache.recents.length > 0">Recents</v-subheader>
    <v-list
      dense
      nav
    >
      <v-list-item
        v-for="item in $store.state.cache.recents"
        :key="item"
        @click="chooseRecent(item)"
      >
        <v-list-item-icon>
          <v-icon>mdi-database</v-icon>
        </v-list-item-icon>

        <v-list-item-content>
          <v-list-item-title>{{ item }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>


export default {
  data: function () {
    return {
      items: [],
      show: false
    }
  },
  async asyncData ({ store }) {
    return {
      items: store.state.cache.dbList
    }
  },
  methods: {
    chooseRecent: function (db) {
      this.$router.push('/db/' + encodeURIComponent(db))
    },
    onHome: function () {
      this.$router.push('/')
    },
    onSettings: function () {
      this.$router.push('/settings')
    },
    onAbout: function () {
      this.$router.push('/about')
    }
  }
}
</script>
