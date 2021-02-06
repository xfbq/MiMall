<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-02-03 11:28:11
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-06 20:58:11
-->
<template>
  <div>
    order
    <order-header />
    <router-view />
    <order-footer />
  </div>
</template>
<script>
import OrderFooter from "../components/OrderFooter.vue";
import OrderHeader from "../components/OrderHeader.vue";
export default {
  name: "order",
  components: { OrderHeader, OrderFooter },
};
</script>
