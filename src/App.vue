<script>
import axios from 'axios'
const endpoint = 'https://41tyokboji.execute-api.eu-central-1.amazonaws.com/dev/api/v1/pokemons'
import { store } from './data/store'
import AppMain from './components/AppMain.vue';

export default {
  components: {
    AppMain,
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
    }
  },

  created() {
    this.fetchPokemons()
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
