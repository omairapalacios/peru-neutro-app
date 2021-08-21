<template>
  <v-container>
    <v-row justify="center" class="mt-5">
      <v-col cols="10">
        <v-select :items="items" label="Ordenar por" outlined></v-select>
      </v-col>
    </v-row>
    <v-row justify="center" class="my-0 py-0">
      <v-col cols="6">
        <span>{{ toneladas }} Toneladas</span>
      </v-col>
    </v-row>
    <v-row justify="center">
      <v-col cols="11" v-for="user in data" :key="user.id">
        <cardHuella :data="user" />
      </v-col>
    </v-row>
    <footer />
  </v-container>
</template>

<script>
import { mapState } from "vuex";
import { data } from "@/mocks/shopping.json";
import cardHuella from "./cardHuella.vue";
import footer from "./footer.vue";

export default {
  components: {
    cardHuella,
    footer,
  },
  data: () => ({
    data: data,
    items: ["Menor a Mayor", "Mayor a Menor"],
    order: "",
  }),

  computed: {
    ...mapState(["toneladas", "points"]),
  },
};
</script>

<style scoped>
span {
  font-family: "Mulish";
  font-size: 20px;
  font-weight: 400;
  color: #323f4b;
  letter-spacing: 0.15;
  line-height: 24px;
}
</style>
