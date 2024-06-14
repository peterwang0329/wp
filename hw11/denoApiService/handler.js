import { DB } from "https://deno.land/x/sqlite/mod.ts"; // 導入deno ./sqlite/mod.ts中的 DB 函式
import { oFetch } from "./lib.js"
//CURD(create、updata、read、delete)

export async function sqlHandler(ctx) { 
    const body = ctx.request.body; // content type automatically detected
    if (body.type() === "json") {
        let json = await body.json() //等待body.json()回傳再執行
        console.log('json=', json)
        let db = json.db    //數據庫
        let sql = json.sql  //疑似bool?
        const dbo = new DB(`db/${db}.db`) //打開資料庫
        let result = sql ? dbo.query(sql) : '[]'  //判定
        dbo.close() //處理完畢，關閉資料庫
        ctx.response.body = result //更改解析對象
    }
}

export async function fetchHandler(ctx) {
    const body = ctx.request.body(); // content type automatically detected
    console.log('body = ', body)
    if (body.type === "json") {
        let json = await body.value // 異步等待解析 JSON 請求體(ChatGPT)
        console.log('json=', json)
        let result = await oFetch(json) //等待oFetch(json)回傳再執行
        console.log('result=', result)
        ctx.response.body = result   //更改解析對象
    }
}

export async function uploadHandler(ctx) {
    const body = await ctx.request.body({ type: 'form-data' }) //等待oFetch(json)回傳再執行
    const data = await body.value.read()  //讀取 form-data 數據 (ChatGPT)
    console.log(data)
    console.log("fields=", data.fields)
    let r = []
    for (let f of data.files) {
        console.log("filename=", f.filename)
        console.log("originalName=", f.originalName)
        await Deno.copyFile(f.filename, `./upload/${f.originalName}`) //將臨時資料複製到 upload 資料夾中
        await Deno.remove(f.filename) //移除臨時資料
        r.push({file:f.originalName}) //回傳資料到 file 中
    }
    ctx.response.body = r  //回傳資料並更改解析對象
}
