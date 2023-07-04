<script>
import { store } from '../../data/store';
export default {
    data() {
        return {
            searchedTerm: '',
        }
    },
    props: {
        placeholder: String,
    },
    emits: ['searched-word']
}
</script>
<template>
    <div>
        <slot></slot>
        <form>
            <input type="text" v-model="searchedTerm" :placeholder="placeholder || 'Devi cercare qualcosa'">
            <button @click.prevent="$emit('searched-word', searchedTerm)">Cerca!</button>
        </form>
    </div>
</template>
<style scoped>
/* Normalmente un searchForm generico non dovrebbe avere dello style interno, però per renderlo parzialmente decente l'ho reso uguale all'elemento sopra e ho dato un po' di margin  */
input {
    min-width: 287px;
    margin: 10px 0;
}
</style>