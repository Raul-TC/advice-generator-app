export function Card() {
  const $card = document.createElement("div");
  $card.classList.add("card");

  $card.innerHTML = `
     <div class="containerInfo">
    <h1>#</h1>
   <p>😞</p>
     </div>
   <img src="app/assets/pattern-divider-desktop.svg" class="pattern" alt="pattern-design">
      <span class="dice">
      <img src="app/assets/dice-svgrepo-com.svg" alt="diice-generator">
      </span>
     `;

  setTimeout(() => {
    if (window.screen.width < 428) {
      document.querySelector(".card img").src =
        "app/assets/pattern-divider-mobile.svg";
    }
  }, 100);

  return $card;
}
