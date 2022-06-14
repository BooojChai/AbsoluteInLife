import Vue from 'vue';
import { Button } from 'element-ui';
import App from './App.vue';
import "./assets/iconfont/iconfont.css"

Vue.config.productionTip = false

Vue.use(Button)

new Vue({
  render: h => h(App),
}).$mount('#app')