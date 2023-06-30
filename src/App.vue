<template>
  <main :class="['columns is-gap is-multiline', modoEscuro]">
    <div class="column is-one-quarter">
      <BarraLateral @lightMode="showLightMode " @darkMode="showDarkMode" />
    </div>
    <div class="column is-three-quarter conteudo">
      <router-view></router-view>
    </div>
  </main>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from './components/BarraLateral.vue'
import ITarefa from './interfaces/ITarefa'

export default defineComponent({
  components: {
    BarraLateral,
  },
  data() {
    return {
      tarefas: [] as ITarefa[],
      modoEscuro: ''
    }
  },
  computed: {
    listaEstaVazia() {
      return this.tarefas.length === 0;
    }
  },
  methods: {
    salvarTarefa(tarefa: ITarefa) {

      this.tarefas.push(tarefa);
    },
    showDarkMode () {
      this.modoEscuro = 'modo-escuro';
    },
    showLightMode () {
      
      
      this.modoEscuro = '';
    }
  },
  
})
</script>

<style >
.lista {
  padding: 1.2rem;
}
main {
  --bg-primario: #fff;
  --texto-primario: #000
} 
main.modo-escuro {
  --bg-primario: #2b2d42;
  --texto-primario: #ddd
}
.conteudo {
  background-color: var(--bg-primario);
}
</style>
