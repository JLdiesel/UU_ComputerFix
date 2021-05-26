import { createApp } from 'vue'
import App from './App.vue'
import router from './route'
import store from './store/index'
ElContainer
ElHeader
ElMain
ElFooter
import {
    ElButton, ElSelect, ElOption, ElInput, ElAvatar, ElContainer,
    ElIcon,
ElHeader,
ElMain,
ElFooter} from 'element-plus';
const app = createApp(App)
app.use(router).use(store)
    .use(ElButton).use(ElSelect).use(ElOption).use(ElInput).use(ElAvatar).use(ElHeader).use(ElMain).use(ElFooter).use(ElContainer).use(ElIcon)
   .mount('#app')

