export function DiceCard() {
  const $diceContainer = document.createElement("div");

  $diceContainer.classList.add("dice");
  $diceContainer.innerHTML = `<img src="app/assets/dice-svgrepo-com.svg" alt="dice-generator">`;

  return $diceContainer;
}
