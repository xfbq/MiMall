/*
 * @Descripttion:
 * @version:
 * @Author: 向北
 * @Date: 2021-01-31 01:05:27
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-01 16:22:29
 */
module.exports = {
  devServer: {
    host: 'localhost',
    port: 8080,
    proxy: {
      '/api': {
        target: 'https://www.imooc.com',
        changeOrigin: true,
        pathRewrite: {
          '/api': ''
        }
      }
    }
  }
}
