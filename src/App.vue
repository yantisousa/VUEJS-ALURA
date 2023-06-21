<template>
  <main class="columns is-gap is-multiline">
      <div class="column is-one-quarter">
        <BarraLateral />
      </div>
      <div class="column is-three-quarter">
        <Formulario />
      </div>
  </main>
</template>
<script>
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import Formulario from './components/Formulario.vue'
  export default defineComponent({
    components: {
      BarraLateral,
      Formulario
    }
})
</script>

<style >

</style>
