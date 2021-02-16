/*
 * @Descripttion:
 * @version:
 * @Author: 向北
 * @Date: 2021-02-14 22:22:18
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-16 11:48:19
 */
let baseURL;
switch (process.env.NODE_ENV) {
  case 'development':
    baseURL = 'http://dev-mall-pre.springboot.cn/api';
    break;
  case 'test':
    baseURL = 'http://test-mall-pre.springboot.cn/api';
    break
  case 'prod':
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
  case 'prev':
    baseURL = 'http://prev-mall-pre.springboot.cn/api';
    break;
  default:
    baseURL = 'http://mall-pre.springboot.cn/api';
    break;
}

export default {
  baseURL
}
