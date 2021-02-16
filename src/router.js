/*
 * @Descripttion:
 * @version:
 * @Author: 向北
 * @Date: 2021-02-01 17:00:00
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-12 18:53:26
 */
// 导入插件
import Vue from 'vue';
import Router from 'vue-router';
import Home from './pages/home';
import Index from './pages/index';
import Product from './pages/product';
import Detail from './pages/detail'
import Cart from './pages/cart'
import Order from './pages/order'
import OrderConfirm from './pages/orderConfirm'
import OrderList from './pages/orderList'
import OrderPay from './pages/orderPay'
import AliPay from './pages/alipay'

// 通过Vue.use(插件)来加载插件
Vue.use(Router);

// 导出路由对象
export default new Router({
  // 路由配置（配置路由和组件之间的映射关系）
  routes: [
    {
      path: '/',
      name: 'home',
      redirect: '/index',
      component: Home,
      children: [
        {
          path: 'index',
          name: 'index',
          component: Index
        }, {
          path: 'product/:id',
          name: 'product',
          component: Product,
        }, {
          path: 'detail/:id',
          name: 'detail',
          component: Detail,
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      component: Cart
    },
    {
      path: '/order',
      name: 'order',
      component: Order,
      children: [
        {
          path: 'confirm',
          name: 'order-confirm',
          component: OrderConfirm
        }, {
          path: 'list',
          name: 'order-list',
          component: OrderList
        }, {
          path: 'pay',
          name: 'order-pay',
          component: OrderPay
        }, {
          path: 'alipay',
          name: 'alipay',
          component: AliPay
        }
      ]
    }
  ],
  // linkActiveClass: 'active',
  // mode:'history'就没有地址栏的#号，而默认是mode:'hash'有#号
  // mode: 'history'
})