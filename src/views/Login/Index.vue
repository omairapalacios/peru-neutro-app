<template>
  <v-container
    class="container d-flex justify-center align-center align-items-center align-content-center"
    ><v-form ref="form" v-model="valid" class="d-flex flex-column align-center">
      <img class="my-4" src="../../assets/images/login.svg" alt="persona reciclando" />
      <label
        class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text mx-5 text-uppercase"
        for="email"
        >Email</label
      >
      <v-text-field
        class="rounded-lg"
        outlined
        dense
        :rules="emailRules"
        name="email"
        prepend-inner-icon="email"
        placeholder="correo@email.com"
        v-model.trim="email"
      ></v-text-field>
      <label
        class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text mx-5 text-uppercase"
        for="email"
        >Contraseña</label
      >
      <v-text-field
        class="rounded-lg"
        outlined
        dense
        :rules="passwordRules"
        prepend-inner-icon="lock"
        placeholder="********"
        v-model.trim="password"
      ></v-text-field>
      <v-btn :disabled="!valid" @click="authUser" class="rounded-xl" color="secondary">
        Mide tu huella de carbono</v-btn
      >
      <small class="red--text" v-if="error">{{ error }}</small>
      <p class="body-2 my-4">
        ¿Todavía no tienes una cuenta?
        <strong class="secondary--text" @click="$router.push('register')"
          >Regístrate</strong
        >
      </p></v-form
    ></v-container
  >
</template>
<script>
import {
  signInUser,
  currentUser,
  getDocumentById,
} from '../../services/firebase/methods';

export default {
  data() {
    return {
      valid: false,
      email: '',
      password: '',
      error: '',
      emailRules: [(v) => !!v || 'El email es requerido'],
      passwordRules: [(v) => !!v || 'La contraseña es requerida'],
    };
  },
  methods: {
    async authUser() {
      try {
        await signInUser(this.email, this.password);
        let user = currentUser();
        const userId = user.uid;
        user = await getDocumentById('USERS', user.uid);
        this.$router.push('home');
        this.$store.dispatch('getUser', { email: this.email, userId, ...user });
      } catch (error) {
        console.log(error);
        switch (error.code) {
          case 'auth/user-not-found':
            this.error = 'El usuario no se encuentra registrado';
            break;
          case 'auth/wrong-password':
            this.error = 'La contraseña es incorrecta';
            break;
          case 'auth/invalid-email':
            this.error = 'No se ingresó ningún correo electrónico';
            break;
          default:
            this.error = 'Se ha producido un error';
            break;
        }
      }
    },
  },
};
</script>
<style lang="scss" scoped>
.container {
  height: 100vh;
}
</style>
