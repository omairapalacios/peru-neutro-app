<template>
 <v-col cols="12" class="pb-8">
      <v-row justify="center" align="center" class="">
      <v-col cols="2" class="my-0 py-0">
        <v-icon large color="green darken-2" class="my-0 py-0">
          mdi-gas-station-outline
        </v-icon>
      </v-col>
      <v-col cols="8" class="my-0 py-0"><p class="my-0 py-0">Registra tu consumo del mes</p></v-col>
      <v-col cols="2" class="my-0 py-0">
        <v-icon
          @click="
            $router.push({
              name: 'AddFingerprint',
              params: {
                sectionId: sectionId
              }
            })
          "
          large
          color="black"
          class="my-0 py-0"
        >
          mdi-plus
        </v-icon>
      </v-col>
    </v-row>
  </v-col>
</template>

<script>
export default {
  props: ['month', 'answer'],
  computed: {
    sectionId() {
      console.log(this.$route.params.sectionId);
      return this.$route.params.sectionId;
    },
  },
  created() {
    console.log(this.$props);
  },
};
</script>
