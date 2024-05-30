var canva = document.getElementById("mycanvas");

var score = 0;
let move = (canva.width - paddleWidth) / 2;

function collisionDetection() {
    for (let c = 0; c < brickColumnCount; c++) {
        for (let r = 0; r < brickRowCount; r++) {
            var b = bricks[c][r];
            if (x > b.x - ballR && x < b.x + brickWidth + ballR
                && y > b.y - ballR && y < b.y + brickHeight + ballR
                && b.status == 1) {
                dy = -dy;
                b.status = 0;
                score++;
            }
            if (score == brickRowCount * brickColumnCount) {
                win();
                reload();
            }
        }
    }
    if (x + ballR >= canva.width || x - ballR <= 0) {
        dx = -dx;
    }
    if (y - ballR <= 0) {
        dy = -dy;
    }
    else if (y + ballR >= canva.height - paddleHeight - PaddleToCanva
        && y + ballR <= canva.height - PaddleToCanva) {
        // 检查是否碰到paddle
        if (x + ballR > move-4 && x + ballR < move + paddleWidth+4 
            &&y + ballR >= canva.height - paddleHeight - PaddleToCanva
            && y + ballR <= canva.height - paddleHeight - PaddleToCanva + 10) {
            if (dy > 0)
                dy = -(Math.random() * (3 - 2) + 2);
            if (dx > 0)
                dx = Math.random() * (2.5 - 2) + 2;
            else
                dx = -(Math.random() * (2.5 - 2) + 2);
        }
        if((x + ballR >= move && x + ballR <= move + 4 && dx > 0)
            ||(x + ballR >= move + paddleWidth -4 && x + ballR <= move + paddleWidth && dx < 0)){
                if(dx > 0)  
                    dx = -(Math.random() * (2.5 - 2) + 2);
                else
                    dx = Math.random() * (2.5 - 2) + 2;
            }
    }
    else if (y + ballR >= canva.height) {
        listen = false;
        reload();
    }
}

var message = "You lose! try again";

function win() {
    message = "You win!";
    time = 1000;
    listen = false;
}
