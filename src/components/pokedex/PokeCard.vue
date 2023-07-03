<script>
// import { store } from '../../data/store'

export default {
    props: {
        store: Object
    },

}
</script>
<template>
    <img :src="store.imageUrl" alt="">
    <p>{{ store.name }}</p>
    <p>{{ store.type1 }}</p>
</template>
<style></style>