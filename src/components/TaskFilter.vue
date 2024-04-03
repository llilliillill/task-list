<template>
    <section>
        <input
            v-focus
            type="search"
            v-model="query.search"
            placeholder="найти по названию"
        >
        <select v-model="query.select">
            <option value="all" selected>Все</option>
            <option value="completed">Завершенные</option>
            <option value="unfinished">Незавершенные</option>
        </select>
    </section>
</template>

<script>
    import { mapState } from 'pinia';
    import { useTaskStore } from '@/stores/TaskStore';

    export default {
        computed: {
            ...mapState(useTaskStore, [
                'query'
            ])
        }
    }
</script>

<style scoped>
    section {
        display: flex;
    }

    input {
        flex: 1;
        margin-bottom: 10px;
        padding: 5px;
        font-size: 18px;
        outline: none;
    }

    select {
        height: 35px;
    }
</style>