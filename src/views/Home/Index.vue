<template>
  <v-container class="my-10">
    <v-row class="d-flex mx-5 mt-5">
      <h2 class="secondary--text">¿Cómo quieres ayudar al planeta?</h2>
      <p class="subtitle-2 font-weight-regular">
        Selecciona las opciones con las que quieras ayudar al planeta.
      </p>
    </v-row>
    <v-row class="d-flex flex-wrap justify-center">
      <Section v-for="section in forms" :key="section.formId" :section="section" />
    </v-row>
  </v-container>
</template>

<script>
import forms from '@/mocks/forms.json';

export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: {
    Section: () => import('./Section.vue'),
  },
  data() {
    return {
      forms,
    };
  },
};
</script>
<style lang="scss" scoped></style>
