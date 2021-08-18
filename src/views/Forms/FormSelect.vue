<template>
    <v-form>
        <h2 class="pa-5">{{question}}</h2>
        <v-row class="d-flex justify-center align-center">
            <v-btn class="btn-light my-3"
            v-for="option in options" :key="option"
            @click="saveAnswer">
                {{option}}
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
  methods: {
    saveAnswer(option) {
      console.log(option);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_classes';
</style>
