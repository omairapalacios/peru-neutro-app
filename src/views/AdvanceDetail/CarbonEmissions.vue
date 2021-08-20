<template>
  <v-col cols="12" class="mt-8">
    <p>Emisiones de carbono</p>
    <v-divider></v-divider>
    <v-row class="py-5" justify="center">
      <v-col cols="3">
        <v-progress-circular
          :rotate='360'
          :size='80'
          :width='5'
          :value='porcentaje'
          color= 'gray'
        >{{porcentaje}}</v-progress-circular
      ></v-col>
      <v-col cols="8"
        ><p>
          La huella de carbono se mide en masa de CO2 equivalente (CO2e o CO2eq)
          por mes.
        </p></v-col
      >
    </v-row>
    <v-divider></v-divider>
  </v-col>
</template>

<script>
export default {
  props: ['porcentaje'],
};
</script>

<style lang="scss" scoped>
</style>
