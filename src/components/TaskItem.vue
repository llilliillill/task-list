<template>
    <li>
        <input 
            class="checkbox" 
            type="checkbox" 
            @change="this.changeTaskStatus(task.id)" 
            :disabled="!showButtons"
            :checked="task.status"
        >

        <div class="content">
            <RouterLink class="title" :to="`/task/${ task.id }`">
                {{ task.title }}
            </RouterLink>

            <span
                class="task-text" 
                :style="this.getTextDecor(task.status)"
            >
                {{ task.text }}
            </span>
        </div>

        <button-close v-if="showButtons" @click="this.taskDelete(task.id)" />
    </li>
</template>

<script>
    import { RouterLink } from 'vue-router';
    import { mapState, mapActions } from 'pinia';
    import { useTaskStore } from '@/stores/TaskStore';

    export default {
        props: {
            showButtons: Boolean,
            task: {
                type: Object,
                required: true
            }
        },

        computed: {
            ...mapState(useTaskStore, [
                'getTextDecor'
            ])
        },

        methods: {
            ...mapActions(useTaskStore, [
                'changeTaskStatus', 
                'taskDelete',
            ])
        }
    }
</script>

<style scoped>
    li {
        box-shadow: 0px 0px 5px 0px rgba(128, 128, 128, 0.75);
        border-radius: 3px;
        margin-bottom: 10px;
        padding: 5px;
        display: flex;
        align-items: center;
    }

    .checkbox {
        zoom: 2;
        cursor: pointer;
    }

    .content {
        padding-left: 10px;
        flex: 1;
    }

    .title {
        font-weight: bold;
        text-decoration: none;
        display: block;
        color: black;
    }

    .title:hover {
        text-decoration: underline;
    }
</style>