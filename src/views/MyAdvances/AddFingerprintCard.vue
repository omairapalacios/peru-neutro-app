<template>
  <v-card  class="mx-0 px-3 py-1 d-flex rounded-lg align-center">
    <v-img class="img-preference"
    :src=" `${require(`@/assets/images/${preference.svg}.svg`)}`"
    max-width="50"  height="50"/>
    <v-card-text class="mx-5">{{preference.title}}</v-card-text>
      <v-btn icon large class="ml-auto"
      @click="$router.push({
        name: 'AdvanceDetail',
        params: {
        sectionId : preference.sectionId,
        supplyNumber: preference.supplyNumber,
        formId: preference.formId
        }
        })">
        <v-icon >add</v-icon>
      </v-btn>
  </v-card>
</template>

<script>
export default {
  props: {
    preference: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '@/styles/_classes';
.img-preference{
    @extend %img-general
}
</style>
