const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

//size
canvas.width = 800;
canvas.geight = 600;

let x = canvas.width / 2;
let y = canvas.height / 2;
const speed = 5;
let dx = 0;
let dy = 0;

const characterImage = new Image();
characterImage.src = 'character.png';

function drawCharacter() {
    ctx.drawImage(characterImage,x, y, 50, 50);
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function update() {
    clearCanvas();
    drawCharacter();
    x += dx;
    y += dy;
    requestAnimationFrame(update);
}

function keyDownHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight") {
        dx = speed;
    } else if (e.key === "Left" || e.key === "ArrowLeft") {
        dx = -speed;
    } else if (e.key === "Up" || e.key === "ArrowUp") {
        dy = -speed;
    } else if (e.key === "Down" || e.key === "ArrowDown") {
        dy = speed;
    }
}

function keyUpHandler(e) {
    if (e.key === "Right" || e.key === "ArrowRight" ||
        e.key === "Left" || e.key === "ArrowLeft") {
        dx = 0;
    }
    if (e.key === "Up" || e.key === "ArrowUp" ||
        e.key === "Down" || e.key === "ArrowDown") {
        dy = 0;
    }
}

document.addEventListener('keydown', keyDownHandler);
document.addEventListener('keyup', keyUpHandler);

update();