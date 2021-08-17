<template>
  <v-toolbar class="ma-0 pa-0" elevation="1" color="transparent" outlined flat>
    <v-btn icon>
      <v-icon color="primary">chevron_left</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="body-2">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
  },
};
</script>

<style lang="scss" scoped>
  .v-toolbar{
    height: 10vh !important;
  }
</style>
