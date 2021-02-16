/*
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-01-29 22:12:17
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-16 10:33:51
 */
import Vue from 'vue'
import router from './router'
import axios from 'axios'
import VueAxios from 'vue-axios'
import App from './App.vue'
import env from './env'
// 因为axios是一个外部的库，它并不是vue的插件，所以不能直接Vue.use()
// 需要配合vue-axios来使用，通过它把axios作用域对象挂载到vue实例上，就可以用了
// 不用每次都导入

// 根据前端跨域方式做调整,这种是代理方式
axios.defaults.baseURL = '/api';
axios.defaults.timeout = 8000;
// 根据环境变量获取不同请求地址
axios.defaults.baseURL = env.baseURL;

// 接口错误拦截
axios.interceptors.response.use(response => {
  let res = response.data;
  if (res.status == 0) {
    return res.data;
  } else if (res.status == 10) {
    window.location.href = '/#/login';
  } else {
    alert(res.msg);
  }
})
Vue.use(VueAxios, axios);
// 关闭生产环境下的警告语句，减少运行消耗
Vue.config.productionTip = false

new Vue({
  // 当key和value一样时可以省略value值
  // 如果上面import的是routes，那下面应该写router:routers
  router,
  render: h => h(App),
}).$mount('#app')
