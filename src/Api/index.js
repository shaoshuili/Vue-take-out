//引入ajax请求函数
import ajax from "./ajax"

//[1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
//[http://localhost:3000/position/40.10038,116.36867]
//|参数		|是否必选 |类型     |说明
// |geohash    |Y       |string   |经纬度


export const reqAddress = (geohash) => ajax('/api/position/'+geohash);



//http://localhost:3000/index_category





