<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-01-29 22:12:17
 * @LastEditors: 向北
 * @LastEditTime: 2021-01-30 22:25:21
-->
<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld.vue";
import axios from "axios";
export default {
  name: "App",
  components: {
    HelloWorld,
  },
  mounted() {
    let url =
      "https://mock.mengxuegu.com/mock/6014244a2986555841710109/MiMall/test#!method=get";
    axios.get(url).then(() => {});
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
