<script>
import { store } from '../../data/store';
export default {
    data() {
        return {
            prevPage: store.prevPage,
            nextPage: store.nextPage,
            hasPrevPage: store.hasPrevPage,
            hasNextPage: store.hasNextPage
        }
    },
    emits: ['prev-page', 'next']

}

</script>

<template>
    <div class="container">
        <button :disabled="!hasPrevPage" @click="$emit('prev-page', prevPage)">PrevPage</button>
        <button :disabled="!hasNextPage" @click="$emit('next-page', nextPage)">NextPage</button>
    </div>
</template>

<style></style>