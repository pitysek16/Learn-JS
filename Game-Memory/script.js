const cards = document.querySelectorAll(".memory-card");

let hasFlippedCard = false;
let fieldLock = false;
let firstCard, secondCard;

const flipCard = (e) => {
  if (fieldLock) return;
  const target = e.target.parentElement;

  if (target === firstCard) return;

  target.classList.add("flip");

  if (!hasFlippedCard) {
    hasFlippedCard = true;
    firstCard = target;
  } else {
    hasFlippedCard = false;
    secondCard = target;
    checkForMatch();
  }
};

const disableCard = () => {
  firstCard.removeEventListener("click", flipCard);
  secondCard.removeEventListener("click", flipCard);
};

const unflipCards = () => {
  fieldLock = true;
  setTimeout(() => {
    firstCard.classList.remove("flip");
    secondCard.classList.remove("flip");

    resertField();
  }, 1000);
};

const checkForMatch = () => {
  const isEqual = firstCard.dataset.color === secondCard.dataset.color;
  isEqual ? disableCard() : unflipCards();
};

const resertField = () => {
  [hasFlippedCard, fieldLock] = [false, false];
  [firstCard, secondCard] = [null, null];
};

cards.forEach((card) => {
  card.addEventListener("click", flipCard);

  const randomOrder = Math.floor(Math.random() * cards.length);
  card.style.order = randomOrder;
});
