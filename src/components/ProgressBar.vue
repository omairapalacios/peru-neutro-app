<template>
    <v-card class="pa-1 ma-3 progress-bar elevation-0">
        <v-progress-linear :value="progress" height="13"
        background-color="white">
        </v-progress-linear>
    </v-card>
</template>

<script>
export default {
  props: {
    progress: String,
  },
};
</script>

<style lang="scss" scoped>
.progress-bar{
    border: 0.3px solid black;
    border-radius: 10px !important;
}
</style>
