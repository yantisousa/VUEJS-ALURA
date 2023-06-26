import { InjectionKey } from "vue";
import IProjetos from "../interfaces/IProjetos";
import { Store, createStore } from "vuex";
interface Estado {
    projetos: IProjetos[]
}
export const key: InjectionKey<Store<Estado>> = Symbol()

export const sobre = createStore<Estado>({
    state: {
        projetos: [
            {
                id: new Date().toISOString(),
                nome: 'Yam'
            },
            {
                id: new Date().toISOString(),
                nome: 'Yam'
            },
            {
                id: new Date().toISOString(),
                nome: 'Yam'
            }
        ]
    }
})