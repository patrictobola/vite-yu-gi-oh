<script>
</script>
<template>
    <div class="loading">
        <h1>Loading...</h1>
        <font-awesome-icon icon="fa-solid fa-spinner" class="fa-4x fa-spin" />
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
</style>