<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-01-29 22:12:17
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-16 17:09:23
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
    //本地加载请求静态json文件的形式
    this.axios.get("/mock/user/login.json").then((res) => {
      this.res = res;
    });
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
