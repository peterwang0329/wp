const main = document.querySelector('main')

let key = "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"

//與groq交互的函式
async function groqChat(q,language) {
    try{
    const jsonResponse = await fetch("https://api.groq.com/openai/v1/chat/completions", 
    {
        body: JSON.stringify({
            "model": "llama3-8b-8192",  //使用模型
            "messages": [{"role": "user", "content":"How to say "+ q + " in " + language}],   //使用者輸入的訊息
            "temperature": 0.7  //設定溫度參數
        }),
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${key}`,
        }
    })
    const jsonData = await jsonResponse.json()
    console.log(JSON.stringify(jsonData, null, 2))
    return jsonData.choices[0].message.content
    }
    catch(error){
        console.error("Error:",error);
        return "請求失敗,請稍後再試";
    }
}

//回應函式
async function chat() {
    let target = document.getElementById('target')
    let language = target.value
    let qNode = document.querySelector('#question')
    let responseNode = document.querySelector('#response')
    responseNode.innerText = '翻譯中，請稍等幾秒鐘 ...'
    let answer = await groqChat(qNode.value,language)
    responseNode.innerText = answer
}

function goBack() {
    window.history.back();
}