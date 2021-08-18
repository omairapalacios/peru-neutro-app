<template>
<div class="d-flex flex-column align-center">
  <div class="text-center body d-flex flex-column justify-center align-center" >
    <div>
        <v-img src="@/assets/images/congratulations.svg" />
        <p class="text-title">Felicidades</p>
        <p class="text-body">Has registrado con exito tu huella de carbono</p>
    </div>
  </div>
   <v-btn class="btn-dark" @click="$router.push({ name: 'Home'})">
        Continuar
      </v-btn>
</div>
</template>

<script>
export default {
  name: 'Congratulations',
};
</script>

<style lang="scss" scoped>
.body{
   height: 85vh;
}
</style>
