<template>
  <v-app>
    <v-main>
      <router-view />
      <v-bottom-navigation
        app
        value="value"
        height="80"
        class="d-flex justify-space-around align-center"
      >
        <v-row class="d-flex">
          <v-col
            cols="4"
            md="4"
            sm="4"
            v-for="view in views"
            :key="view.title"
            color="white"
            class="text-center d-flex flex-column justify-center align-center"
            @click="
              $router.push({
                name: view.name,
              })
            "
          >
            <v-icon class="icon rounded-circle pa-2" color="secondary">{{
              view.icon
            }}</v-icon>
            <small class="body-2 font-weight-regular">{{ view.title }}</small>
          </v-col>
        </v-row>
      </v-bottom-navigation>
    </v-main>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    views: [
      {
        title: 'Mi huella',
        icon: 'fingerprint',
        name: 'Home',
      },
      {
        title: 'Mis avances',
        icon: 'equalizer',
        name: 'MyAdvances',
      },
      {
        title: 'Mi perfil',
        icon: 'person',
        name: 'RequestCertificate',
      },
    ],
  }),
};
</script>
<style lang="scss">
.icon {
  background: rgb(241, 240, 240);
}
</style>
