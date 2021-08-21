<template>
  <v-card width="100%" outlined class="py-5">
    <div class="d-flex pa-5 justify-space-between text-center">
        <v-icon class="d-flex" @click="goBack" color="secondary"
          >chevron_left</v-icon
        >
        <v-icon color="secondary">notifications</v-icon>
    </div>
    <v-row class="px-4 d-flex flex-column justify-center align-center text-center">
      <h1 class="pa-5 text-title d-flex align-self-start">Hola {{ user.names }}!</h1>
      <v-img width="100%" class="img" src="@/assets/images/graphic.png" />
      <v-row class="text-value d-flex flex-column aling-center">
        <h2>{{ carbone }}</h2>
        <h4>tCO2e</h4>
        <h1 class="text-title">Agosto</h1>
      </v-row>
    </v-row>
  </v-card>
</template>

<script>
import { mapState } from 'vuex';

export default {
  props: {
    carbone: {
      type: Number,
    },
  },
  computed: {
    ...mapState(['user']),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.text-value {
  position: absolute;
  top: 31vh;
}
</style>
