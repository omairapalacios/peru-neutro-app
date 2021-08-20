<template>
  <v-container>
    <Toolbar title="Registro de Huella" />
    <Sections :sections="forms" />
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
    Sections: () => import('./Sections.vue'),
  },
  data() {
    return {
      forms,
    };
  },
};
</script>
<style lang="scss" scoped></style>
