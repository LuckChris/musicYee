/**
 * 接口请求封装
 * **/
import axios from 'axios'
import { Toast } from 'mint-ui'
import { Indicator } from 'mint-ui'

var qs = {
  stringify: function (mapData) {
    var str = ''
    for(var name in mapData) {
      var temp = name + '=' + mapData[name] + '&'
      str+= temp
    }
    return str.splice(0, -1)
  }
}

var self ={}
self.axios = axios
self.qs = qs
self.BASE_URL = '/api'
/**
 *
 * **/
self.send = function (_options) {
  var _path = self.BASE_URL + _options.command
  let _configure ={
    method: 'get',
    responseType: 'json',
    params: _options.params,
    url: _path,
    timeout: 2000
  }
  if(_options.type == 'post') {
    _configure = {
      method: 'post',
      responseType: 'json',
      data: qs.stringify(_options.params),
      url: _path,
      timeout: 2000
    }
  }
  return axios(_configure)
    .then(function (res) {
      if(_options.loading) {
        setTimeout(() => {
          Indicator.open({
            spinnerType: 'fading-circle'
          })
        }, 10)
        if(res.data && res.data.code == 200) {
          return res.data
        }
      }


    })

}
export default self

