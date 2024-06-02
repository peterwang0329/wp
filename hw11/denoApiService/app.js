//從其他檔案中引用特定函式過來
import { Application, Router} from "https://deno.land/x/oak/mod.ts";    //導入deno ./oak/mod.ts中的 Application 和 Router 函式
import { oakCors } from "https://deno.land/x/cors/mod.ts";              //導入deno ./cors/mod.ts中的 oakCors 函式
import { sqlHandler, fetchHandler, uploadHandler } from './handler.js'

//創建新應用程式和新路由
const app = new Application() 
const router = new Router()

//
router.post('/fetch', fetchHandler)
router.post('/sqlite', sqlHandler)
router.post('/upload', uploadHandler)


app.use(oakCors()); // Enable CORS for All Routes
app.use(router.routes())
app.use(router.allowedMethods())

console.log('Server run at http://127.0.0.1:6789')
/*監聽伺服器回傳資料*/
await app.listen({ port: 6789 }) 
