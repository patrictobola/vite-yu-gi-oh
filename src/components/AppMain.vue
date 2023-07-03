<script>
import { store } from '../data/store';
import PokeCard from '../components/pokedex/PokeCard.vue';
export default {
    components: {
        PokeCard,
    },
    data() {
        return {
            store,
        }
    }
}
</script>
<template>
    <div class="container">
        <h1>Pokedex</h1>
        <div class="pokedex">
            <div v-for="pokemon in store.docs" class="card">
                <PokeCard :store="pokemon" />
            </div>
        </div>
    </div>
</template>
<style>
.container {
    max-width: 1200px;
    margin: 0 auto;
}

.pokedex {
    display: flex;
    flex-wrap: wrap;

}

p {
    text-align: center;
}

.card {
    width: calc(100% / 5 - 40px);
    min-height: 250px;
    padding: 20px;
    background-color: lightseagreen;
}

img {
    width: 100%;
}
</style>
