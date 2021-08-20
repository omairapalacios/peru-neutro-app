<template>
  <v-row >
      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
      <v-carousel :show-arrows="false" height="200" >
        <v-carousel-item>
          <v-row justify="space-around" align="center" class="mt-2">
            <div v-for="(item, index) in listOfMonths" :key="item">
              <p>{{ item }}</p>
              <v-btn icon color="green" v-if="index == 0">
                <v-icon>mdi-checkbox-marked-circle </v-icon>
              </v-btn>
              <v-btn icon color="gray" v-else>
                <v-icon>mdi-checkbox-blank-circle-outline</v-icon>
              </v-btn>
            </div>
          </v-row>
        </v-carousel-item>
        <v-carousel-item>
          <p>hola</p>
        </v-carousel-item>
      </v-carousel>
  </v-row>
</template>

<script>
/* eslint-disable no-param-reassign */
export default {
  data: () => ({
    listOfMonths: ['Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb'],
  }),
  methods: {
    msToTime(s) {
      // Pad to 2 or 3 digits, default is 2
      function pad(n, z) {
        z = z || 2;
        return (`00${n}`).slice(-z);
      }

      const ms = s % 1000;
      s = (s - ms) / 1000;
      const secs = s % 60;
      s = (s - secs) / 60;
      const mins = s % 60;
      const hrs = (s - mins) / 60;

      return `${pad(hrs)}:${pad(mins)}:${pad(secs)}.${pad(ms, 3)}`;
    },
  },
};
</script>

<style scoped>
.v-carousel__controls {
  background: blue !important;
}

.v-carousel__controls__item {
  color: red !important;
}
</style>
