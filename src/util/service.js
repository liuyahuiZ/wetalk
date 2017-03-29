import '@/util/jquery.js'
class Service {
  Get(api,reqbody){
    console.log(api,reqbody)
    return new Promise(function (resolve, reject) {
      $.ajax({
          url:'http://tingapi.ting.baidu.com/v1/restserver/ting?method=baidu.ting.song.downWeb&songid=877578&bit=24&_t=1393123213'+api,
          type:'GET', //GET
          async:true,    //或false,是否异步
          data:reqbody,
          timeout:5000,    //超时时间
          dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
          beforeSend:function(xhr){
              console.log(xhr)
              console.log('发送前')
          },
          success:function(data,textStatus,jqXHR){
            //   console.log(data)
            //   console.log(textStatus)
            //   console.log(jqXHR)
              resolve(data)
          },
          error:function(xhr,textStatus){
              console.log('错误')
            //   console.log(xhr)
            //   console.log(textStatus)
              reject(textStatus)
          },
          complete:function(){
              console.log('结束')
          }
      })
    })
  }
  Post(api,reqbody){
    console.log(api,reqbody)
    return new Promise(function (resolve, reject) {
      let msg = {
        "reqBody":  reqbody
      }
      let reqData = 'reqContent='+encodeURI(JSON.stringify(msg));
      $.ajax({
          url:'http://47.88.2.72:2016/'+api,
          type:'POST', //GET
          async:true,    //或false,是否异步
          data:reqData,
          timeout:5000,    //超时时间
          dataType:'json',    //返回的数据格式：json/xml/html/script/jsonp/text
          beforeSend:function(xhr){
            //   console.log(xhr)
              console.log('发送前')
          },
          success:function(data,textStatus,jqXHR){
            //   console.log(data)
            //   console.log(textStatus)
            //   console.log(jqXHR)
              resolve(data)
          },
          error:function(xhr,textStatus){
            //   console.log('错误')
            //   console.log(xhr)
            //   console.log(textStatus)
              reject(textStatus)
          },
          complete:function(){
              console.log('结束')
          }
      })
    })
  }
}
export default Service= new Service
