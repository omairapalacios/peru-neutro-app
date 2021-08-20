<template>
  <v-container>
    <Toolbar title="Registro de Huella" />
    <v-row class="d-flex flex-wrap justify-center">
      <Section
       v-for="section in forms" :key="section.formId"
      :section="section"
      />
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
    Toolbar: () => import('../../components/ToolBar.vue'),
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
