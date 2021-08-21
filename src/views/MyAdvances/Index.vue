<template>
  <div>
    <v-card class="pa-5 light-green lighten-5">
      <v-row class="mb-2">
        <v-btn icon x-large @click="$router.go(-1)">
          <v-icon color="primary">chevron_left</v-icon>
        </v-btn>
      </v-row>
      <h1 class="text-title">Hola {{ user.names }}!</h1>
      <Accumulate :carbone="carbone"/>
    </v-card>
    <Congratulations v-if="carbone>0" />
    <div v-for="preference in preferences" :key="preference.title">
      <AddFingerprintCard :preference="preference" />
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getDocumentByQuery } from '@/services/firebase/methods';
import forms from '@/mocks/forms.json';

export default {
  data: () => ({
    preferences: [],
    answers: [],
  }),
  components: {
    AddFingerprintCard: () => import('./AddFingerprintCard.vue'),
    Accumulate: () => import('./Accumulate.vue'),
    // eslint-disable-next-line import/no-unresolved
    Congratulations: () => import('./Congratulations.vue'),
  },
  computed: {
    carbone() {
      const answers = this.answers.map((e) => e.answers.map((a) => Number(a.value)).reduce((a, b) => a + b, 0));
      const fingerprintTotal = answers.reduce((a, b) => Number(a) + Number(b), 0);
      // mock de formula de huella de carbono
      const fingerprint = fingerprintTotal / 5;
      //
      return fingerprint;
    },
    ...mapState(['user']),
  },
  async created() {
    // mock getPreferencebyId
    this.$store.commit('SET_LAYOUT', 'main-layout');
    await this.getMyPreferences();
    await this.getAnswers();
  },
  methods: {
    async getAnswers() {
      this.answers = await getDocumentByQuery('ANSWERS', {
        key: 'userId',
        value: this.user.userId,
      });
    },
    async getMyPreferences() {
      const myPreferences = await getDocumentByQuery('PREFERENCES', {
        key: 'userId',
        value: this.user.userId,
      });
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
