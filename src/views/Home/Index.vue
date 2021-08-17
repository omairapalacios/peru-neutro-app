<template>
  <v-container>
    <Toolbar title="Registro de Huella" />
    <Sections :sections="sections" />
  </v-container>
</template>

<script>
export default {
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
    Sections: () => import('./Sections.vue'),
  },
  data() {
    return {
      sections: [
        {
          title: 'Uso de Transporte',
          icon: 'home',
          form: 'form-transport-footprint',
        },
        {
          title: 'Generación de Energía',
          icon: 'home',
          form: 'form-energy-footprint',
        },
        {
          title: 'Consumo de E.Eléctrica',
          icon: 'home',
          form: 'form-electric-footprint',
        },
        {
          title: 'Consumo de agua',
          icon: 'home',
          form: 'form-water-footprint',
        },
        {
          title: 'Generacion de NF3',
          icon: 'home',
          form: 'form-nf3-footprint',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
