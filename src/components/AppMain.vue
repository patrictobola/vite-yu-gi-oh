<script>
import { store } from '../data/store';
import PokeCard from '../components/pokedex/PokeCard.vue';
import LoadingMessage from '../components/LoadingMessage.vue';
export default {
    components: {
        PokeCard,
        LoadingMessage,
    },
    data() {
        return {
            store,
        }
    },
}
</script>
<template>
    <LoadingMessage v-if="store.isLoading" />
    <div v-else class="container">
        <h1>Pokedex</h1>
        <div class="pokedex">
            <div v-for="pokemon in store.docs" class="card">
                <PokeCard :image="pokemon.imageUrl" :name="pokemon.name" :type="pokemon.type1" :number="pokemon.number" />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.loading {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;

    >h1 {
        font-size: 5rem;
    }
}

.container {
    max-width: 1200px;
    margin: 0 auto;
}

.pokedex {
    display: flex;
    flex-wrap: wrap;
    background-color: slategrey;
    padding: 20px;

}

.card {
    width: calc(100% / 5 - 50px);
    min-height: 250px;
    padding: 20px;
    margin: 5px;
    background-color: lightseagreen;
}

img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 20%;
}
</style>
