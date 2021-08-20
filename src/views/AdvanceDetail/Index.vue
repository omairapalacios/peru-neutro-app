<template>
  <div>
    <Toolbar :title="currentAdvanceDetail.title" :goBack="goBack" />
    <AdvanceByMonth/>
    <CarbonEmissions porcentage='0.28'/>
    <RegisterConsume :answer="currentAdvanceDetail.answers"/>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import data from '@/mocks/answers.json';
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
  },
  created() {
    [this.currentAdvanceDetail] = data.filter((e) => e.sectionId === this.$route.params.sectionId);
    console.log(this.currentAdvanceDetail.answers);
  },
  computed: { ...mapState(['user']) },
  methods: {
    async getAnswers() {
      await getDocumentByQuery('ANSWERS', {
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
