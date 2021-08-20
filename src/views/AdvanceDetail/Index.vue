<template>
  <div v-if="currentAdvanceDetail">
    <Toolbar :title="currentAdvanceDetail.title" :goBack="goBack" />
    <AdvanceByMonth/>
    <CarbonEmissions porcentage='0.28'/>
    <RegisterConsume/>
    <v-row justify="space-between" align="center" class="px-4 header text-white">
      <v-col cols="6">
        <span>Agosto</span>
      </v-col>
      <v-col cols="6">
        <span> GAL</span>
      </v-col>
    </v-row>
    <div v-for="fingerprint in currentAdvanceDetail" :key="fingerprint.user_date">
        <Answer :answer="fingerprint"/>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import { getDocumentByQuery } from '@/services/firebase/methods';

export default {
  data() {
    return {
      currentAdvanceDetail: [],
    }
  },
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
    AdvanceByMonth: () => import('./AdvanceByMonth.vue'),
    CarbonEmissions: () => import('./CarbonEmissions.vue'),
    RegisterConsume: () => import('./RegisterConsume.vue'),
    Answer: () => import('./Answer.vue'),
  },
  mounted() {
    console.log(this.currentAdvanceDetail)
    if (this.currentAdvanceDetail.length !== 0) {
      [this.currentAdvanceDetail] = data.filter((e) => e.sectionId === this.$route.params.sectionId);
      console.log(this.currentAdvanceDetail.answers);
    }
  },
  async created() {
    await this.getAnswers();
  },
  computed: { ...mapState(['user']) },
  methods: {
    async getAnswers() {
      this.currentAdvanceDetail = await getDocumentByQuery('ANSWERS', {
        key: 'userId',
        value: this.user.userId,
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
