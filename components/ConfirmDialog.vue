<template>
  <v-dialog v-model="displayDialog" max-width="500px" @click:outside="cancel">
    <v-card>
      <v-card-title>{{ title }}</v-card-title>
      <v-card-text>
        {{ text }}
      </v-card-text>
      <v-card-actions>
        <v-btn text @click="cancel">Cancel</v-btn>
        <v-btn text @click="confirm">{{ verb }}</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>
<script>
export default {
  props: {
    title: String,
    text: String,
    verb: String,
    displayDialog: Boolean,
  },
  methods: {
    confirm() {
      this.$emit("confirm");
    },
    cancel() {
      this.$emit("cancel");
    },
  },
};
</script>

