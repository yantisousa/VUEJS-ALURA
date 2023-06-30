import { createStore } from "vuex";

export const key = Symbol()
export default createStore({
    state: {
        projeto: []
    },
    mutations: {
        'ADICIONA_PROJETO'(state, nomeDoProjeto){
            const projeto = {
                id: new Date().toISOString(),
                nome: nomeDoProjeto
            }
            state.projeto.push(projeto)
        },
        'ALTERA_PROJETO'(state, project){
            const index = state.projeto.findIndex(proj => proj.id == project.id)
            state.projeto[index] = project
        }
    }
    
})  
