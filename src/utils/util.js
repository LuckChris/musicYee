/**
 * 一些常用的方法
 * **/

export default {
  // 存储key
  set(key, value) {
    let currentTime = new Date().getTime()
    let keyValue = JSON.stringify({
      val: value,
      time: currentTime
    })
    localStorage.setItem(key, keyValue)
  },

  // 获取key
  get(key) {
    if(localStorage.getItem(key) == null) {
      return null
    }
    let vals = localStorage.getItem(key)
    let dataObj = JSON.parse(vals)
    if(key == 'token') { //  设置token的过期时间
      let expTime = 2 * 60 * 60 * 1000
      let time = (new Date().getTime() - vals.time) > expTime
      if(time) {
        localStorage.removeItem(key)
        return null
      }
    }
    return dataObj.val
  },

  // 删除key
  remove(key) {
    if(key == 'undefined') {
      localStorage.clear()
    } else {
      localStorage.removeItem(key)
    }
  }
}
