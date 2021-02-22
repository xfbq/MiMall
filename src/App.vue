<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-01-29 22:12:17
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-17 17:33:29
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
// import storage from "./storage";
export default {
  name: "App",
  components: {},
  data() {
    return {
      res: {},
    };
  },
  mounted() {
    // 1.本地加载请求静态json文件的形式,public是根目录可以不用写
    // this.axios.get("/mock/user/login.json").then((res) => {
    //   this.res = res;
    // });
    // 2.通过easy-mock平台实现数据mock
    // this.axios.get("/user/login");
    // 3.本地集成mock.js实现数据mock
    // this.axios.get("/user/login").then((res) => {
    //   this.res = res;
    // });
  },
};
</script>

<style>
@import "./assets/scss/reset.scss";
</style>
