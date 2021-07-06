<template>
  <div class="text-center" v-if="isBusy">
    <v-progress-linear indeterminate color="light-blue"></v-progress-linear>
  </div>
</template>

<script>
export default {
  props: ["isBusy"],
};
</script>