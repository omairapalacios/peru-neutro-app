<template>
  <v-container class="container d-flex justify-center align-center"
    ><v-form class="d-flex flex-column align-center">
      <v-row class="d-flex flex-column align-self-start mx-2 my-5">
        <h2>Mide tu Huella</h2>
        <p>Ingresa tus datos para registrarte</p>
      </v-row>
      <v-row class="d-flex flex-column mx-2"
        ><label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="f_lastname"
          >Apellido Paterno</label
        >
        <v-text-field
          outlined
          dense
          name="f_lastname"
          placeholder="Apellido Paterno"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Apellido Materno</label
        >
        <v-text-field
          outlined
          dense
          name="m_lastname"
          placeholder="Apellido Materno"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Fecha de Nacimiento</label
        >
        <v-text-field
          outlined
          dense
          type="date"
          name="birthday"
          placeholder="dd/mm/yyyy"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Celular</label
        >
        <v-text-field
          outlined
          dense
          type="number"
          name="phone"
          placeholder="999999999"
        ></v-text-field
      ></v-row>
      <v-btn width="100%" class="rounded-xl my-5" color="secondary">
        Continuar</v-btn
      ></v-form
    ></v-container
  >
</template>
<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
