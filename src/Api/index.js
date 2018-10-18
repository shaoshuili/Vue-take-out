//引入ajax请求函数
import ajax from "./ajax"
//[1、根据经纬度获取位置详情](#1根据经纬度获取位置详情)<br/>
//[http://localhost:3000/position/40.10038,116.36867]
//|参数		|是否必选 |类型     |说明
// |geohash    |Y       |string   |经纬度

//根据经纬度获取地理位置
export const reqAddress = (geohash) => ajax('/api/position/'+geohash);

//获取食品分类列表
//http://localhost:3000/index_category
export const reqFoodsCategorys = ()=>ajax("/api/index_category");

//根据经纬度获取商铺列表
export const reqShops = (latitude,longitude)=>ajax("/api/shops",{latitude,longitude});

//发送短信验证码http://localhost:3000/sendcode
export const reqSendCode = (phone)=>ajax("/api/sendcode",{phone});

//手机号验证码登陆http://localhost:3000/login_sms
export const reqSmsLogin=(phone,code)=>ajax("/api/lohin_sms",{phone,code},"POST");
//用户名密码登陆http://localhost:3000/login_pwd
export const reqPwdLogin = ({name,pwd,captcha})=>ajax("/api/login_pwd",{
  name,
  pwd,
  captcha
},"POST");
//用户退出
export const reqLogOut = ()=>ajax("/api/logout");
//获取用户信息
export const reqUserInfo=()=>ajax("/api/userinfo");

//mock数据，发送请求
//获取食物信息
export const reqGoods = ()=>ajax("/goods");
export const reqRatings = ()=>ajax("/ratings");
export const reqInfo = ()=>ajax('/info');

