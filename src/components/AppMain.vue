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
                <PokeCard :image="pokemon.imageUrl" :name="pokemon.name" :type="pokemon.type1" />
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
    background-color: slategrey;
    padding: 20px;

}

p {
    text-align: center;
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
