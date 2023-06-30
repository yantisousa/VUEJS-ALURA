<template>
    <section class="projetos">
        <h1 class="title">Projetos</h1>
       <router-link to="/projetos/novo" class="button">
            Novo Projeto

       </router-link>
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
                    <th>
                        Ações
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="(lista, index) in projetos" :key="index">
                    <td>{{index + 1}}</td>
                    <td>{{lista.nome}}</td>
                    <td>{{lista.id}}</td>
                    <td>
                        <router-link :to="`/projetos/${lista.id}`" class="button">
                            Editar
                        </router-link>
                    </td>
                </tr>
            </tbody>
        </table>
    </section>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { computed } from 'vue'
export default defineComponent({
    name: 'Lista',
   
    setup () {
        const store = useStore();
        
        
        return {
            projetos: computed(() => store.state.projeto)
        }
        
    }
})
</script>