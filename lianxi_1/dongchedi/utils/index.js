const DEFAULT_OPT ={
    url:'',
    data:{},
    header:{
        'Content-Type' : 'application/json'
    },
    method:'GET',
    dataType:'json'
}

let util = {
    request(opt) {
        const Options = {
            ...DEFAULT_OPT,
            ...opt
        };
        const {url,data,header,method,dataType} = Options;
      return new Promise((resolve,reject) => {
          wx.request({
              url,
              data,
              header,
              method,
              dataType,
              success: (res) => {
                  resolve(res.data);
              },
              fail:(err) => {
                  reject(err)
              }
          })
      })
    }
}

export default util;