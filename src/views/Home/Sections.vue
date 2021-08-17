<template>
  <v-row class="d-flex flex-wrap justify-center my-5">
    <v-card
      :key="item.form"
      v-for="(item, index) in sections"
      width="120px"
      :class="[
        'pa-2 d-flex flex-column justify-center text-center align-center',
        `item-${index}`,
      ]"
      outlined
      color="transparent"
      ><v-card
        width="80px"
        height="80px"
        class="d-flex border-blue rounded-circle justify-center text-center align-center"
      >
        <v-card
          width="50px"
          height="50px"
          color="sky"
          class="d-flex rounded-circle justify-center text-center"
        >
          <v-icon class="material-icons-outlined" color="primary">{{
            item.icon
          }}</v-icon></v-card
        ></v-card
      ><small class="caption my-2">{{ item.title }}</small></v-card
    ></v-row
  >
</template>

<script>
export default {
  props: {
    sections: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style lang="scss" scoped>
.border-blue {
  border: 7px #2f80ed solid !important;
}
.item-0 {
  margin: 0 45px !important;
}
</style>
