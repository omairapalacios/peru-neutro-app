<template>
  <div>
    <Toolbar :title="currentAdvanceDetail.title" :goBack="goBack" />
    <AdvanceByMonth/>
    <CarbonEmissions porcentage='0.28'/>
    <RegisterConsume :answer="currentAdvanceDetail.answers"/>
  </div>
</template>

<script>
import data from '@/mocks/answers.json';

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
    console.log(this.$route.params);
    [this.currentAdvanceDetail] = data.filter((e) => e.sectionId === this.$route.params.id);
    console.log(this.currentAdvanceDetail.answers);
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>
