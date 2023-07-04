<script>
import { store } from '../../data/store';
export default {
    data() {
        return {
            selectedOption: '',
            options: store.pokemonType
        }
    },
}
</script>
<template>
    <div>
        <slot></slot>
        <select name="option" id="options" v-model="selectedOption">
            <option value="" selected>Tutti</option>
            <option v-for="option in options" :value="option">{{ option }}</option>
        </select>
        <button @click="$emit('selected-option', selectedOption)">Cerca!</button>
    </div>
</template>
<style></style>