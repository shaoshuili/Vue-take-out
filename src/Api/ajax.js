/*
* ajax请求函数
* */
import axios from "axios"
export default function ajax(url,data={},type="GET") {
  return new Promise(function(resolve,reject){
    let promise;
    if(type=== "GET"){
      //将data中数据拼接转换成query参数，拼接到url中
      let dataStr = "";
      //遍历对象自身的属性
      Object.keys(data).forEach(key =>{
        //username=aaa&&pwd=123
        dataStr += key + "=" +data[key] + "&";
      });
      //判断是否传参数
      if(dataStr){
        //截取字符串
        dataStr =  dataStr.substring(0,dataStr.length-1);
        url += "?" + dataStr;
      }
      promise= axios.get(url);
    }else {
      promise= axios.post(url,data);
      console.log(1111);
    }
    promise.then(response =>{
      resolve(response.data);
    })
      .catch(err=>{
        reject(err);
      });
  });
}

