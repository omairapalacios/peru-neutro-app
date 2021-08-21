<template>
  <v-col cols="12" class="mt-2">
    <p class="font-weight-bold secondary--text">Emisiones de carbono</p>
    <v-card class="d-flex" color="gray" outlined  justify="center">
      <v-col cols="3">
        <v-progress-circular
          :rotate='360'
          :size='80'
          :width='5'
          :value='fingerprint'
        >{{fingerprint}}</v-progress-circular
      ></v-col>
      <v-col cols="8"
        ><p class="caption mx-4">
          La huella de carbono se mide en toneladas de CO2 equivalente (tCO2e)
          por mes.
        </p></v-col
      >
    </v-card>
    <v-divider></v-divider>
    <div v-if="hasSupplyNumber.includes(formId)">
    <div v-if="supplyNumber || updated" class="pa-3">
      Numero de suminstro : {{supplyNumber || number}}
    </div>
    <div v-else >
    <label
        class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase "
        for="m_lastname"
        >Ingrese número de suministro
      </label>
      <div class="d-flex">
      <v-text-field
        class="rounded-lg"
        outlined
        dense
        v-model="number"
        :rules="[(v) => !!v || 'el campo es requerido']"
      ></v-text-field>
      <v-btn class="light-green lighten-2 mx-2"
      @click="updateSupplyNumber"
      dark>Añadir</v-btn>
      </div>
    </div>
    </div>
     <v-divider></v-divider>
  </v-col>
</template>

<script>
import { mapState } from 'vuex';
import { updateDocumentByQuery } from '@/services/firebase/methods';

export default {
  props: {
    fingerprint: {
      type: Number,
    },
    supplyNumber: {
      type: String,
    },
    formId: {
      type: String,
    },
  },
  data: () => ({
    number: '',
    updated: false,
    hasSupplyNumber: ['form-energy-footprint', 'form-water-footprint', 'form-electric-footprint'],
  }),
  computed: { ...mapState(['user']) },
  methods: {
    async updateSupplyNumber() {
      await updateDocumentByQuery('PREFERENCES', {
        key: 'user_form',
        value: `${this.user.userId}-${this.formId}`,
      }, {
        supplyNumber: this.number,
      });
      this.updated = true;
    },
  },
};

</script>

<style lang="scss" scoped>
</style>
