<template>
  <v-card class="mx-auto rounded-lg" max-width="344" outlined rounded>
    <v-card-text>
      <v-row>
        <v-col cols="12" class="py-0 my-0">
          <span class="txtTitle">{{ data.title }}</span>
        </v-col>
        <v-row justify="space-around" class="px-3 pt-1 pb-3"
          ><v-col cols="10">
            <p class="txtName">
              {{ data.name }}
            </p>
          </v-col>
          <v-col cols="2">
            <input
              type="radio"
              :id="data.id"
              @click="onChangeRadio($event)"
              :checked="radioChecked"
            />
          </v-col>
        </v-row>
      </v-row>
      <v-divider></v-divider>
      <v-row class="py-10"></v-row>
      <v-divider></v-divider>
      <v-row justify="space-between" class="mt-2">
        <v-col cols="9">
          <v-chip outlined color="disabled" class="txtDate">
            {{ data.date }}
          </v-chip>
        </v-col>
        <v-col cols="3"
          ><span class="txtPoints">{{ data.points }}</span>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  props: ['data'],
  data: () => ({
    radioChecked: false,
  }),
  methods: {
    onChangeRadio() {
      this.radioChecked = !this.radioChecked;
      this.updateGlobalHuellaPoints();
    },
    updateGlobalHuellaPoints() {
      if (this.radioChecked) {
        this.$store.commit('ADD_HUELLA_POINTS', this.data.points);
      } else {
        this.$store.commit('REMOVE_HUELLA_POINTS', this.data.points);
      }
    },
  },
};
</script>

<style scoped>
input[type="radio"] {
  height: 20px;
  width: 20px;
}
.txtTitle {
  font-family: "Mulish";
  font-size: 10px;
  color: #2f80ed;
  line-height: 8px;
  font-weight: 800;
  letter-spacing: 1.5;
}
.txtName {
  font-family: "Mulish";
  font-size: 15px;
  font-weight: 700;
  color: #323f4b;
  letter-spacing: 0.5;
  line-height: 19px;
}
.txtDate {
  font-family: "Mulish";
  font-size: 10px;
  font-weight: 400;
  color: #323f4b;
  padding: "0 5";
}
.txtPoints {
  font-family: "Mulish";
  font-size: 15px;
  font-weight: 700;
  color: #323f4b;
  letter-spacing: 0.5;
  line-height: 19px;
  text-align: end;
}
</style>
