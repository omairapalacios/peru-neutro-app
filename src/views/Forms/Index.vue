<template>
    <div>
        <Toolbar title="Uso de Transporte" />
        <ProgressBar/>
        <div class="forms">
            <FormSelect question="1. Tienes?"
            :options="[{name: 'Si', action: 'go'}, {name: 'No', action: 'go'}]"/>
        </div>
         <v-row class="actions d-flex justify-center">
             <v-btn class="btn-dark">
                Continuar
            </v-btn>
         </v-row>
    </div>
</template>

<script>
export default {
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
