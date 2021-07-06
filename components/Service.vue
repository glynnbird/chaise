<template>
  <v-card :color="selected ? 'blue lighten-5' : 'white'" style="margin-bottom:10px">
   <v-card-title>{{ name }}</v-card-title>
   <v-card-subtitle v-if="selected">This is the currently selected service</v-card-subtitle>
   <v-card-text>
     {{ host }}
   </v-card-text>
   <v-card-actions>
     <v-btn :disabled="selected" color="success" @click="$emit('select', id)">Select</v-btn>
     <v-btn :disabled="selected" color="error" @click="$emit('delete', id)">Delete</v-btn>
   </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['name', 'host', 'selected', 'id'],
  data: function () {
    return {}
  },
}
</script>
