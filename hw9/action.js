var canva = document.getElementById("mycanvas");
var ctx = canva.getContext("2d");   //建立 ctx 變數儲存"2D 渲染環境"，ctx 變數實際拿來繪製 Canvas 的工具。

function game() {
    let interval = setInterval(draw, 10); /*毫秒*/
    document.getElementById("button_start").innerHTML = "speed up";
    updateColor();
}
var x = canva.width / 2;
var y = canva.height - 80;
var dx = 2;
var dy = -2;
var ballR = 10;
var PaddleToCanva = 50;

var max = 6;
var min = 2;

function draw() {
    ball();
    let random = Math.floor(Math.random() * (max - min)) + min;
    if (x + ballR >= canva.width) {
        dx = random;
        dx = -dx;
    }
    if (x - ballR <= 0) {
        dx = random;
    }
    if (y - ballR <= 0) {
        dy = random;
    }
    if (y + ballR >= canva.height) {
        dy = random;
        dy = -dy;
    }
    x += dx;
    y += dy;
}

function ball() {
    ctx.beginPath();
    ctx.arc(x, y, ballR, 0, Math.PI * 2, false);
    updateColor();
    ctx.fill();
    ctx.closePath();
}

function big() {
    if (ballR >= 20)
        document.getElementById("button_big").disabled = true;
    else {
        document.getElementById("button_small").disabled = false;
        document.getElementById("button_big").disabled = false;
    }
    ballR++;
}
function small() {
    if (ballR <= 5)
        document.getElementById("button_small").disabled = true;
    else {
        document.getElementById("button_small").disabled = false;
        document.getElementById("button_big").disabled = false;
    }
    ballR--;
}

const redRange = document.getElementById('redRange');
const greenRange = document.getElementById('greenRange');
const blueRange = document.getElementById('blueRange');

var redValue = 0;
var greenValue = 0;
var blueValue = 0;
var redIncrement = true, greenIncrement = true, blueIncrement = true;

function updateColor() {
    // 更新红色值
    if (redIncrement) {
        redValue = redValue + Math.floor(Math.random() * (10 - 1)) + 1;
        if (redValue >= 255) redIncrement = false;
    } else {
        redValue = redValue - 2;
        if (redValue <= 0) redIncrement = true;
    }

    // 更新绿色值
    if (greenIncrement) {
        greenValue =greenValue + Math.floor(Math.random() * (5 - 1)) + 1;
        if (greenValue >= 255) greenIncrement = false;
    } else {
        greenValue = greenValue - 5;
        if (greenValue <= 0) greenIncrement = true;
    }

    // 更新蓝色值
    if (blueIncrement) {
        blueValue = blueValue + Math.floor(Math.random() * (5 - 2)) + 2;
        if (blueValue >= 255) blueIncrement = false;
    } else {
        blueValue = blueValue - 3;
        if (blueValue <= 0) blueIncrement = true;
    }

    redRange.value = redValue;
    greenRange.value = greenValue;
    blueRange.value = blueValue;
    const rgbColor = `rgb(${redValue}, ${greenValue}, ${blueValue})`;
    ctx.fillStyle = rgbColor;
}

redRange.addEventListener('input', updateColor);
greenRange.addEventListener('input', updateColor);
blueRange.addEventListener('input', updateColor);
