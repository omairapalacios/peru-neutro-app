<template>
  <v-app>
    <v-content>
      <router-view />
      <v-bottom-navigation app
      value="value"
      height="80"
      class="d-flex justify-space-around align-center ">
        <v-col v-for="view in views" :key="view.title"
        color="white" class="text-center"
         @click="$router.push({
           name: view.name
         })">
          <v-icon>{{view.icon}}</v-icon>
          <span>{{view.title}}</span>
        </v-col>
      </v-bottom-navigation>
    </v-content>
  </v-app>
</template>

<script>
export default {
  data: () => ({
    value: 1,
    views: [
      {
        title: 'Mi huella',
        icon: 'home',
        name: 'Home',
      },
      {
        title: 'Mis avances',
        icon: 'home',
        name: 'MyAdvances',
      },
      {
        title: 'Mi perfil',
        icon: 'home',
        name: 'MyProfile',
      },
    ],
  }),
};
</script>
