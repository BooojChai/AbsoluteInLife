import Vue from 'vue'
import App from './App.vue'
import "./assets/iconfont/iconfont.css"

//引入VueRouter
import VueRouter from 'vue-router'
//引入路由器
import router from './router'

import ScrollTo from './plugin/scrollTo'

//关闭Vue的生产提示
Vue.config.productionTip = false
//应用插件
Vue.use(VueRouter)
Vue.use(ScrollTo)

new Vue({
  render: h => h(App),
  router,
  beforeCreate() {
		Vue.prototype.$eventbus = this
	},
}).$mount('#app')