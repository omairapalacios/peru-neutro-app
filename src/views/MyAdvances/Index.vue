<template>
  <div>
    <v-card class="pa-5 light-green lighten-5">
      <v-row class="mb-2">
        <v-btn icon x-large @click="$router.go(-1)">
          <v-icon color="primary">chevron_left</v-icon>
        </v-btn>
      </v-row>
      <h1 class="text-title">Hola! {{ user.names }}</h1>
      <Accumulate />
    </v-card>
    <div v-for="preference in preferences" :key="preference.title">
      <AddFingerprint :preference="preference" />
    </div>
  </div>
</template>

<script>
import mockPreferences from '@/mocks/preferences.json';
import forms from '@/mocks/forms.json';
import { mapState } from 'vuex';

export default {
  data: () => ({
    preferences: [],
    userId: '1234567890',
  }),
  components: {
    AddFingerprint: () => import('./AddFingerprint.vue'),
    Accumulate: () => import('./Accumulate.vue'),
  },
  computed: {
    ...mapState(['user']),
  },
  created() {
    // mock getPreferencebyId
    this.$store.commit('SET_LAYOUT', 'main-layout');
    this.preferences = mockPreferences.map((preference) => {
      const [form] = forms.filter((e) => e.formId === preference.formId);
      const { title, svg } = form;
      return {
        ...preference,
        title,
        svg,
      };
    });
  },
};
</script>

<style lang="scss" scoped></style>
