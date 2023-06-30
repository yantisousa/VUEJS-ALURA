<template>
    <div class="box formulario">
        <div class="columns">
            <div class="column is-5" role="form" aria-label="Formulário para criação de uma nova tarefa">
                <input v-model="descricao" type="text" class="input" placeholder="Qual tarefa você deseja iniciar?">
            </div>
            <div class="column is-3">
                <div class="select">
                    <select v-model="idProjeto" name="" id="">
                        <option value="">Selecione seu projeto</option>
                        <option :value="projeto.id"
                        v-for="projeto in projetos"
                        :key="projeto.id"
                        >{{ projeto.nome }}</option>
                    </select>
                </div>
            </div>
            <div class="column ">
                <Temporizador @ao-temporizador-finalizado="finalizarTarefa"/>
            </div>
        </div>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
import { useStore } from 'vuex'
import { computed } from 'vue';
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
            descricao: '',
            idProjeto: ''
        }
    },
    methods: {
        finalizarTarefa (tempoDecorrido) {
            this.$emit('aoSalvarTarefa', {
                duracaoEmSegundos: tempoDecorrido,
                descricao: this.descricao,
                projeto: this.projetos.find(proj => proj.id == this.idProjeto)
            })
            this.descricao = '';
        }
    },
    setup () {
        const store = useStore();
        console.log(store.state);
        return {
            projetos: computed(() => store.state.projeto)
        }
    }

})
</script>
<style>
.formulario {
    color: var(--texto-primario);
    background-color: var(--bg-primario) o !important;
}
</style>