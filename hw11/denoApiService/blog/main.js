import { sqlFetch } from '../lib/sql.js' //從sql.js中引入sqlFetch函式到這

export var R = {}
let _id=0, _title=1, _body=2

// 監聽 hash 變化事件(ChatGPT)
window.onhashchange = async function () {
  var r
  var tokens = window.location.hash.split('/')  // 分割 hash 获得令牌数组(ChatGPT)
  console.log('tokens=', tokens)
  switch (tokens[0]) { 
    case '#show':
      let r = await sqlFetch('blog', `SELECT id, title, body FROM posts WHERE id=${tokens[1]}`) //等待sqlFetch回應, await只能使用在 async 類別的函式中
      R.show(r[0]) // 取得第一筆傳入 (雖然只會有一筆，但 SELECT 預設會傳回很多比，所以用 results[0] 只取第一筆)
      break
    case '#new':
      R.new() //建立新文件
      break
    default:
      let posts = await sqlFetch('blog', `SELECT id, title, body FROM posts`) //等待資料庫回傳內容
      R.list(posts) //顯示頁面列表
      break
  }
}

window.onload = async function () {  //初始化
  await sqlFetch('blog', `CREATE TABLE IF NOT EXISTS posts (id INTEGER PRIMARY KEY AUTOINCREMENT, title TEXT, body TEXT)`)
  window.onhashchange()
}

R.layout = function (title, content) {
  document.querySelector('title').innerText = title  //設置 blog 頁面標題
  document.querySelector('#content').innerHTML = content //設置 blog 頁面內容
}

//建立頁面列表
R.list = function (posts) {
  let list = []
  for (let post of posts) {
    list.push(`
    <li>
      <h2>${post[_title]}</h2>
      <p><a id="show${post[_id]}" href="#show/${post[_id]}">Read post</a></p>
    </li>
    `)
  } //新增每列的元素和樣式
  let content = `
  <h1>Posts</h1>
  <p>You have <strong>${posts.length}</strong> posts!</p>
  <p><a id="createPost" href="#new">Create a Post</a></p>
  <ul id="posts">
    ${list.join('\n')}
  </ul>
  `
  return R.layout('Posts', content) //設定頁面
}

R.new = function () {
  R.layout('New Post', `
  <h1>New Post</h1>
  <p>Create a new post.</p>
  <form>
    <p><input id="title" type="text" placeholder="Title" name="title"></p>
    <p><textarea id="body" placeholder="Contents" name="body"></textarea></p>
    <p><input id="savePost" type="button" value="Create"></p>
  </form>
  `)
  document.querySelector('#savePost').onclick = ()=>R.savePost() //設置保存按鈕事件
}

R.show = function (post) {
  return R.layout(post[_title], `
    <h1>${post[_title]}</h1>
    <p>${post[_body]}</p>
  `)//定義 blog 中的內容
}

R.savePost = async function () {
  //獲取輸入的內容
  let title = document.querySelector('#title').value
  let body = document.querySelector('#body').value
  await sqlFetch('blog', `INSERT INTO posts (title, body) VALUES ('${title}', '${body}')`) //呼叫 sqlFetch ,將資料插入資料庫
  window.location.hash = '#list'  //跳轉到文章頁面(ChatGPT)
}
