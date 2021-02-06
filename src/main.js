/*
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-01-29 22:12:17
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-06 15:41:06
 */
import Vue from 'vue'
import router from './router'
import App from './App.vue'

Vue.config.productionTip = false

new Vue({
  // 当key和value一样时可以省略value值
  // 如果上面import的是routes，那下面应该写router:routers
  router,
  render: h => h(App),
}).$mount('#app')
