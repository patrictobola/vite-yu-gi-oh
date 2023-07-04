<script>
import axios from 'axios'
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
import { store } from './data/store'
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppMain,
  },
  data() {
    return {

    }
  },
  methods: {
    fetchPokemons() {
      store.isLoading = true
      axios.get(endpoint).then(res => {
        store.docs = res.data.docs;
      }).catch(err => {
        console.error(err.message);
      }).then(() => {
        store.isLoading = false;
      })
    },
    fetchPokemonType() {
      const pokemonTypeEndpoint = "https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons/types1";
      axios.get(pokemonTypeEndpoint).then(res => {
        store.pokemonType = res.data;
      })
    },
  },

  created() {
    this.fetchPokemons();
    this.fetchPokemonType()
  }
}
</script>

<template>
  <AppMain />
</template>

<style>
/* reset  */
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
</style>
