<template>
  <v-row class="d-flex flex-wrap justify-center">
    <v-card
      :key="item.form"
      v-for="item in sections"
      width="300px"
      height="200px"
      class="card mx-4 py-2 px-4 rounded-xl d-flex flex-column justify-center align-center"
      outlined
    >
      <v-row class="d-flex flex-column justify-center align-center py-5">
        <v-avatar
          style="position: absolute; bottom: 40%"
          rounded
          width="200px"
          class="pa-2 my-5"
          height="200px"
        >
          <img width="120" height="120" :src=" `${require(`@/assets/images/${item.svg}.svg`)}`" />
        </v-avatar>
      </v-row>
      <v-row
        style="position: relative"
        class="d-flex flex-column justify-center align-center text-wrap mt-8"
      >
        <h3>{{ item.title }}</h3>
        <p class="subtitle-2 font-weight-regular mt-3">
          {{ item.description }}
        </p>
        <v-radio-group class="my-0 py-0" v-model="item.status">
          <v-radio color="secondary"></v-radio> </v-radio-group
      ></v-row> </v-card
  ></v-row>
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
  data() {
    return {
      radio: 1,
    };
  },
};
</script>

<style lang="scss" scoped>
.card {
  margin: 100px 0 0;
  text-align: center;
}
</style>
