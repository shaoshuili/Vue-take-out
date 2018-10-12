/*
* ajax请求函数
* */
import axios from "axios"
/*export default function ajax(url,data={},type="GET") {
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
      console.log(2222);
      resolve(response.data);
    })
      .catch(err=>{
        reject(err);
      });
  });
}*/
export default function ajax(url, data={}, type='GET') {

  return new Promise(function (resolve, reject) {
    let promise
    // 发异步请求
    if(type==='GET') {
      // 将data中所有数据转换成query参数字符串接到url中
      // Object.keys(obj): 得到obj对象自身所有属性的属性名组成的数组
      let queryString = '';
      Object.keys(data).forEach(key => {
        const value = data[key];
        queryString += key + '=' + value + '&'
      });
      if(queryString) { // username=tom&password=123&
        queryString = queryString.substring(0, queryString.length-1);
        url += '?' + queryString
      }

      // 发get请求
      promise = axios.get(url)
    } else {
      // 发post请求
      promise = axios.post(url, data)
    }
    promise.then(
      response => {
        resolve(response.data)  // 异步按成功后传递的数据不再是response, 而是response里的data
      },
      error => {
        reject(error)
      }
    )
  })

}
