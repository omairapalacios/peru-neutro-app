<template>
<div>
    <h2 class="text-center">{{form.question}}</h2>
    <v-form class="d-flex flex-column justify-center">
        <div class="d-flex flex-column align-center">
            <v-btn class="btn-light my-3"
            v-for="option in form.options" :key="option"
            @click="saveAnswer(option)">
                {{option}}
            </v-btn>
        </div>
    </v-form>
</div>
</template>

<script>
import getSectionValue from '@/utils/sectionsValues';

export default {
  props: {
    form: {
      type: Object,
    },
    changeSectionId: {
      type: Function,
    },
    totalPages: {
      type: Number,
    },
  },
  methods: {
    saveAnswer(option) {
      if (option === 'NO') {
        this.$router.push({
          name: 'Home',
        });
      } else if (this.totalPages === 1) {
        const section = getSectionValue(this.formId);
        this.changeSectionId(section);
      } else if (!['SI', 'NO'].includes(option)) {
        const section = getSectionValue(this.formId, option);
        this.changeSectionId(section);
      }
    },
  },
  computed: {
    formId() {
      return this.$route.params.formId;
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../styles/_classes';
.v-form {
  height: 65vh !important;
}
</style>
