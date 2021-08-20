<template>
  <v-container class="pa-10">
    <h1 class="secondary--text">{{ user ? user.names : 'Jeff' }}!</h1>
    <v-row class="d-flex flex-column text-center align-center my-6">
      <p class="font-weigth-bold">
        Felicidades te hemos registrado en la comunicadad Perú neutro
      </p>
      <v-img width="100px" src="../../assets/images/certificate.svg"></v-img>
      <p class="font-weigth-regular my-8">Proceso de acreditación</p>
    </v-row>
    <v-stepper class="mt-6 mb-4" flat>
      <v-stepper-header>
        <v-stepper-step complete color="secondary" step="1"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete color="secondary" step="2"></v-stepper-step>
        <v-divider></v-divider>
        <v-stepper-step complete color="secondary" step="3"></v-stepper-step>
      </v-stepper-header>
    </v-stepper>
    <v-row class="d-flex mb-5 align-center justify-space-between"
      ><small>Solicitud</small><small>Revisión</small> <small>Acreditación</small></v-row
    >
    <v-btn width="100%" class="rounded-xl my-5" color="secondary"> Mi certificado</v-btn>
  </v-container>
</template>

<script>
import { mapState } from 'vuex';
export default {
  computed: { ...mapState(['user']) },
};
</script>

<style lang="sass" scoped></style>
