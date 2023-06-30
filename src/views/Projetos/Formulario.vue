<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
        <form @submit.prevent="salvar">
            <div class="field">
                <label for="nomeDoProjeto" class="label">
                    Nome do Projeto
                </label>

                <input type="text" name="" class="input" v-model="nomeDoProjeto" id="nomeDoProjeto">

            </div>
            <div class="field">
                <button type="submit" class="button">
                    Salvar
                </button>
            </div>
        </form>

    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { storeKey, useStore } from 'vuex';
export default defineComponent({
    name: 'Formulario',
    props: {
        id: {
            type: String,
        }
    },
    mounted() {
        if (this.id) {
            const projeto = this.store.state.projeto.find(proj => proj.id == this.id)
            this.nomeDoProjeto = projeto?.nome || ''
        }

    },
    data() {
        return {
            nomeDoProjeto: '',
            projects: []
        }
    },
    methods: {
        salvar() {
            if (this.id) {
                this.store.commit('ALTERA_PROJETO', {
                    id: this.id,
                    nome: this.nomeDoProjeto
                })                
                this.$router.push('/projetos')
            } else {
                let timestamp = new Date().toISOString()
                let projeto = {
                    nome: this.nomeDoProjeto,
                    id: timestamp
                }
                // this.projects.push(projeto)
                this.store.commit('ADICIONA_PROJETO', this.nomeDoProjeto)
                this.nomeDoProjeto = ''
                this.$router.push('/projetos')
            }

        },

    },
    setup() {
        const store = useStore();
        return {
            store
        }

    }
})
</script>