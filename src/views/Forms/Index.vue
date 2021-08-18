<template>
    <div>
        <Toolbar title="Uso de Transporte" />
        <ProgressBar :progress="progress"/>
        <div class="forms">
            <v-row v-for="questionForm in currentPage" :key="questionForm.question">
                <FormSelect
                 v-if="questionForm.type ==='select'"
                :question="questionForm.question"
                :options="questionForm.options"/>
            </v-row>
        </div>
         <v-row class="actions d-flex justify-center">
             <v-btn
                v-if="currentPageNumber+1<totalPages"
                class="btn-dark" @click="currentPageNumber ++">
                Continuar
            </v-btn>
            <v-btn
                 v-else
                class="btn-dark">
                Registrar huella de carbono
            </v-btn>
         </v-row>
    </div>
</template>

<script>
import form from '@/mocks/forms.json';

export default {
  data: () => ({
    currentForm: [],
    currentPageNumber: 0,
  }),
  created() {
    // mock de traer form por id
    [this.currentForm] = form.filter((e) => e.formId === this.formId);
  },
  computed: {
    formId() {
      return this.$route.params.formId;
    },
    totalPages() {
      return this.currentForm.pages.length;
    },
    currentPage() {
      return this.currentForm.pages[this.currentPageNumber];
    },
    progress() {
      return ((this.currentPageNumber + 1) * 100) / this.totalPages;
    },
  },
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
    ProgressBar: () => import('../../components/ProgressBar.vue'),
    FormSelect: () => import('./FormSelect.vue'),
  },

};
</script>

<style lang="scss" scoped>
.forms{
    height: 70vh !important;
}
.actions{
    height: 20vh !important;
    width: 100% !important;
}
</style>
