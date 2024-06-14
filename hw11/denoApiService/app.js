// 從其他檔案中引用特定函式過來
import { Application, Router} from "https://deno.land/x/oak/mod.ts";    // 導入deno ./oak/mod.ts中的 Application 和 Router 函式
import { oakCors } from "https://deno.land/x/cors/mod.ts";              // 導入deno ./cors/mod.ts中的 oakCors 函式
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js'

// 創建新應用程式和新路由
const app = new Application() 
const router = new Router()

// 設定POST路由
router.post('/fetch', fetchHandler)
router.post('/sqlite', sqlHandler)
router.post('/upload', uploadHandler)


app.use(oakCors()); // Enable CORS for All Routes ,啟用CORS
app.use(router.routes()) //註冊路由(ChatGPT)
app.use(router.allowedMethods())//允許方法(ChatGPT)

console.log('Server run at http://127.0.0.1:6789')  // 監聽伺服器回傳資料
await app.listen({ port: 6789 })    // 啟動服務器並監聽 6789 端口。
