<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'button-white'
    }
</script>

<style scoped>
    button {
        padding: 5px 7px;
        cursor: pointer;
    }
</style>