<template>
    <div>
        <v-card class="pa-3 ma-4 d-flex card-pref align-center">
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
    </div>
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
.card-pref{
    border-radius: 20px;
}
</style>
