
import http from '@/utils/http'
import {
  banner,
  personalized,
  newAlbum,
  albumInfo,
  newSongs,
  createNewSongs
} from "./config"

export default {

  /**
   * 请求发现页面的banner图
   * params  请求参数
   * **/
  getBanner(params) {
    return http.send({command: banner, params })
  },

  /**
   * 推荐歌单
   * **/
  getPersonalized(params) {
    return http.send({ command: personalized, params })
  },

  /**
   * 发现页新碟
   * */
  getNewAlbum(params) {
    return http.send({ command: newAlbum, params })
  },

  /**
   * 获取新碟信息
   * */
  getAlbumInfo(params) {
    return http.send({ command: albumInfo, params})

  },

  /**
   * 获取新歌
   * type  0全部 7华语 96欧美 8日本 16韩国
   * **/
  getNewSongs(params,) {
    return http.send({ command: newSongs, params, loading :true})
  },

  /**
   * 新建歌单
   * name 歌单名
   */

   createNewSongs(params) {
     return http.send({ command: createNewSongs, params })
   }
}
