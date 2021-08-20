<template>
  <div>
    <Toolbar title="Avance" :goBack="goBack" />
    <AdvanceByMonth/>
    <CarbonEmissions :fingerprint='fingerprintTotal'/>
    <RegisterConsume/>
    <div v-for="fingerprint in currentAdvanceDetail" :key="fingerprint.user_date">
    <v-row
    justify="space-between" align="center" class="px-4 header text-white">
      <v-col cols="6">
        <span>Agosto</span>
      </v-col>
      <v-col cols="6">
        <span> GAL</span>
      </v-col>
    </v-row>
    <div v-for="answer in fingerprint.answers" :key="answer.questionId">
        <Answer :answer="answer" :miliseconds="fingerprint.miliseconds"/>
    </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getDocumentByQuery } from '@/services/firebase/methods';

export default {
  data: () => ({
    currentAdvanceDetail: [],
  }),
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
    AdvanceByMonth: () => import('./AdvanceByMonth.vue'),
    CarbonEmissions: () => import('./CarbonEmissions.vue'),
    RegisterConsume: () => import('./RegisterConsume.vue'),
    Answer: () => import('./Answer.vue'),
  },
  async created() {
    await this.getAnswers();
  },
  computed: {
    sectionId() {
      return this.$route.params.sectionId;
    },
    fingerprintTotal() {
      const answers = this.currentAdvanceDetail.map((e) => e.answers.map((a) => Number(a.value)).reduce((a, b) => a + b, 0));
      const fingerprintTotal = answers.reduce((a, b) => Number(a) + Number(b), 0);
      // mock de formula de huella de carbono
      const fingerprint = fingerprintTotal / 5000;
      //
      return fingerprint;
    },
    ...mapState(['user']),
  },
  methods: {
    async getAnswers() {
      this.currentAdvanceDetail = await getDocumentByQuery('ANSWERS', {
        key: 'user-section',
        value: `${this.user.userId}-${this.sectionId}`,
      });
    },
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
<style scoped>
.header {
  background-color: #98c450;
}
</style>
