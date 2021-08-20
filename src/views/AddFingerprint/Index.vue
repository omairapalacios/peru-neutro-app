<template>
  <div>
    <Toolbar title="Registrar" />
    <div class="pa-5">
    <label
      class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
      for="m_lastname"
      >Fecha
    </label>
    <v-text-field
      class="rounded-lg"
      outlined
      dense
      type="date"
      name="birthday"
      placeholder="dd/mm/yyyy"
      v-model.trim="date"
      :rules="[v => !!v || 'el campo es requerido']"
    ></v-text-field>
    <div v-for="q in section.questions" :key="q.questionId">
      <label
        class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
        for="m_lastname"
        >{{ q.question }}
      </label>
      <v-text-field
        class="rounded-lg"
        outlined
        dense
        placeholder="1000"
        :rules="[v => !!v || 'el campo es requerido']"
      ></v-text-field>
    </div>
    </div>
    <v-row class="mt-auto d-flex justify-center align-center">
      <v-btn class="btn-dark">
        Registrar
      </v-btn>
    </v-row>
  </div>
</template>

<script>
import sections from '@/mocks/sections.json';

export default {
  components: {
    Toolbar: () => import('../../components/ToolBar.vue'),
  },
  data: () => ({
    section: {},
    answer: {
      userId: '1234567890',
      sectionId: 'sectionTransportGasohol01',
      miliseconds: '1629258671',
      user_date: '1234567890-1629258671',
      answers: [
        {
          questionId: 'TransportGasohol01Q1',
          value: '1000',
          status: 'registrado',
        },
      ],
    },
    date: 0,
    answerData: {
      userId: '1234567890',
      sectionId: 'sectionTransportGasohol01',
      miliseconds: '1629258671',
      user_date: '1234567890-1629258671',
    },
  }),
  created() {
    // mock getSectionById
    [this.section] = sections.filter((e) => e.sectionId === this.sectionId);
  },
  computed: {
    sectionId() {
      return this.$route.params.sectionId;
    },
  },
};
</script>

<style lang="scss" scoped></style>
