const nextBtn = document.querySelector("#next-btn");
const prevBtn = document.querySelector("#prev-btn");
const cards = document.querySelectorAll(".card");
let currentCard = 0;

function removeSelection(){
  const selectedCard = document.querySelector(".selected");
  selectedCard.classList.remove("selected");
}

function selectCard(currentCard){
  cards[currentCard].classList.add("selected");
}

nextBtn.addEventListener("click", () => {
  if(currentCard === cards.length - 1){
    currentCard = -1;
  }

  removeSelection();
  selectCard(++currentCard); // currentCard += 1
});

prevBtn.addEventListener("click", () => {
  if(currentCard === 0){
    currentCard = cards.length;
  }

  removeSelection();
  selectCard(--currentCard); // currentCard -= 1
});
