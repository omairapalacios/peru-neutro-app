<template>
    <v-form>
        <h1 class="pa-5">{{question}}</h1>
        <v-row class="d-flex justify-center align-center">
            <v-btn class="btn-light my-3" v-for="option in options" :key="option.name">
                {{option.name}}
            </v-btn>
        </v-row>
    </v-form>
</template>

<script>
export default {
  props: {
    question: {
      type: String,
    },
    options: {
      type: Array,
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_classes';
</style>
