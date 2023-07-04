<script>

export default {
    props: {
        image: String,
        name: String,
        type: String,
        number: Number
    },

}
</script>
<template>
    <span>Pokemon numero: {{ number }} </span>
    <div class="image-container">
        <img :src="image" alt="">
    </div>
    <h1>{{ name }}</h1>
    <p>{{ type }}</p>
</template>


<style scoped>
.image-container {
    width: 100%;
    height: 70%;
}

span {
    display: block;
    padding: 5px 5px 5px 0;
    font-size: 0.7rem;
}

p {
    text-align: center;
}

h1 {
    font-size: 1.4rem;
    text-align: center;
}
</style>