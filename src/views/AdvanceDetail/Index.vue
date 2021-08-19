<template>
  <div>
    <Toolbar title="Transporte" :goBack="goBack" />
  </div>
</template>

<script>
export default {
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
  },
  methods: {
    goBack() {
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
