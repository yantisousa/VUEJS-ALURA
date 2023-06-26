<template>
    <header>
        <h1>
            <img src="../assets/img/logo.png" alt=""><br>
            <button v-if="!visivel" @click="darkMode()" class="button">Dark Mode</button>
            <button v-else :style="['display:', dinamico]" @click="lightMode()" class="button">Light Mode</button>
        </h1>
        <nav class="panel mt-5">
            <ul >
                <li >
                    <router-link style="color: white !important;" to="/">Tarefas</router-link>
                </li>
                <li>

                    <router-link style="color: white !important;" to="/projetos">Projetos</router-link>
                </li>

            </ul>
        </nav>
    </header>
</template>
<script>
    import { defineComponent } from 'vue';
    export default defineComponent({
        name: 'BarraLateral',
        data () {
            return {
                visivel: false
            }
        },
        methods: {
            darkMode () {
                this.$emit('darkMode');
                this.visivel = true
            },
            lightMode () {
                this.visivel = false
                this.$emit('lightMode')
            }
        }
    })
</script>
<style scoped>
    header {
        padding: 1rem;
        background-color: rgb(44, 94, 139);
        height: 100vh;
    }
    @media only screen and (max-width: 768px){
        header {
            padding: 2.5rem;
            height: auto;
        }
    }
</style>