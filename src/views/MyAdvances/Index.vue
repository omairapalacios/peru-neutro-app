<template>
    <div>
        <v-card class="pa-5">
            <h1 class="text-title">Hola Jeff</h1>
            <Accumulate/>
        </v-card>
         <div v-for="preference in preferences" :key="preference.title">
                <AddFingerprint :preference="preference"/>
            </div>
    </div>
</template>

<script>
import mockPreferences from '@/mocks/preferences.json';
import forms from '@/mocks/forms.json';

export default {
  data: () => ({
    preferences: [],
    userId: '1234567890',
  }),
  components: {
    AddFingerprint: () => import('./AddFingerprint.vue'),
    Accumulate: () => import('./Accumulate.vue'),
  },
  created() {
    // mock getPreferencebyId

    this.preferences = mockPreferences.map((preference) => {
      const [form] = forms.filter((e) => e.formId === preference.formId);
      const { title } = form;
      return {
        ...preference,
        title,
      };
    });
  },
};
</script>

<style lang="scss" scoped>

</style>
