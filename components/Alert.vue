<template>
  <v-alert
    v-if="alertData"
    :type="alertData.alertType"
    v-model="showAlert"
    dismissible
  >
    {{ alertData.alertMessage }}
  </v-alert>
</template>
<script>
export default {
  data: function () {
    return { showAlert: false };
  },
  computed: {
    alertData: function () {
      // if there is an alert to show
      if (this.$store.state.alert.alertData) {
        // reveal the alert
        this.showAlert = true;

        // set a timer to hide the alert in 5s
        const self = this;
        setTimeout(function () {
          self.showAlert = false;
        }, 5000);
      }

      // return the alert - either an object or null
      return this.$store.state.alert.alertData;
    },
  },
};
</script>
