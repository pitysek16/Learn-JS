const dino = document.getElementById("dino"),
  cactus = document.getElementById("cactus"),
  p = document.getElementById("error"),
  buttonAgain = document.getElementById("button-again"),
  buttonStart = document.getElementById("button-start"),
  infoBlock = document.getElementById("info");

let dinoAlive;

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
      cactus.style = `left:${cactusLeft}px`;
      cactus.classList.remove("goLeft");
      clearInterval(dinoAlive);
    }
  }, 10);
}

function runGame() {
  cactus.style = "animation-duration: 2s;";
  infoBlock.style = "display: none";
  cactus.classList.add("goLeft");
  Game();
}

buttonStart.addEventListener("click", function () {
  runGame();
  buttonStart.style = "display: none";
});

buttonAgain.addEventListener("click", function () {
  runGame();
});
