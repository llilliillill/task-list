import { defineStore } from 'pinia'

export const useTaskStore = defineStore('TaskStore', {
    state: () => ({
        tasks: [
            {
                id: 1,
                title: 'Задача 1: Создание интерфейса',
                text: 'Создайте простое Vue 3 приложение с использованием Pinia и Vue Router',
                status: true                        
            },
            {
                id: 2,
                title: 'Задача 2: Фильтрация и поиск',
                text: 'Добавьте возможность фильтрации задач',
                status: false                        
            },
            {
                id: 3,
                title: 'Задача 3: Редактирование задачи',
                text: 'Добавьте возможность редактирования задач',
                status: false                        
            }
        ],

        task: {
            title: '',
            text: ''
        },

        query: {
            search: '',
            select: 'all'
        },

        taskError: {
            title: '',
            text: ''
        },

        idEditTask: 0,
        showTaskForm: false
    }),

    getters: {
        // Делаем текст задачи зачеркнутым, если status задачи true (выполнено)
        getTextDecor: (state) => (status) => {
            let style = { textDecoration: 'none' }
            if (status) style.textDecoration = 'line-through';
            return style
        },

        // Получить задачу по id
        getTaskById: (state) => (idTask) => {
            return JSON.parse(JSON.stringify(
                state.tasks.filter(task => task.id == idTask))
            )[0]
        },

        // Сортировка задач завершеные/незавершеные
        getSortedTasks(state) {
            let result = state.tasks

            if (state.query.select === 'completed') {
                result = state.tasks.filter(task => task.status)
            }
            
            if (state.query.select === 'unfinished') {
                result = state.tasks.filter(task => !task.status)
            }

            return result
        },

        // Поиск задач с сортировкой
        getSortedAndSearchedTasks(state) {
            return state.getSortedTasks.filter(task => 
                task.title.toLowerCase().includes(state.query.search.toLowerCase())
            )
        }
    },

    actions: {
        // Изменяем статус задачи при нажатии на checkbox
        changeTaskStatus(idTask) {
            this.tasks.map(task => {
                if (task.id === idTask) task.status = !task.status;
            })
        },

        // Удалить задачу
        taskDelete(idTask) {
            this.tasks = this.tasks.filter(task => task.id !== idTask)
        },

        // Изменить задачу
        taskEdit() {
            this.tasks = this.tasks.map(task => { 
                if (task.id === this.idEditTask) {
                    return { ...task, ...this.task }
                } else {
                    return task
                }
            })
            this.openTaskForm()
        },

        // Открыть/закрыть модальное окно добавления задачи
        openTaskForm(objEdit) {
            if (objEdit) {
                this.idEditTask = objEdit.id
                this.task.title = objEdit.title
                this.task.text = objEdit.text
            } else {
                this.idEditTask = 0
                this.task = { title: '', text: '' }
            }
            this.showTaskForm = !this.showTaskForm
        },

        // Добавить задачу
        addTask() {
            if (this.task.title === '') {
                this.taskError.title = 'Заполните название'
            } else {
                this.taskError.title = ''
            }

            if (this.task.text === '') {
                this.taskError.text = 'Заполните описание'
            } else {
                this.taskError.text = ''
            }

            if (this.taskError.title === '' && 
                this.taskError.text === '') {

                this.tasks.push({
                    id: Date.now(),
                    title: this.task.title,
                    text: this.task.text,
                    status: false
                })
                this.task = { title: '', text: '' }
                this.showTaskForm = false
            }
        },
    }
});