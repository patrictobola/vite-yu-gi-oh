<script>
import { store } from '../../data/store';
import PokeCard from '../pokedex/PokeCard.vue'
import SearchSelect from './SearchSelect.vue';
import SearchForm from './SearchForm.vue'
// Creo due variabili con endpoint diversi, uno per avere quello base, cioè tutti i pokemon e il secondo per filtrare quelli necessari 
const typeEndpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?eq[type1]=";
const nameEndpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons?q[name]=";
const endpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons";
// Importo axios chiamare i pokemon al backend direttamente dal pokedex 
import axios from 'axios';
export default {
    components: {
        PokeCard,
        SearchSelect,
        SearchForm,
    },
    data() {
        return {
            store,
            selectedOption: '',
            searchedWord: ''
        }
    },
    methods: {
        // Creo una funzione che mi recuperi dal backend i pokemon 
        fetchPokemons(baseUri, option) {
            store.isLoading = true
            axios.get(`${baseUri}${option}`).then(res => {
                store.docs = res.data.docs;
            }).catch(err => {
                console.error(err.message);
            }).then(() => {
                store.isLoading = false;
            })
        },
        fetchSelectedOption(option) {
            this.selectedOption = option;
            if (!this.selectedOption) {
                this.fetchPokemons(endpoint, this.selectedOption)
            } else this.fetchPokemons(typeEndpoint, this.selectedOption)
        },
        fetchSearchedWord(option) {
            this.searchedWord = option;
            if (!this.searchedWord) {
                this.fetchPokemons(endpoint, this.searchedWord)
            } else this.fetchPokemons(nameEndpoint, this.searchedWord)
        }
    }
}
</script>

<template>
    <div class="container">
        <h1>Pokedex</h1>

        <SearchSelect @selected-option="fetchSelectedOption">Cerca quì il tuo pokemon per tipo:</SearchSelect>

        <SearchForm @searched-word="fetchSearchedWord" placeholder="Cerca il tuo pokemon" />

        <div class="pokedex">
            <div v-for="pokemon in store.docs" class="card">
                <PokeCard :image="pokemon.imageUrl" :key="pokemon._id" :name="pokemon.name" :type="pokemon.type1"
                    :number="pokemon.number" />
            </div>
        </div>
    </div>
</template>
<style lang="scss">
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