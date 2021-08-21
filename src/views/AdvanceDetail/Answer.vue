<template>
    <v-row
      justify="center"
      align="center"
      class="pa-5"
    >
      <v-col cols="2" class="my-0 py-0">
        <v-icon large color="green darken-2" class="my-0 py-0">
          mdi-gas-station-outline
        </v-icon>
      </v-col>
      <v-col cols="7" class="my-0 py-0">
        <p class="my-0 py-0">{{date}}</p>
      </v-col>
      <v-col cols="3" class="my-0 py-0">
          <span>{{answer.value}} GAL</span>
      </v-col>
    </v-row>
</template>

<script>
import dayjs from 'dayjs';

export default {
  props: {
    answer: {
      type: Object,
    },
    milliseconds: {
      type: String,
    },
  },
  computed: {
    date() {
      return dayjs(new Date(Number(this.milliseconds))).format('DD/MM/YYYY');
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
