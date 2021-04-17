const dino = document.querySelector("#dino"),
  cactus = document.querySelector("#cactus"),
  p = document.querySelector("#error"),
  buttonStart = document.querySelector("#button-start"),
  infoBlock = document.querySelector("#info"),
  blockButtons = document.querySelector("#block-buttons"),
  speedButtons = document.querySelectorAll(".speed-buttons"),
  speedError = document.querySelector("#speed-error"),
  timer = document.querySelector("#timer");

let dinoAlive,
  interval,
  timeNum = 0;

document.addEventListener("keydown", function () {
  jump();
});

function jump() {
  if (dino.classList != "jump") {
    dino.classList.add("jump");
  }

  setTimeout(() => {
    dino.classList.remove("jump");
  }, 300);
}

function Game() {
  dinoAlive = setInterval(() => {
    let dinoTop = parseInt(
      window.getComputedStyle(dino).getPropertyValue("top")
    );
    let cactusLeft = parseInt(
      window.getComputedStyle(cactus).getPropertyValue("left")
    );

    if (cactusLeft < 50 && cactusLeft > 0 && dinoTop >= 140) {
      infoBlock.style = "display: block";
      blockButtons.style = "opacity: 1";
      buttonStart.innerText = "Try Again";
      cactus.style = `left:${cactusLeft}px`;
      cactus.classList.remove("goLeft");
      cactus.classList.remove("speedChoose");
      clearInterval(dinoAlive);
      clearInterval(interval);
    }
  }, 10);
}

function runGame() {
  if (cactus.classList.contains("speedChoose")) {
    infoBlock.style = "display: none";
    cactus.classList.add("goLeft");
    blockButtons.style = "opacity: 0";
    Game();
    time();
  } else {
    speedError.innerText = "You must select the difficulty of the game";
  }
}

buttonStart.addEventListener("click", function () {
  runGame();
});

function time() {
  interval = setInterval(() => {
    timeNum += 0.1;
    timer.textContent = timeNum.toFixed(2);
  }, 100);
}

blockButtons.addEventListener("click", function (e) {
  if (e.toElement.id === "button-easy") {
    cactus.style = "animation-duration: 2.5s;";
  } else if (e.toElement.id === "button-medium") {
    cactus.style = "animation-duration: 2s;";
  } else if (e.toElement.id === "button-hard") {
    cactus.style = "animation-duration: 1.5s;";
  }

  speedButtons.forEach((item) => {
    item.classList.remove("bg-yellow-900");
  });

  if (e.toElement.classList.contains("speed-buttons")) {
    e.toElement.classList.add("bg-yellow-900");
    cactus.classList.add("speedChoose");
    speedError.innerText = "";
  }
});
