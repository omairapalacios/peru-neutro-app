<template>
  <div v-if="currentAdvanceDetail">
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
  },
  mounted() {
    console.log(this.currentAdvanceDetail)
    if (this.currentAdvanceDetail.length !== 0) {
      [this.currentAdvanceDetail] = data.filter((e) => e.sectionId === this.$route.params.sectionId);
      console.log(this.currentAdvanceDetail.answers);
    }
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
<style lang="scss" scoped>
[v-cloak] { display: none }
</style>
