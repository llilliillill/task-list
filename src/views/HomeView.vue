<template>
  <task-form v-if="showTaskForm" />

  <header>
    <span class="title">Задачи:</span>
    <button-green @click="this.openTaskForm" class="add-task">+ Добавить</button-green>
  </header>

  <task-filter />
  <task-list />
</template>

<script>
  import TaskList from '@/components/TaskList';
  import TaskForm from '@/components/TaskForm';
  import TaskFilter from '@/components/TaskFilter';
  import { mapState, mapActions } from 'pinia';
  import { useTaskStore } from '@/stores/TaskStore';

  export default {
    components: {
      TaskList,
      TaskForm,
      TaskFilter
    },

    computed: {
      ...mapState(useTaskStore, [
        'tasks',
        'showTaskForm'
      ])
    },

    methods: {
      ...mapActions(useTaskStore, [
        'openTaskForm'
      ])
    }
  }
</script>

<style scoped>
  header {
    margin: 15px 0;
    display: flex;
  }

  .title {
    font-weight: bold;
    font-size: 20px;
    flex: 1;
  }
</style>
