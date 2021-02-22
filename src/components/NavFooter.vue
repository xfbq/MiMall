<!--
 * @Descripttion: 
 * @version: 
 * @Author: 向北
 * @Date: 2021-02-01 17:20:19
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-20 20:55:21
-->
<template>
  <div class="footer">
    <div class="footer-logo">
      <img src="/imgs/logo-footer.png" alt="" />
      <p>小米商城</p>
    </div>
    <div class="footer-link">
      <a href="javascript:;">陌上桑主页</a><span>|</span>
      <a href="javascript:;">Vue全栈课程</a><span>|</span>
      <a href="javascript:;">React全家桶课程</a><span>|</span>
      <a href="javascript:;">微信支付专项课程</a>
    </div>
    <div class="copyright">
      Copyright © mi.com 京ICP证110507号
      <span class="domain">京ICP备10046444号 京公网安备</span>
      11010802020134号 京网文[2020]0276-042号
    </div>
  </div>
</template>
<script>
export default {
  name: "nav-footer",
};
</script>
<style lang="scss" scoped>
.footer {
  height: 234px;
  border-top: 4px solid #ff6600;
  background-color: #333333;
  color: #999999;
  font-size: 16px;
  text-align: center;
  .footer-logo {
    margin-top: 46px;
    margin-bottom: 31px;
    img {
      width: 53px;
      height: 36px;
      margin-bottom: 13px;
    }
  }
  .footer-link {
    a {
      color: #999999;
      display: inline-block;
    }
    span {
      margin: 0 10px;
    }
    margin-bottom: 13px;
  }
  .copyright {
    .domain {
      color: #ff6600;
    }
  }
}
</style>