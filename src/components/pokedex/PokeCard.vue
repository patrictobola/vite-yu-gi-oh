<script>
// import { store } from '../../data/store'

export default {
    props: {
        image: String,
        name: String,
        type: String
    },

}
</script>
<template>
    <div class="image-container">
        <img :src="image" alt="">
    </div>
    <p>{{ name }}</p>
    <p>{{ type }}</p>
</template>
<style scoped>
.image-container {
    width: 100%;
    height: 70%;
}
</style>