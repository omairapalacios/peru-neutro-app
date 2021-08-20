<template>
 <v-col cols="12" class="py-2">
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
    <v-row justify="space-between" align="center" class="header">
      <v-col cols="6">
        <span>Agosto</span>
      </v-col>
      <v-col cols="6">
        <span> GAL</span>
      </v-col>
    </v-row>
    <v-row v-for="item in answer" :key="item" justify="center" align="center">
      <v-col cols="2" class="my-0 py-0">
        <v-icon large color="green darken-2" class="my-0 py-0">
          mdi-gas-station-outline
        </v-icon>
      </v-col>
      <v-col cols="7" class="my-0 py-0">
        <p class="my-0 py-0">18/08/2021</p>
        <p class="my-0 py-0">Foto cargada</p>
      </v-col>
      <v-col cols="3" class="my-0 py-0">
        <span>2 GAL</span>
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
