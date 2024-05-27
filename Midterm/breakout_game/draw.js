var canva = document.getElementById("mycanvas");

function draw() {
    if (listen) {
        ctx.clearRect(0, 0, canva.width, canva.height); /*清除軌跡*/
        ball();
        paddle();
        brick();
        drawScore();
        collisionDetection();
        x += dx;
        y += dy;
    }
    else {
        reload();
    }
}

var x = canva.width / 2;
var y = canva.height - 80;
var dx = 2;
var dy = -2;
var ballR = 10;
var PaddleToCanva = 50;

function ball() {
    ctx.beginPath();
    ctx.arc(x, y, ballR, 0, Math.PI * 2, false);
    ctx.fillStyle = "green";
    ctx.fill();
    ctx.closePath();
}
/*在JS中的const 能夠修改對象的属性，不能重新賦於新的值,
ex:obj.a = 2; // 合法：修改對象的属性
   obj = { a: 3 }; // 非法：重新赋值整個對象*/
const paddleHeight = 10;
const paddleWidth = 75;

function paddle() {
    ctx.beginPath();
    ctx.rect(move, canva.height - paddleHeight - PaddleToCanva, paddleWidth, paddleHeight);
    ctx.fillStyle = "#0095DD";
    ctx.fill();
    ctx.closePath();
    movekey();
}

const brickRowCount = 6;
const brickColumnCount = 9;
const brickWidth = 50;
const brickHeight = 20;
const brickPadding = 10;
const brickOffsetTop = 30;
const brickOffsetLeft = 30;

const bricks = [];
for (let c = 0; c < brickColumnCount; c++) {
    bricks[c] = []; // 為每一列創建一個新的數组
    for (let r = 0; r < brickRowCount; r++) {
        bricks[c][r] = { x: 0, y: 0, status: 1 }; // 初始化每個磚塊對象，默認x和y位置為0
    }
}

function brick() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            //遞增改變xy的位置 讓磚塊按照順序和間格排列
            if (bricks[c][r].status == 1) {
                const brickX = c * (brickWidth + brickPadding) + brickOffsetLeft;
                const brickY = r * (brickHeight + brickPadding) + brickOffsetTop;
                bricks[c][r].x = brickX;
                bricks[c][r].y = brickY;
                ctx.beginPath();
                ctx.rect(brickX, brickY, brickWidth, brickHeight);
                ctx.fillStyle = "#0095DD";
                ctx.fill();
                ctx.closePath();
            }
        }
    }
}

function drawScore() {
    ctx.font = "16px Arial";
    ctx.fillStyle = "#0095DD";
    ctx.fillText("Score: " + score, 8, 20);
}

function drawGameover() {
    ctx.font = "32px Arial";
    ctx.fillStyle = "#0095DD";
    //ctx.fillText("You Win!");
    ctx.fillText("reload in " + time/100 + "s",canva.width/2-75, canva.height/2);
}