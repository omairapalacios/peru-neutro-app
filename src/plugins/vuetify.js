import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';
import es from 'vuetify/es5/locale/es';

Vue.use(Vuetify);

export default new Vuetify({
  theme: {
    themes: {
      light: {
        primary: '#2276BB',
        secondary: '#323F4B',
        sky: 'D5E6FB',
      },
      dark: {
        primary: '#2276BB',
        secondary: '#323F4B',
      },
    },
  },
  lang: {
    locales: { es },
    current: 'es',
  },
});
