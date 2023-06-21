<template>
  
        <Cronometro :tempoEmSegundos="tempoEmSegundos" />
        <button @click="iniciar()" class="button" :disabled="cronometroRodando">
            Play
        </button>
        <button @click="finalizar()" class="button" :disabled="cronometroParado">
            Stop
        </button>
</template>
<script>
import { defineComponent } from 'vue'
import Cronometro from './Cronometro.vue'
export default defineComponent({
    name: 'Temporizador',
    emits: [
        'aoTemporizadorFinalizado'
    ],
    components: {
        Cronometro
    },
    data() {
        return {
            tempoEmSegundos: 0,
            cronometro: 0,
            cronometroRodando: false,
            cronometroParado: true,
        }
    },
    methods: {
        iniciar() {
            this.cronometroParado = false;
            this.cronometroRodando = true;
            this.cronometro = setInterval(() => {
                this.tempoEmSegundos++
            }, 1000)
        },
        finalizar() {
            this.cronometroRodando = false;
            clearInterval(this.cronometro);
            this.$emit('aoTemporizadorFinalizado', this.tempoEmSegundos);
            this.tempoEmSegundos = 0;
        }
    }
})

</script>