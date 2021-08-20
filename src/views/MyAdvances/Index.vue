<template>
  <div>
    <v-card class="pa-5 light-green lighten-5">
        <v-row class="mb-2">
            <v-btn icon x-large @click="$router.go(-1)">
      <v-icon color="primary">chevron_left</v-icon>
    </v-btn>
        </v-row>
      <h1 class="text-title">Hola Jeff</h1>
      <Accumulate />
    </v-card>
    <div v-for="preference in preferences" :key="preference.title">
      <AddFingerprintCard :preference="preference" />
    </div>
  </div>
</template>

<script>
import { getDocumentByQuery } from '@/services/firebase/methods';
import forms from '@/mocks/forms.json';

export default {
  data: () => ({
    preferences: [],
    userId: 'EtKqyTS22jPkBG5swy1l95BXS2Z2',
  }),
  components: {
    AddFingerprintCard: () => import('./AddFingerprintCard.vue'),
    Accumulate: () => import('./Accumulate.vue'),
  },
  async created() {
    // mock getPreferencebyId
    this.$store.commit('SET_LAYOUT', 'main-layout');
    await this.getMyPreferences();
  },
  methods: {
    async getMyPreferences() {
      const myPreferences = await getDocumentByQuery('PREFERENCES', { key: 'userId', value: this.userId });
      this.preferences = myPreferences.map((preference) => {
        const [form] = forms.filter((e) => e.formId === preference.formId);
        const { title, svg } = form;
        return {
          ...preference,
          title,
          svg,
        };
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
