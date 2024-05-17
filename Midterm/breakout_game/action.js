var canva = document.getElementById("mycanvas");
var ctx = canva.getContext("2d");   //建立 ctx 變數儲存"2D 渲染環境"，ctx 變數實際拿來繪製 Canvas 的工具。

function game(){
    let interval = setInterval(draw,10); /*毫秒*/  
    document.getElementById("button_start").innerHTML = "speed up";
    /*document.getElementById("button_start").disabled = true;*/
}


function draw(){
    ctx.clearRect(0,0,canva.width,canva.height); /*清除軌跡*/    
    ball();
    paddle();
    if(x + ballR >= canva.width || x - ballR <= 0) {
        dx = -dx;
    }
    if(y - ballR <= 0) {
        dy = -dy;
    } 
    else if(y + ballR >= canva.height-paddleHeight-PaddleToCanva 
        && y + ballR <= canva.height-PaddleToCanva) {
        // 检查是否碰到paddle
        if(x > move && x < move + paddleWidth) {
            dy = -dy;
        } 
    }
    else if(y+ ballR >= canva.height){
        alert("Game over");
        document.location.reload();
        clearInterval(interval);
    }
    x += dx;
    y += dy;
}
var x = canva.width /2;
var y = canva.height -80;
var dx = 2;
var dy = -2;
var ballR = 10;
var PaddleToCanva = 50;

function ball(){
    ctx.beginPath();
    ctx.arc(x, y, ballR, 0, Math.PI*2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}

const paddleHeight = 10;
const paddleWidth = 75;
let move = (canva.width - paddleWidth) / 2;

function paddle(){
    ctx.beginPath();
    ctx.rect(move,canva.height-paddleHeight-PaddleToCanva,paddleWidth,paddleHeight);
    ctx.fillStyle ="#0095DD";
    ctx.fill();
    ctx.closePath();
    if(right){
        move += 4;
        move = Math.min(move+4,canva.width - paddleWidth);
    }
    else if(left){
        move -= 4;
        move = Math.max(move-4,0);
    }
}

let right = false;
let left = false;

document.addEventListener("keydown", keyDown,false);
document.addEventListener("keyup", keyUp,false);

function keyDown(e){
    if(e.key === "Right" || e.key === "ArrowRight")
        right = true;
    else if (e.key === "Left" || e.key === "ArrowLeft")    
        left = true;
}
function keyUp(e){
    if(e.key === "Right" || e.key === "ArrowRight")
        right = false;
    else if (e.key === "Left" || e.key === "ArrowLeft")    
        left = false;
}

const brickRowCount = 3;
const brickColumnCount = 5;
const brickWidth = 75;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

