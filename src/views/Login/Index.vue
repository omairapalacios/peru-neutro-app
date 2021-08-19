<template>
  <v-container
    class="container d-flex justify-center align-center align-items-center align-content-center"
    ><v-form class="d-flex flex-column align-center">
      <img class="my-4" src="../../assets/images/login.svg" alt="persona reciclando" />
      <label
        class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text mx-5 text-uppercase"
        for="email"
        >Email</label
      >
      <v-text-field
        outlined
        dense
        name="email"
        prepend-inner-icon="email"
        placeholder="correo@email.com"
        id="id"
      ></v-text-field>
      <label
        class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text mx-5 text-uppercase"
        for="email"
        >Contraseña</label
      >
      <v-text-field
        outlined
        dense
        type="password"
        name="contraseña"
        prepend-inner-icon="lock"
        placeholder="correo@email.com"
        id="id"
      ></v-text-field>
      <v-btn class="rounded-xl" color="secondary"> Mide tu huella de carbono</v-btn>
      <p class="body-2 my-4">
        ¿Todavía no tienes una cuenta? <strong class="secondary--text">Regístrate</strong>
      </p></v-form
    ></v-container
  >
</template>
<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
