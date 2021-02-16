/*
 * @Descripttion:
 * @version:
 * @Author: 向北
 * @Date: 2021-02-01 16:58:48
 * @LastEditors: 向北
 * @LastEditTime: 2021-02-16 10:45:31
 */
// Storage封装,各种方法
const STORAGE_KEY = 'mall'
export default {
  // 设置缓存信息(遗留了一个bug，就是传的module_name如果是一个不存在的就有问题)
  setItem(key, value, module_name) {
    // 修改本身存在的值
    if (module_name) {
      let val = this.getItem(module_name);
      val[key] = value;
      this.setItem(module_name, val);
    }
    // 添加新的值
    else {
      let val = this.getStorage();
      val[key] = value;
      window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
    }
  },
  // 获取某一模块下的信息，如user模块下userName对应的值
  // module_name代表一级模块名称（键），key是二级（键）
  getItem(key, module_name) {
    // 如果是有外层模组名的话
    if (module_name) {
      // 递归调用，拿到模组名对应的对象
      let val = this.getItem(module_name);
      // 如果存在，再通过键取到里层的值
      if (val) return val[key];
    }
    // 最外层
    return this.getStorage()[key]
  },
  // 获取所有缓存信息
  getStorage() {
    return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY) || '{}')
  },
  // 清除
  clear(key, module_name) {
    let val = this.getStorage();
    if (module_name) {
      if (!val[module_name]) return
      delete val[module_name][key];
    } else {
      delete val[key];
    }
    window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(val));
  }
}