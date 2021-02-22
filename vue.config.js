/*
 * @Descripttion:
 * @version:
 * @Author: 向北
 * @Date: 2021-01-31 01:05:27
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-20 17:49:26
 */
module.exports = {
  // 默认加载devServer配置表
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'http://mall-pre.springboot.cn',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
