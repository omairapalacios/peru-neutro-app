<template>
  <v-card
    class="py-1 px-2 d-flex card-pref align-center light-green lighten-2 "
    dark
    @click="
      $router.push({
        name: 'RequestCertificate'
      })
    "
  >
    <v-img src="@/assets/images/certificate.svg" max-width="50" height="50" />
    <v-card-text class="font-weight-bold">
      Felicitaciones por tus buenos resultados te invitamos a la comunidad de Perú neutro
    </v-card-text>
  </v-card>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
