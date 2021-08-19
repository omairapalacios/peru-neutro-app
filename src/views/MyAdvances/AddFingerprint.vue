<template>
    <div>
        <v-card>
            {{preference.title}}
        </v-card>
    </div>
</template>

<script>
export default {
  props: {
    preference: {
      type: Object,
    },
  },
};
</script>

<style lang="scss" scoped>

</style>
