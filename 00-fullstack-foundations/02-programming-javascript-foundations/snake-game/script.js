// ================================
// Canvas
// ================================
const canvas = document.querySelector(".canvas");
const ctx = canvas.getContext("2d");

// Grid size
const scale = 20;
const rows = canvas.height / scale;
const columns = canvas.width / scale;

// ================================
// Snake
// ================================
let snake = [
    {
        x: Math.floor(Math.random() * columns) * scale,
        y: Math.floor(Math.random() * rows) * scale
    }
];

// ================================
// Food
// ================================
let food = generateFood();

// Initial direction
let d = "right";

// ================================
// Keyboard Controls
// ================================
document.addEventListener("keydown", direction);

function direction(event) {

    switch (event.key) {

        case "ArrowLeft":
            if (d !== "right") d = "left";
            break;

        case "ArrowUp":
            if (d !== "down") d = "up";
            break;

        case "ArrowRight":
            if (d !== "left") d = "right";
            break;

        case "ArrowDown":
            if (d !== "up") d = "down";
            break;
    }
}

// ================================
// Start Game
// ================================
const playGame = setInterval(draw, 200);

// ================================
// Draw Game
// ================================
function draw() {

    // Clear canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw snake
    for (let i = 0; i < snake.length; i++) {

        ctx.fillStyle = (i === 0) ? "lime" : "white";
        ctx.strokeStyle = "red";

        ctx.fillRect(snake[i].x, snake[i].y, scale, scale);
        ctx.strokeRect(snake[i].x, snake[i].y, scale, scale);
    }

    // Draw food
    ctx.fillStyle = "yellow";
    ctx.strokeStyle = "green";

    ctx.fillRect(food.x, food.y, scale, scale);
    ctx.strokeRect(food.x, food.y, scale, scale);

    // Current head position
    let snakeX = snake[0].x;
    let snakeY = snake[0].y;

    // Move
    if (d === "left") snakeX -= scale;
    if (d === "right") snakeX += scale;
    if (d === "up") snakeY -= scale;
    if (d === "down") snakeY += scale;

    // Wrap around screen
    if (snakeX >= canvas.width) snakeX = 0;
    if (snakeX < 0) snakeX = canvas.width - scale;

    if (snakeY >= canvas.height) snakeY = 0;
    if (snakeY < 0) snakeY = canvas.height - scale;

    // New head
    const newHead = {
        x: snakeX,
        y: snakeY
    };

    // Eat food?
    if (snakeX === food.x && snakeY === food.y) {

        // Grow snake
        food = generateFood();

    } else {

        // Remove tail FIRST
        snake.pop();
    }

    // Now check self collision
    if (eatSelf(newHead, snake)) {

        clearInterval(playGame);
        alert("Game Over!");
        return;
    }

    // Add new head
    snake.unshift(newHead);
}

// ================================
// Self Collision
// ================================
function eatSelf(head, array) {

    for (let i = 0; i < array.length; i++) {

        if (head.x === array[i].x && head.y === array[i].y) {
            return true;
        }

    }

    return false;
}

// ================================
// Generate Food
// ================================
function generateFood() {

    let newFood;

    do {

        newFood = {

            x: Math.floor(Math.random() * columns) * scale,
            y: Math.floor(Math.random() * rows) * scale

        };

    } while (eatSelf(newFood, snake));

    return newFood;
}