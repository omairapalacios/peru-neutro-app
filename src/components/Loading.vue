<template>
  <div class="loading-view d-flex flex-column justify-center align-center">
    <DotLoader
      class="ring-loader"
      color="green"
      :loading="loading"
      :size="60"
      sizeUnit="px"
    />
    <p class="mt-4 font-weight-thin"><strong>Cargando, por favor espere un momento...</strong></p>
  </div>
</template>

<script>
import { DotLoader } from '@saeris/vue-spinners';

export default {
  components: { DotLoader },
  props: {
    loading: {
      type: Boolean,
    },
  },
};
</script>

<style lang="scss" scoped>
.loading-view {
  height: 90vh;
  width: 100%;
}
</style>
