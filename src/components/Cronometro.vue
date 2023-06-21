<template>
    <section>
        <strong>{{ tempoDecorrido }}</strong>
    </section>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Cronometro',
    props: {
        tempoEmSegundos: {
            type: Number, 
            default: 0
        }
    },
    computed: {
        tempoDecorrido() {
            return new Date(this.tempoEmSegundos * 1000).toGMTString().substr(17, 8);
        },
    },
})
</script>