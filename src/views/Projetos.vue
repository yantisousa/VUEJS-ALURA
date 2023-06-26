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
        <table class="table is-fullwidth">
            <thead>
                <tr>
                    <th>
                        ID
                    </th>
                    <th>
                        Nome
                    </th>
                    <th>
                        Data
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(projeto, index) in projetos" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{projeto.nome}}</td>
                    <td>{{projeto.id}}</td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import IProjetos from '../interfaces/IProjetos'
export default defineComponent({
    name: 'Projetos',
    data() {
        return {
            nomeDoProjeto: '',
            projetos: []
        }
    },
    methods: {
        salvar() {
            let timestamp = new Date().toISOString()
            console.log(timestamp);
            const projeto: IProjetos = {
                nome: this.nomeDoProjeto,
                id: timestamp
            }
            this.projetos.push(projeto)
            this.nomeDoProjeto = ''
        }
    }
})
</script>