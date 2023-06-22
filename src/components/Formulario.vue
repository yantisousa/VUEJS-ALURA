<template>
    <div class="box">
        <div class="columns">
            <div class="column is-7" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input v-model="descricao" type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column ">
                <Temporizador @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import Temporizador from './Temporizador.vue';
export default defineComponent({
    name: 'Formulário',
    emit: [
        'aoSalvarTarefa'
    ],
    components: {
        Temporizador
    },
    data () {
        return {
            descricao: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido) {
            this.$emit('aoSalvarTarefa', {
                descricaEmSegundos: tempoDecorrido,
                descricao: this.descricao
            })
            this.descricao = '';
        }
    }

})
</script>
<style></style>