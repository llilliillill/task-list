<template>
    <button>
        <slot></slot>
    </button>
</template>

<script>
    export default {
        name: 'button-green'
    }
</script>

<style scoped>
    button {
        background: green;
        color: white;
        border: 1px solid green;
        border-radius: 3px;
        padding: 5px;
        height: 35px;
        cursor: pointer;
    }
</style>