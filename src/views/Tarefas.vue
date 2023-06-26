<template>
    <Formulario @aoSalvarTarefa="salvarTarefa" />
    <div class="lista">
        <Tarefa v-for="(tarefa, index) in tarefas" :key="index" :tarefa="tarefa" />
    </div>
    <Box v-if="listaEstaVazia">
        VOCÊ NÃO ESTÁ MUITO PRODUTIVO HOJE :(
    </Box>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import BarraLateral from '../components/BarraLateral.vue'
import Formulario from '../components/Formulario.vue'
import Tarefa from '../components/Tarefa.vue'
import ITarefa from '../interfaces/ITarefa'
import Box from '../components/Box.vue'

export default defineComponent({
    components: {
        Formulario,
        Tarefa,
        Box
    },
    data() {
        return {
            tarefas: [] as ITarefa[],
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
    }
})
</script>
  
