const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const gridSize = 20;
const tileCount = canvas.width / gridSize;

let snake = [{ x: 10, y: 10 }];
let speed = { x: 0, y: 0 };
let food = { x: 15, y: 15 };
let score = 0;

document.addEventListener('keydown', changeSpeed);

function gameLoop() {
    update();
    draw();
    setTimeout(gameLoop, 50);
}

function update() {
    const head = { x: snake[0].x + speed.x, y: snake[0].y + speed.y };

    if (head.x < 0 || head.x >= tileCount || head.y < 0 || head.y >= tileCount || snakeCollision(head)) {
        resetGame();
    } else {
        snake.unshift(head);
        if (head.x === food.x && head.y === food.y) {
            score++;
            placeFood();
        } else {
            snake.pop();
        }
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    ctx.fillStyle = 'green';
    snake.forEach(part => {
        ctx.fillRect(part.x * gridSize, part.y * gridSize, gridSize, gridSize);
    });

    ctx.fillStyle = 'red';
    ctx.fillRect(food.x * gridSize, food.y * gridSize, gridSize, gridSize);
}

function changeSpeed(event) {
    const keyPressed = event.keyCode;
    if (keyPressed === 37 && speed.x === 0) {
        speed = { x: -1, y: 0 };
    }
    if (keyPressed === 38 && speed.y === 0) {
        speed = { x: 0, y: -1 };
    }
    if (keyPressed === 39 && speed.x === 0) {
        speed = { x: 1, y: 0 };
    }
    if (keyPressed === 40 && speed.y === 0) {
        speed = { x: 0, y: 1 };
    }
}

function snakeCollision(head) {
    return snake.some(part => part.x === head.x && part.y === head.y);
}

function placeFood() {
    food = {
        x: Math.floor(Math.random() * tileCount),
        y: Math.floor(Math.random() * tileCount)
    };
}

function resetGame() {
    snake = [{ x: 10, y: 10 }];
    speed = { x: 0, y: 0 };
    score = 0;
    placeFood();
}

gameLoop();
