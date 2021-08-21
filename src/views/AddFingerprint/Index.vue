<template>
  <div>
   <v-toolbar class="ma-0 pa-0 info" elevation="0" color="info" outlined flat>
      <v-btn icon @click="goBack">
        <v-icon color="secondary">chevron_left</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-title">{{ title }}</v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
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
        :rules="[(v) => !!v || 'el campo es requerido']"
      ></v-text-field>
      <div ref="question" v-for="q in section.questions" :accesskey="q.questionId" :key="q.questionId">
        <label
          class="align-self-start subtitle-2 font-weight-bold grey-darken-4--text text-uppercase"
          for="m_lastname"
          >{{ q.question }}
        </label>
        <v-text-field
          class="rounded-lg"
          outlined
          dense
          v-model.number="value"
          placeholder="1000"
          :rules="[(v) => !!v || 'el campo es requerido']"
        ></v-text-field>
      </div>
    </div>
    <v-row class="mt-auto d-flex justify-center align-center">
      <v-btn width="80%" color="secondary"  @click="addFootprint" class="rounded-lg"> Registrar </v-btn>
    </v-row>
  </div>
</template>

<script>
import { mapState } from 'vuex';
import dayjs from 'dayjs';
import sections from '@/mocks/sections.json';
import { addDocument } from '@/services/firebase/methods';

export default {
  computed: {
    ...mapState(['user']),
    sectionId() {
      return this.$route.params.sectionId;
    },
  },
  data: () => ({
    section: {},
    value: '',
    date: '',
    answer: {
      userId: '',
      sectionId: '',
      milliseconds: dayjs().valueOf(),
      user_date: '',
      user_section: '',
      answers: [],
    },
  }),
  created() {
    // mock getSectionById
    [this.section] = sections.filter((e) => e.sectionId === this.sectionId);
  },
  methods: {
    addFootprint() {
      this.answer.userId = this.user.userId;
      this.answer.milliseconds = dayjs(this.date).valueOf();
      this.answer.user_date = `${this.user.userId}-${dayjs(this.date).valueOf()}`;
      this.answer.sectionId = this.sectionId;
      this.answer.user_section = `${this.user.userId}-${this.sectionId}`;
      this.answer.answers.push({
        value: this.value,
        questionId: this.section.questions[0].questionId,
        status: 'registrado',
      });
      addDocument('ANSWERS', this.answer);
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped></style>
