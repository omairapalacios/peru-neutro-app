<template>
    <div>
        <v-card class="pa-5">
            <h1>Hola Jeff</h1>
            <Accumulate/>
        </v-card>
    </div>
</template>

<script>
export default {
  components: {
    Accumulate: () => import('./Accumulate.vue'),
  },
};
</script>

<style lang="scss" scoped>

</style>
