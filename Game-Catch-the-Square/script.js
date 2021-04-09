const startBtn = document.querySelector("#btn-start"),
  gameField = document.querySelector("#game-field"),
  timer = document.querySelector("#timer"),
  timeBlock = document.querySelector("#time-block"),
  resultBlock = document.querySelector("#result-block"),
  result = document.querySelector("#result"),
  setTimer = document.querySelector("#set-timer"),
  colors = [
    "#8B0000",
    "#FF4500",
    "#4B0082",
    "#8B4513",
    "#000080",
    "#000000",
    "#191970",
    "#4682B4",
    "#008080",
    "#556B2F",
    "#006400",
    "#32CD32",
  ];

let score = 0,
  isGameStarted = false;

startBtn.addEventListener("click", startGame);
gameField.addEventListener("click", handlerFieldClick);
setTimer.addEventListener("click", setGameTime);

function startGame() {
  hidden(startBtn);
  hidden(resultBlock);
  show(timeBlock);

  gameField.classList.add("bg-white");
  gameField.classList.remove("bg-gray-300");

  score = 0;
  isGameStarted = true;
  setGameTime();
  setTimer.setAttribute("disabled", "true");

  let interval = setInterval(() => {
    let timeNum = parseFloat(timer.textContent);

    if (timeNum <= 0) {
      clearInterval(interval);
      endGame();
    } else {
      timer.textContent = (timeNum -= 0.1).toFixed(2);
    }
  }, 100);

  renderSquare();
}

function renderSquare() {
  const oneSquare = document.createElement("div"),
    fieldSize = gameField.getBoundingClientRect(),
    randomId = RandomNum(0, colors.length),
    squareSize = RandomNum(30, 100),
    maxTop = fieldSize.height - squareSize,
    maxLeft = fieldSize.width - squareSize;

  gameField.innerHTML = "";
  oneSquare.style.width = oneSquare.style.height = `${squareSize}px`;
  oneSquare.style.position = "absolute";
  oneSquare.style.backgroundColor = colors[randomId];
  oneSquare.style.top = `${RandomNum(4, maxTop)}px`;
  oneSquare.style.left = `${RandomNum(4, maxLeft)}px`;
  oneSquare.style.cursor = "pointer";
  oneSquare.setAttribute("data-square", "true");

  gameField.insertAdjacentElement("afterbegin", oneSquare);
}

function handlerFieldClick(e) {
  if (!isGameStarted) {
    return;
  }
  if (e.target.dataset.square) {
    score++;
    renderSquare();
  }
}

function RandomNum(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}

function endGame() {
  isGameStarted = false;
  result.textContent = score.toString();
  gameField.innerHTML = "";

  show(startBtn);
  show(resultBlock);
  hidden(timeBlock);

  gameField.insertAdjacentElement("afterbegin", startBtn);
  gameField.classList.remove("bg-white");
  gameField.classList.add("bg-gray-300");

  setTimer.removeAttribute("disabled");
}

function setGameTime() {
  const time = parseInt(setTimer.value);
  timer.textContent = time.toFixed(1);
  hidden(resultBlock);
  show(timeBlock);
}

function show(el) {
  el.classList.remove("hidden");
}

function hidden(el) {
  el.classList.add("hidden");
}
