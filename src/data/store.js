import {reactive} from 'vue';
export const store = reactive({
    docs: [],
    isLoading: false,
    pokemonType: [],
    prevPage: null,
    nextPage: null,
    hasPrevPage: null,
    hasNextPage: null,
})