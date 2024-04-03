<template>
    <form @submit.prevent>
        <section>
            <div class="header">
                <span class="title">Добавить задачу:</span>
                <button-close @click="this.openTaskForm" />
            </div>

            <span class="error">{{ taskError.title }}</span>
            <input 
                v-focus
                type="text"
                v-model="task.title" 
                class="text-task" 
                placeholder="Название"
            >

            <span class="error">{{ taskError.text }}</span>
            <input 
                type="text"
                v-model="task.text" 
                class="text-task" 
                placeholder="Описание"
            >
            
            <button-green
                class="add-task" 
                @click="this.addTask"
            >
                Добавить
            </button-green>
        </section>
    </form>
</template>

<script>
    import { mapState, mapActions } from 'pinia';
    import { useTaskStore } from '@/stores/TaskStore';

    export default {
        computed: {
            ...mapState(useTaskStore, [
                'task',
                'taskError'
            ])
        },

        methods: {
            ...mapActions(useTaskStore, [
                'openTaskForm',
                'addTask'
            ])
        }
    }
</script>

<style scoped>
    form {
        top: 0;
        bottom: 0;
        right: 0;
        left: 0;
        background: rgba(0, 0, 0, 0.5);
        position: fixed;
        display: flex;
    }

    section {
        margin: auto;
        background: white;
        border-radius: 3px;
        min-height: 50px;
        min-width: 300px;
        padding: 10px;
    }

    /* Заголовок модального окна */
    .header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 10px;
    }

    .title {
        font-weight: bold;
    }

    /* Содержимое модального окна */
    .text-task {
        width: 300px;
        margin-bottom: 10px;
        padding: 5px;
        font-size: 18px;
        display: block;
    }

    .add-task {
        width: 100%;
    }

    /* Сообщение об ошибке */
    .error {
        color: red;
    }
</style>