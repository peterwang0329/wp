// oFetch 函数用于发起 HTTP 请求  (ChatGPT)
// 参数 o 是一个包含请求配置的对象  (ChatGPT)
export async function oFetch(o) {  // o 為 json
    let r = await fetch(o.url, {   
        body: o.method == 'GET'?undefined:o.body,   
        //如果 body: o.method 使用 'GET' 請求 則設為undefined，反之設為o.body (undefined 為一个表示變量未賦值的原始数數據類型)
        method: o.method || 'GET',  //若 o.method 未定義，則使用 GET 請求方法
        headers: o.headers || {},   //若 o.headers 未定義，則默認為{}
    })
    // 检查響應的狀態碼，如果不是 2xx 则認定請求失败(ChatGPT)
    if (!r.ok) {
        console.log('webFetch:error! o=', o, 'r=', r)
        return null //請求失敗，回傳空值
    }
    let text = await r.text()   //請求成功，等待回傳訊息
    return text //回傳文本訊息
  }
  