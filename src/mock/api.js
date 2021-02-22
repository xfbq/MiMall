/*
 * @Descripttion:
 * @version:
 * @Author: 向北
 * @Date: 2021-02-16 17:51:24
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-16 19:39:32
 */
import Mock from 'mockjs'
// 第一个参数是接口地址，第二个参数是返回值
Mock.mock('/api/user/login', {
  "status": 0,
  "data": {
    "id": 12,
    "username": "admin",
    "email": "admin@51purse.com",
    "phone": null,
    "role": 0,
    "createTime": 1479048325000,
    "updateTime": 1479048325000
  }
})
