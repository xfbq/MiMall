<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-02-01 17:16:29
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-06 15:57:11
-->
<template>
  <div>
    home
    <!-- 调用各个组件整合为模板 -->
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "../components/NavFooter.vue";
import NavHeader from "../components/NavHeader.vue";
export default {
  // 需要用的组件
  components: { NavHeader, NavFooter },
  name: "nav-home",
};
</script>