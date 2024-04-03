import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import components from '@/components/UI'
import directives from '@/directives'

const pinia = createPinia()
const app = createApp(App)

components.forEach(component => {
    app.component(component.name, component)
});

directives.forEach(directive => {
    app.directive(directive.name, directive)
});

app.use(router)
   .use(pinia)
   .mount('#app')
