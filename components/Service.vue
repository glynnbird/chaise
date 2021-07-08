<template>
  <v-card :color="selected ? 'blue lighten-5' : 'white'" style="margin-bottom:10px">
   <v-card-title>{{ name }}
     <v-chip v-if="readonly" class="ma-2">Read only</v-chip>
     <v-chip v-if="selected" color="primary" class="ma-2">Current</v-chip>
    </v-card-title>
   <v-card-subtitle>{{ host }}</v-card-subtitle>
   <v-card-actions>
     <v-btn :disabled="selected" color="success" @click="$emit('select', id)">Select</v-btn>
     <v-btn :disabled="selected" color="error" @click="$emit('delete', id)">Delete</v-btn>
   </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['name', 'host', 'selected', 'id', 'readonly'],
  data: function () {
    return {}
  },
}
</script>
