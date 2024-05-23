import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import 'bootstrap/dist/css/bootstrap.min.css'
const app = createApp(App)
// for ([name, comp] of Object.entries(ElementPlusIconsVue)) {
//     app.component(name, comp);
// }
import zhCn from 'element-plus/es/locale/lang/zh-cn'

app.use(ElementPlus, {
  locale: zhCn,
})
Object.keys(ElementPlusIconsVue).forEach((key) => {
    app.component(key, ElementPlusIconsVue[key])
})
app.use(createPinia())
app.use(router)

app.use(ElementPlus)

app.mount('#app')
