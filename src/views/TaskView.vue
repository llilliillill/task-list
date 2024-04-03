<template>  
    <header>Задача №{{ $route.params.id }}</header>

    <task-item 
        :task="getTaskById($route.params.id)" 
        :showButtons="false"
    />
</template>

<script>
    import TaskItem from '@/components/TaskItem.vue'
    import { mapState } from 'pinia';
    import { useTaskStore } from '@/stores/TaskStore';
    
    export default {
        components: {
            TaskItem
        },

        computed: {
            ...mapState(useTaskStore, [
                'getTaskById'
            ])
        }
    }
</script>

<style scoped>
    header {
        margin: 15px 0;
        display: flex;
        font-weight: bold;
        font-size: 20px;
        flex: 1;
    }
</style>