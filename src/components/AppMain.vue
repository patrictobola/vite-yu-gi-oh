<script>
import { store } from '../data/store';
import LoadingMessage from '../components/LoadingMessage.vue';
import PokedexMain from '../components/pokedex/PokedexMain.vue'
export default {
    components: {
        LoadingMessage,
        PokedexMain,
    },
    data() {
        return store
    },
}
</script>
<template>
    <LoadingMessage v-if="isLoading" />
    <PokedexMain v-else />
</template>
<style></style>

