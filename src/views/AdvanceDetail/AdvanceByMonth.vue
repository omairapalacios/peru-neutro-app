<template>
  <v-row justify="center">
    <v-col cols="10">
      <!-- eslint-disable-next-line vue/max-attributes-per-line -->
      <v-carousel :show-arrows="false" height="250" >
        <v-carousel-item>
          <v-row justify="space-around" align="center" class="mt-12">
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
    </v-col>
  </v-row>
</template>

<script>

export default {
  data: () => ({
    listOfMonths: ['Ago', 'Sep', 'Oct', 'Nov', 'Dic', 'Ene', 'Feb'],
  }),
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
