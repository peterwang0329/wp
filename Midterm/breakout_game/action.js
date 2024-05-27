var canva = document.getElementById("mycanvas");
var ctx = canva.getContext("2d");   //建立 ctx 變數儲存"2D 渲染環境"，ctx 變數實際拿來繪製 Canvas 的工具。

function game() {
    var interval = setInterval(draw, 10); /*毫秒*/
    var interval2 = setInterval(speed, 1000); /*毫秒*/
    document.getElementById("button_start").style.display = "none";
    //document.addEventListener("mousemove", mouseMoveHandler, false);
    /*document.getElementById("button_start").disabled = true;*/
}

var listen = true;
var time = 500;

function reload() {
    if (time % 100 == 0) {
        ctx.clearRect(0, 0, canva.width, canva.height);
        drawGameover();
    }
    time--;
    if (time <= 0) {
        time = 500;
        listen = true;
        x = canva.width / 2;
        y = canva.height - 80;
        do {
            dx = Math.floor(Math.random() * (2 - (-2) + 1)) + (-2);//修改一下速度和反彈角度
            dy = Math.floor(Math.random() * (2 - (-2) + 1)) + (-2);
        } while ((dx > 1 || dx < -1) && (dy > 1 || dy < -1));
        score = 0;
        move = (canva.width - paddleWidth) / 2;
        for (let c = 0; c < brickColumnCount; c++) {
            for (let r = 0; r < brickRowCount; r++) {
                bricks[c][r].status = 1;
            }
        }
    }
}

function speed() {
    dx = dx + 0.1;
    dy = dy + 0.1;
}

let right = false;
let left = false;

document.addEventListener("keydown", keyDown, false);
document.addEventListener("keyup", keyUp, false);

function keyDown(e) {
    if (e.key === "Right" || e.key === "ArrowRight")
        right = true;
    else if (e.key === "Left" || e.key === "ArrowLeft")
        left = true;
}
function keyUp(e) {
    if (e.key === "Right" || e.key === "ArrowRight")
        right = false;
    else if (e.key === "Left" || e.key === "ArrowLeft")
        left = false;
}

function movekey() {
    if (right) {
        move += 4;
        move = Math.min(move + 4, canva.width - paddleWidth);
    }
    else if (left) {
        move -= 4;
        move = Math.max(move - 4, 0);
    }
}

/*function mouseMoveHandler(e) {
  var relativeX = e.clientX - canvas.offsetLeft;
  if (relativeX > 0 && relativeX < canvas.width) {
    paddleX = relativeX - paddleWidth / 2;
  }
}*/