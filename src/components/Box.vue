<template>
    <div class="box has-text-weight-bold">
        <slot></slot>
    </div>
</template>
<script>
import { defineComponent } from 'vue';
export default defineComponent({
    name: 'Box',

})
</script>
<style>
.box {
    background-color: rgb(240, 177, 101);
}
</style>