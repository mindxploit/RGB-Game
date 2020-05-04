let numSquares = 6;
let colors = generateRandomColors(numSquares);
let squares = document.querySelectorAll(".square");
let colorH1 = document.querySelector(".display-3");
let messageDisplay = document.querySelector("#message");
let containerTop = document.querySelector("#top");
let resetBtn = document.querySelector("#reset");
let easyBtn = document.querySelector("#easyBtn");
let hardBtn = document.querySelector("#hardBtn");
let pickedColor = pickColor();

easyBtn.addEventListener("click", () => {
    easyBtn.classList.add("selected");
    hardBtn.classList.remove("selected");
    numSquares = 3;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorH1.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        if (colors[i]) {
            squares[i].style.backgroundColor = colors[i];
        } else {
            squares[i].style.display = "none";
        }
    }
});

hardBtn.addEventListener("click", () => {
    hardBtn.classList.add("selected");
    easyBtn.classList.remove("selected");
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorH1.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
        squares[i].style.display = "block";
    }
});

for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];

    squares[i].addEventListener("click", function () {
        let clickedColor = this.style.backgroundColor;
        if (clickedColor === pickedColor) {
            messageDisplay.textContent = "Correct!";
            changeColors(clickedColor);
            resetBtn.textContent = "Play again";
        } else {
            this.style.background = "#232323";
            messageDisplay.textContent = "Try again!";
        }
    });
}

colorH1.textContent = pickedColor;

function changeColors(color) {
    // change the squares color
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
    }
    containerTop.style.backgroundColor = color;
}

function pickColor() {
    // pick random color from colors arr
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColors(num) {
    let arr = [];
    for (let i = 0; i < num; i++) {
        //get random color and push to arr
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    // random red value
    let r = Math.floor(Math.random() * 256);
    // random green value
    let g = Math.floor(Math.random() * 256);
    // random blue value
    let b = Math.floor(Math.random() * 256);
    // return color
    return `rgb(${r}, ${g}, ${b})`;
}

resetBtn.addEventListener("click", () => {
    numSquares = 6;
    colors = generateRandomColors(numSquares);
    pickedColor = pickColor();
    colorH1.textContent = pickedColor;
    for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = colors[i];
    }
    containerTop.style.backgroundColor = "steelblue";
    resetBtn.textContent = "New colors";
    messageDisplay.textContent = "";
});
