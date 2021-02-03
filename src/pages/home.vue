<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-02-01 17:16:29
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-03 11:01:52
-->
<template>
  <div>
    <nav-header></nav-header>
    <router-view></router-view>
    <nav-footer></nav-footer>
  </div>
</template>
<script>
import NavFooter from "../components/NavFooter.vue";
import NavHeader from "../components/NavHeader.vue";
export default {
  components: { NavHeader, NavFooter },
  name: "nav-header",
};
</script>