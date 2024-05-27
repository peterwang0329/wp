var canva = document.getElementById("mycanvas");

var score = 0;
let move = (canva.width - paddleWidth) / 2;

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (x > b.x - ballR && x < b.x + brickWidth + ballR 
                && y > b.y - ballR && y < b.y + brickHeight + ballR 
                && b.status == 1)
                {
                    dy = -dy;
                    b.status = 0;
                    score++;
                }
                if (score == brickRowCount * brickColumnCount)
                    win();
        }
    }
    if (x + ballR >= canva.width || x - ballR <= 0) {
        dx = -dx;
    }
    if (y - ballR  <= 0) {
        dy = -dy;
    }
    else if (y + ballR >= canva.height - paddleHeight - PaddleToCanva
        && y + ballR <= canva.height - PaddleToCanva ) {
        // 检查是否碰到paddle
        if (x > move && x < move + paddleWidth) {
            if(dy>0)
                dy = -dy;
        }
    }
    else if (y + ballR >= canva.height) {
        listen = false;
        reload();
    }
}

var message = "";

function win(){
    message = "You win";
    listen = false;
}
