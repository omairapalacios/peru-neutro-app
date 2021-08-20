<template>
  <v-container class="my-10">
    <v-row class="d-flex mx-5 mt-5">
      <h2 class="secondary--text">¿Cómo quieres ayudar al planeta?</h2>
      <p class="subtitle-2 font-weight-regular">
        Selecciona las opciones con las que quieras ayudar al planeta.
      </p>
    </v-row>
    <v-row class="d-flex flex-wrap justify-center">
      <Section v-for="section in forms" :key="section.formId"
      :section="section" :disabled="preferencesFormId.includes(section.formId)"/>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
import forms from '@/mocks/forms.json';
import { getDocumentByQuery } from '@/services/firebase/methods';

export default {
  name: 'Home',
  async created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
    await this.getMyPreferences();
  },
  components: {
    Section: () => import('./Section.vue'),
  },
  data() {
    return {
      forms,
      preferencesFormId: [],
      userId: 'EtKqyTS22jPkBG5swy1l95BXS2Z2',
    };
  },
  computed: { ...mapState(['user']) },
  methods: {
    async getMyPreferences() {
      const preferences = await getDocumentByQuery('PREFERENCES', { key: 'userId', value: this.userId });
      this.preferencesFormId = preferences.map((e) => e.formId);
    },
  },
};
</script>
<style lang="scss" scoped></style>
