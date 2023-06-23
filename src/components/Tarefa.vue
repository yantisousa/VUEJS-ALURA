<template>
    <Box>
            <div class="columns">
                <div class="column is-7">
                    {{ tarefa.descricao || 'Tarefa sem titulo' }}
                </div>
                <div class="column">
                    <Cronometro :tempoEmSegundos="tarefa.duracaoEmSegundos" />
                </div>
            </div>
    </Box>
</template>
<script lang="ts">
import { defineComponent, PropType } from 'vue';
import Cronometro from './Cronometro.vue';
import ITarefa from '../interfaces/ITarefa';
import Box from './Box.vue';
export default defineComponent({
    name: 'Tarefa',
    props: {
        tarefa: {
            type: Object as PropType<ITarefa>,
            required: true
        }
    },
    components: {
        Cronometro,
        Box
    },

})
</script>
<style scoped>
.box {
    background-color: rgb(240, 177, 101);
}
</style>