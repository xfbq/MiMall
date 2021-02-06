<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-02-03 11:29:07
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-06 21:28:18
-->
<template>
  <div>
    <nav-header />
    cart
    <nav-footer />
  </div>
</template>
<script>
import NavFooter from "../components/NavFooter.vue";
import NavHeader from "../components/NavHeader.vue";
export default {
  components: { NavHeader, NavFooter },
  // 需要用的组件
  name: "cart",
};
</script>