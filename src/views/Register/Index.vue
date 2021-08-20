<template>
  <v-container class="container d-flex justify-center align-center"
    ><v-form ref="form" v-model="valid" class="d-flex flex-column align-center">
      <v-row class="d-flex flex-column align-self-start mx-2 my-5">
        <h2>Mide tu Huella</h2>
        <p>Ingresa tus datos para registrarte</p>
      </v-row>
      <v-col cols="12" md="12" sm="12"
        ><label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="f_lastname"
          >Apellido Paterno</label
        >
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          name="f_lastname"
          placeholder="Apellido Paterno"
          v-model.trim="dataUser.f_lastname"
          :rules="[(v) => !!v || 'el campo es requerido']"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Apellido Materno</label
        >
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          name="m_lastname"
          placeholder="Apellido Materno"
          v-model.trim="dataUser.m_lastname"
          :rules="[(v) => !!v || 'el campo es requerido']"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Nombres</label
        >
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          name="names"
          placeholder="Nombres"
          v-model.trim="dataUser.names"
          :rules="[(v) => !!v || 'el campo es requerido']"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Fecha de Nacimiento</label
        >
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          type="date"
          name="birthday"
          placeholder="dd/mm/yyyy"
          v-model.trim="dataUser.birthday"
          :rules="[(v) => !!v || 'el campo es requerido']"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Celular</label
        >
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          type="number"
          name="phone"
          placeholder="999999999"
          v-model.trim="dataUser.phone"
          :rules="[(v) => !!v || 'el campo es requerido']"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Email</label
        >
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          :rules="emailRules"
          type="email"
          name="email"
          placeholder="correo@email.com"
          v-model.trim="email"
        ></v-text-field>
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >Contraseña</label
        >
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          :rules="passwordRules"
          placeholder="*********"
          id="password"
          color="primary"
          name="password"
          :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
          :type="show ? 'text' : 'password'"
          @click:append="show = !show"
          required
          v-model.trim="password"
      /></v-col>
      <small class="red--text" v-if="error">{{ error }}</small>
      <v-btn
        :disabled="!valid"
        width="100%"
        class="rounded-xl my-5"
        color="secondary"
        @click="registerUser"
      >
        Guardar</v-btn
      ></v-form
    >
    <ModalConfirm
      v-model="dialogConfirm"
      :data="dataModal"
      v-on:function-confirm="changeRoute"
    >
      <v-img
        width="100px"
        src="../../assets/images/global_warming.svg"
      ></v-img></ModalConfirm
  ></v-container>
</template>
<script>
import dayjs from 'dayjs';
import { setDocumentById, createAuthUser } from '../../services/firebase/methodos';

export default {
  data() {
    return {
      error: '',
      show: false,
      valid: false,
      email: '',
      password: '',
      dialogConfirm: false,
      dataModal: {
        title: 'Cuenta Activada',
        description: 'Gracias por cuidar nuestro medio ambiente...!!!',
        textBtn: 'Continuar',
      },
      dataUser: {
        names: '',
        f_lastname: '',
        m_lastname: '',
        birthday: '',
        phone: '',
      },
      emailRules: [(v) => !!v || 'El email es requerido'],
      passwordRules: [(v) => !!v || 'La contraseña es requerida'],
    };
  },
  computed: {
    dateBirthday() {
      return dayjs(this.dataUser.birthday).format('YYYY/MM/DD');
    },
  },
  components: {
    ModalConfirm: () => import('../../components/ModalConfirm.vue'),
  },
  methods: {
    changeRoute() {
      this.$router.push('home');
    },
    async registerUser() {
      try {
        this.dataUser.birthday = this.dateBirthday;
        const resp = await createAuthUser(this.email, this.password);
        const { uid } = resp.user;
        setDocumentById('USERS', uid, this.dataUser);
        this.dialogConfirm = true;
      } catch (error) {
        console.log(error.code);
        switch (error.code) {
          case 'auth/email-already-in-use':
            this.error = 'El correo ya se encuentra registrado.';
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
.text {
  height: 10% !important;
}
</style>
