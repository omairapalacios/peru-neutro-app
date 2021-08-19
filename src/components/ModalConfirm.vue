<template>
  <v-dialog v-model="dialogConfirm" max-width="450px">
    <v-card class="d-flex flex-column justify-center align-center py-8 rounded-xl">
      <slot></slot>
      <div class="d-flex justify-center">
        <span class="py-4 body-1 black--text font-weight-bold">{{ dialog.title }}</span>
      </div>
      <v-card-text class="px-4 text-center">
        {{ dialog.description }}
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn
          width="200px"
          class="rounded-xl"
          color="secondary"
          @click="
            $emit('function-confirm');
            dialogConfirm = false;
          "
        >
          {{ dialog.textBtn }}</v-btn
        >
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  props: {
    value: Boolean,
    data: {
      type: Object,
    },
  },
  data() {
    return {};
  },
  computed: {
    dialogConfirm: {
      get() {
        return this.value;
      },
      set(value) {
        this.$emit('input', value);
      },
    },
    dialog() {
      return this.$props.data;
    },
  },
};
</script>

<style></style>
