<template>
  <v-container>
    <Toolbar title="Registro de Huella" />
    <Sections :sections="sections" />
  </v-container>
</template>

<script>
/* eslint-disable global-require */
export default {
  created() {
    this.$store.commit('SET_LAYOUT', 'main-layout');
  },
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
    Sections: () => import('./Sections.vue'),
  },
  data() {
    return {
      sections: [
        {
          title: 'Consumo de Combustible',
          image: `${require('@/assets/images/transport.svg')}`,
          description: 'Me comprometo a reducir el cosumo de combustible de mi vehiculo',
          form: 'form-transport-footprint',
        },
        {
          title: 'Generación de Energía',
          image: `${require('@/assets/images/transport.svg')}`,
          description:
            'Me comprometo a reducir el cosumo de combustible utilizado para cocinar',
          form: 'form-energy-footprint',
        },
        {
          title: 'Consumo de E.Eléctrica',
          image: `${require('@/assets/images/transport.svg')}`,
          form: 'form-electric-footprint',
        },
        {
          title: 'Consumo de agua',
          image: `${require('@/assets/images/transport.svg')}`,
          description:
            'Me comprometo a reducir el cosumo de combustible utilizado para cocinar',
          form: 'form-water-footprint',
        },
        {
          title: 'Generacion de NF3',
          image: '../../assets/images/transport.svg',
          form: 'form-nf3-footprint',
        },
      ],
    };
  },
};
</script>
<style lang="scss" scoped></style>
