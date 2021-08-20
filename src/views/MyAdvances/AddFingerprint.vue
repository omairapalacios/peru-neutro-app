<template>
    <div>
        <v-card class="pa-3 ma-4 d-flex card-pref align-center">
            <v-img class="img-preference"
            :src=" `${require(`@/assets/images/${preference.svg}.svg`)}`"
            max-width="50"  height="50"/>
            <v-card-title class="mx-5">{{preference.title}}</v-card-title>
             <v-btn icon x-large >
                <v-icon class="ml-auto">add</v-icon>
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
