<template>
    <section v-if="tasks.length">
        <ul class="task-list">
            <task-item 
                :showButtons="true"
                v-for="task in tasks" :key="task.id"
                :task="task"
            />
        </ul>
    </section>

    <section v-else>
        <h4 class="error">Нет задач</h4>
    </section>
</template>

<script>
    import TaskItem from '@/components/TaskItem';
    import { mapState } from 'pinia'
    import { useTaskStore } from '@/stores/TaskStore'

    export default {
        components: {
            TaskItem
        },

        computed: {
            ...mapState(useTaskStore, ['tasks'])
        }
    }
</script>

<style scoped>
    .task-list {
        list-style-type: none;
    }

    .error {
        color: red;
        text-align: center;
    }
</style>