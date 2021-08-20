<template>
  <div>
    <Toolbar :title="currentForm.title" :goBack="goBack"/>
    <div class="d-flex flex-column body">
      <ProgressBar :progress="progress" />
      <FormSelect :form="currentPage" :changeSectionId="changeSectionId" :totalPages="totalPages"/>
      <v-row class="actions d-flex justify-center align-center">
        <v-btn
          v-if="currentPageNumber + 1 < totalPages"
          class="btn-dark"
          @click="currentPageNumber++"
        >
          Continuar
        </v-btn>
        <v-btn v-else class="btn-dark"
        @click="saveConfiguration">
          Guardar configuracion
        </v-btn>
      </v-row>
    </div>
  </div>
</template>

<script>
import form from '@/mocks/forms.json';
import { addDocument } from '@/services/firebase/methods';

export default {
  name: 'Forms',
  data: () => ({
    currentForm: [],
    currentPageNumber: 0,
    preference: {
      formId: '',
      userId: '',
      miliseconds: '',
      sectionId: '',
    },
  }),
  created() {
    this.$store.commit('SET_LAYOUT', 'login-layout');
    // mock de traer form por id y uid
    [this.currentForm] = form.filter((e) => e.formId === this.formId);
    const userId = 'EtKqyTS22jPkBG5swy1l95BXS2Z2';
    //
    this.preference.formId = this.formId;
    this.preference.userId = userId;
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
      const progressNumber = ((this.currentPageNumber + 1) * 100) / this.totalPages;
      return progressNumber.toString();
    },
  },
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
    ProgressBar: () => import('../../components/ProgressBar.vue'),
    FormSelect: () => import('./FormSelect.vue'),
  },
  methods: {
    async saveConfiguration() {
      // mock de guardar en firebase
      this.preference.miliseconds = new Date().getTime();
      await addDocument('PREFERENCES', this.preference);
      console.log(this.preference);
      //
      this.$router.push({
        name: 'Congratulations',
      });
    },
    changeSectionId(sectionId) {
      this.preference.sectionId = sectionId;
    },
    goBack() {
      if (this.currentPageNumber === 0) {
        this.$router.go(-1);
      } else {
        this.currentPageNumber -= 1;
      }
    },
  },
};
</script>

<style lang="scss" scoped>
.body {
  height: 90vh !important;
}
.actions {
  height: 20% !important;
}
</style>
