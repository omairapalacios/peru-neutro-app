<template>
  <v-toolbar class="ma-0 pa-0" elevation="1" color="transparent" outlined flat>
    <v-btn icon @click="goBack">
      <v-icon color="primary">chevron_left</v-icon>
    </v-btn>
    <v-spacer></v-spacer>
    <v-toolbar-title class="text-title">{{ title }}</v-toolbar-title>
    <v-spacer></v-spacer>
  </v-toolbar>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
    },
    goBack: {
      type: Function,
      default: () => {
        this.$router.go(-1);
      },
    },
  },
};
</script>

<style lang="scss" scoped>
  .v-toolbar{
    height: 10vh !important;
  }
</style>
