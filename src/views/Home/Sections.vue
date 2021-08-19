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
      <v-avatar
        style="position: absolute; bottom: 40%"
        rounded
        width="200px"
        class="pa-2 my-5"
        height="200px"
      >
        <img width="120" height="120" :src="item.image" />
      </v-avatar>
      <h3 class="mt-8">{{ item.title }}</h3>
      <p class="subtitle-2">{{ item.description }}</p>
      <v-radio-group v-model="radioGroup">
        <v-radio v-for="n in 3" :key="n" :label="`Radio ${n}`" :value="n"></v-radio>
      </v-radio-group>
      <v-checkbox
        dark
        v-model="checkbox"
        :label="`Checkbox 1: ${checkbox.toString()}`"
      ></v-checkbox></v-card
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
      radioGroup: 1,
      checkbox: true,
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
