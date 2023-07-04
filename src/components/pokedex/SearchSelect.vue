<script>
import { store } from '../../data/store';
export default {
    data() {
        return {
            selectedType: '',
            options: store.pokemonType
        }
    },
    emits: ['selected-option'],
}
</script>
<template>
    <div>
        <slot></slot>
        <select name="option" id="options" v-model="selectedType">
            <option value="" selected>Tutti</option>
            <option v-for="option in options" :value="pokemon">{{ option }}</option>
        </select>
        <button @click="$emit('selected-option', selectedType)">Cerca!</button>
    </div>
</template>
<style></style>