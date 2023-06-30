import { createRouter, createWebHashHistory } from "vue-router";
import Tarefas from '../views/Tarefas.vue'
import Projetos from '../views/Projetos.vue'
import Formulario from '../views/Projetos/Formulario.vue'
const rotas = [
    {
        path: '/',
        name: 'Tarefas',
        component: Tarefas
    },
    {
        path: '/projetos',
        component: Projetos,
        children: [
            {
                path: '',
                name: 'Projetos',
                component: Projetos
            },
            {
                path: '/novo',
                name: 'Novo Projeto',
                component: Formulario,
            },
            {
                path: '/:id',
                name: 'Editar Projeto',
                component: Formulario,
                props: true
            }
        ]
    }
]
const roteador = createRouter({
    history: createWebHashHistory(),
    routes: rotas
})

export default roteador;